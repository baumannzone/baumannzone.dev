<template>
  <div class="blog-page">
    <ArticleSection :articles="paginatedPosts" title="Blog" />

    <ThePagination :current-page="currentPage" :last-page="lastPage" />
  </div>
</template>

<script>
import { addDisplayDate } from 'assets/functions'

import ArticleSection from '@/components/ArticleSection'
import ThePagination from '@/components/ThePagination'

export default {
  components: { ArticleSection, ThePagination },
  async asyncData({ $content, params, error }) {
    const currentPage = parseInt(params.page)
    const perPage = 4
    const allPosts = await $content('blog').fetch()
    const totalPosts = allPosts.length

    // use Math.ceil to round up to the nearest whole number
    const lastPage = Math.ceil(totalPosts / perPage)

    // use the % (modulus) operator to get a whole remainder
    const lastPageCount = totalPosts % perPage

    const skipNumber = () => {
      if (currentPage === 1) {
        return 0
      }
      if (currentPage === lastPage) {
        return totalPosts - lastPageCount
      }
      return (currentPage - 1) * perPage
    }

    const paginatedPosts = await $content('blog')
      .only(['title', 'description', 'slug', 'created', 'body'])
      .sortBy('created', 'desc')
      .limit(perPage)
      .skip(skipNumber())
      .fetch()

    return {
      currentPage,
      lastPage,
      allPosts,
      paginatedPosts: addDisplayDate(paginatedPosts),
    }
  },
}
</script>
