<template>
  <div class="search-page">
    <ArticleSection :articles="articles" title="Search" />
  </div>
</template>

<script>
import { addDisplayDate } from 'assets/functions'

export default {
  name: 'SearchPage',
  async asyncData({ $content, params, route }) {
    const articles = await $content('blog')
      .only(['title', 'description', 'body', 'created', 'slug'])
      .sortBy('createdAt', 'desc')
      .where({ tags: { $containsAny: 'node' } })
      .fetch()

    return {
      articles: addDisplayDate(articles),
    }
  },
}
</script>
