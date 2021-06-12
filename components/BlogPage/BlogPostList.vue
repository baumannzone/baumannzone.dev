<template>
  <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
    <div v-for="post in posts" :key="post.slug">
      <p class="text-sm text-gray-500">
        <time datetime="2020-03-16">{{ post.created }}</time>
      </p>
      <a href="#" class="mt-2 block">
        <p class="text-xl font-semibold text-gray-900">
          {{ post.title }}
        </p>
        <p class="mt-3 text-base text-gray-500">
          {{ post.description }}
        </p>
      </a>
      <div class="mt-3">
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="text-base font-semibold text-purple-600 hover:text-purple-500"
        >
          Ver más →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPostList',
  props: {
    posts: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>
