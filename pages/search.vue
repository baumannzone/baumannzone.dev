<template>
  <div class="search-page">
    <ArticleSection :articles="articles" title="Buscar" />
  </div>
</template>

<script>
import { addDisplayDate } from 'assets/functions'

export default {
  name: 'SearchPage',
  async asyncData({ $content, query, redirect }) {
    if (!query.q) {
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
