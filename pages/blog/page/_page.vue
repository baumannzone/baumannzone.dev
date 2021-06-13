<template>
  <div class="blog-page">
    <section
      class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div
        class="
          relative
          max-w-lg
          mx-auto
          divide-y-2 divide-gray-200
          lg:max-w-7xl
        "
      >
        <BlogHeader />

        <ArticleCardList :posts="paginatedPosts" />
      </div>
      <div class="relative max-w-lg mx-auto lg:max-w-7xl">
        <ThePagination :current-page="currentPage" :last-page="lastPage" />
      </div>
    </section>
  </div>
</template>

<script>
import { addDisplayDate } from 'assets/functions'

import BlogHeader from '@/components/BlogPage/BlogHeader'
import ArticleCardList from '@/components/ArticleCard/ArticleCardList'
import ThePagination from '@/components/ThePagination'

export default {
  components: { ArticleCardList, BlogHeader, ThePagination },
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
