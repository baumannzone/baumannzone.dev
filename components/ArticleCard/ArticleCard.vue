<template>
  <div>
    <p class="text-sm text-gray-500">
      <ArticleCreationDate
        :created="post.created"
        :display-date="post.displayDate"
      />
      <template v-if="showReadingTime">
        <span class="mx-2">·</span>
        <ArticleReadingTime :content="post.body" />
      </template>
    </p>

    <NuxtLink
      :to="{ name: 'blog-slug', params: { slug: post.slug } }"
      class="mt-2 block"
    >
      <p class="text-xl font-semibold text-gray-900">
        {{ post.title }}
      </p>
      <p class="mt-3 text-base text-gray-500">
        {{ post.description }}
      </p>
    </NuxtLink>

    <div class="mt-3">
      <NuxtLink
        :to="{ name: 'blog-slug', params: { slug: post.slug } }"
        class="text-base font-semibold text-purple-600 hover:text-purple-500"
      >
        Ver más →
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import ArticleReadingTime from './ArticleReadingTime'
import ArticleCreationDate from './ArticleCreationDate'

export default {
  name: 'ArticleCard',
  components: { ArticleReadingTime, ArticleCreationDate },
  props: {
    post: {
      type: Object,
      required: true,
    },
    showReadingTime: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
