<template>
  <div class="search-page">
    <pre>{{ articles }}</pre>
    <!--    <ArticleSection :articles="articles" title="Search" content-path="blog" />-->
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  async asyncData({ $content, params }) {
    const tag = 'hola'

    const articles = await $content('blog')
      .only(['title', 'description'])
      .sortBy('createdAt', 'desc')
      .where({ tags: { $containsAny: tag } })
      .fetch()

    // const allPosts = await $content('blog').fetch()
    // const totalArticles = allPosts.length

    console.log('<<<articles>>>')
    console.log(articles)

    // const articles = await $content('blog')
    //   .only(['title', 'description', 'slug', 'created', 'body'])
    //   .sortBy('created', 'desc')
    //   .fetch()

    return {
      articles,
      // totalArticles,
    }
  },
}
</script>
