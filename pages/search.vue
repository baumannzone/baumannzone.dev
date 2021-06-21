<template>
  <div class="search-page">
    <ArticleSection :articles="articles" title="Search" content-path="blog" />
  </div>
</template>

<script>
// const SEARCH_TYPES = {
//   tag: (val) => ({ tags: { $containsAny: val } }),
//   // text: (val) => ({ $or: [{ title: val }, { description: val }] }),
//   text: (val) => ({ title: { $contains: val } }),
// }

export default {
  name: 'SearchPage',
  async asyncData({ $content, params, query, redirect }) {
    // Si no hay query params, redirect a la home
    if (Object.keys(query).length === 0) {
      redirect('/')
    }

    const queryType = Object.keys(query)[0]
    const queryValue = Object.values(query)[0]

    // const whereObj = SEARCH_TYPES[queryType](queryValue)
    //
    // console.log(whereObj)

    console.log('search: ', queryType === 'search_text' ? queryValue : '')
    console.log(
      'where: ',
      queryType === 'tag' ? { tags: { $containsAny: queryValue } } : ''
    )

    const articles = await $content('blog')
      .search(queryValue)
      // .where(queryType === 'tag' ? { tags: { $containsAny: queryValue } } : '')
      .fetch()

    const allPosts = await $content('blog').fetch()
    const totalArticles = allPosts.length

    console.log('<<<articles>>>')
    console.log(articles)

    // const articles = await $content('blog')
    //   .only(['title', 'description', 'slug', 'created', 'body'])
    //   .sortBy('created', 'desc')
    //   .fetch()

    return {
      articles,
      totalArticles,
    }
  },
}
</script>
