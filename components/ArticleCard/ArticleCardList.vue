<template>
  <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
    <ArticleCard
      v-for="post in posts"
      :key="post.slug"
      :post="post"
      :show-reading-time="showReadingTime"
    />
  </div>
</template>

<script>
export default {
  name: 'ArticleCardList',
  props: {
    posts: {
      type: Array,
      required: true,
      default: () => [],
    },
    showReadingTime: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
