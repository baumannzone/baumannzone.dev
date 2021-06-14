<template>
  <section class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div
      class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"
    >
      <div>
        <h2
          class="
            text-3xl
            tracking-tight
            font-extrabold
            text-gray-900
            sm:text-4xl
          "
        >
          {{ title }}
        </h2>
      </div>
      <ArticleCardList :posts="articles" :content-path="contentPath" />
    </div>
  </section>
</template>

<script>
import ArticleCardList from '@/components/ArticleCard/ArticleCardList'

export default {
  name: 'LastArticles',
  components: {
    ArticleCardList,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    articles: {
      type: Array,
      required: true,
    },
    contentPath: {
      type: String,
      required: true,
      validator: (val) => ['blog', 'css-art'].includes(val),
    },
  },
}
</script>
