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

        <p class="font-xl">Total de posts: {{ allPosts.length }}</p>

        <BlogPostList :posts="paginatedPosts" />
      </div>
      <div class="relative max-w-lg mx-auto lg:max-w-7xl">
        <ThePagination />
      </div>
    </section>
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogPage/BlogHeader'
import BlogPostList from '@/components/BlogPage/BlogPostList'
import ThePagination from '@/components/ThePagination'

export default {
  components: { BlogPostList, BlogHeader, ThePagination },
  async asyncData({ $content, params, error }) {
    const currentPage = parseInt(params.page)
    const perPage = 2
    const allPosts = await $content('posts').fetch()
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

    const paginatedPosts = await $content('posts')
      .only(['title', 'description', 'slug', 'created'])
      .sortBy('created', 'desc')
      .limit(perPage)
      .skip(skipNumber())
      .fetch()

    // if (currentPage === 0 || !paginatedPosts.length) {
    //   return error({ statusCode: 404, message: 'No articles found!' })
    // }

    return {
      allPosts,
      paginatedPosts,
    }
  },
}
</script>
