<template>
  <div class="search-page">
    <ArticleSection :articles="articles" title="Search" content-path="blog" />
  </div>
</template>

<script>
import { addDisplayDate } from 'assets/functions'

export default {
  name: 'SearchPage',
  async asyncData({ $content, query, redirect }) {
    // Si no hay query params,
    // O si está vacía la query o si la clave no es `q`
    // redirect a la home
    if (Object.keys(query).length === 0 || !query.q) {
      redirect('/')
    }

    const articles = await $content('blog')
      .only(['title', 'description', 'body', 'created', 'slug'])
      .sortBy('createdAt', 'desc')
      .search(query.q)
      .fetch()

    return {
      articles: addDisplayDate(articles),
    }
  },
}
</script>
