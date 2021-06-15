<template>
  <div class="css-art-page">
    <ArticleSection
      :articles="paginatedPosts"
      title="CSS Art"
      :content-path="contentPath"
    />

    <ThePagination
      :current-page="currentPage"
      :last-page="lastPage"
      :content-path="contentPath"
    />
  </div>
</template>

<script>
import { addDisplayDate, skipNumber } from 'assets/functions'

import ArticleSection from '@/components/ArticleSection'
import ThePagination from '@/components/ThePagination'

const contentPath = 'css-art'

export default {
  components: { ArticleSection, ThePagination },
  async asyncData({ $content, params }) {
    const currentPage = parseInt(params.page)
    const perPage = 2
    const allPosts = await $content(contentPath).fetch()
    const totalPosts = allPosts.length

    // use Math.ceil to round up to the nearest whole number
    const lastPage = Math.ceil(totalPosts / perPage)

    const paginatedPosts = await $content(contentPath)
      .only(['title', 'description', 'slug', 'created', 'body'])
      .sortBy('created', 'desc')
      .limit(perPage)
      .skip(skipNumber({ currentPage, perPage }))
      .fetch()

    return {
      currentPage,
      lastPage,
      allPosts,
      paginatedPosts: addDisplayDate(paginatedPosts),
    }
  },
  data() {
    return {
      contentPath,
    }
  },
}
</script>
