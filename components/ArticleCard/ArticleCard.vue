<template>
  <div>
    <p class="text-sm text-gray-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 inline"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <time :datetime="post.created">{{ post.displayDate }}</time>
      <span class="mx-2">·</span>
      <ArticleReadingTime :content="post.body" />
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

export default {
  name: 'ArticleCard',
  components: { ArticleReadingTime },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
