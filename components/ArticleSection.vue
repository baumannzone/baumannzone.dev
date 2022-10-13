<template>
  <section
    class="
      bg-white
      dark:bg-gray-800
      pt-16
      pb-20
      px-4
      sm:px-6
      lg:pt-24 lg:pb-28 lg:px-8
    "
  >
    <div
      class="
        relative
        max-w-lg
        mx-auto
        divide-y-2 divide-gray-200
        dark:divide-gray-500
        lg:max-w-7xl
      "
    >
      <div>
        <h2
          class="
            text-3xl
            tracking-tight
            font-extrabold
            text-gray-900
            dark:text-gray-200
            sm:text-4xl
          "
        >
          {{ title }}
        </h2>
      </div>
      <ArticleCardList
        v-if="articles.length > 0"
        :posts="articles"
        :show-reading-time="showReadingTime"
      />
      <ArticleCardListNoResults v-else :search-text="getSearchText" />
    </div>
  </section>
</template>

<script>
import ArticleCardList from '@/components/ArticleCard/ArticleCardList'
import ArticleCardListNoResults from '@/components/ArticleCard/ArticleCardListNoResults'

export default {
  name: 'LastArticles',
  components: {
    ArticleCardList,
    ArticleCardListNoResults,
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
    showReadingTime: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    getSearchText() {
      return this.$route.query.q || ''
    },
  },
}
</script>
