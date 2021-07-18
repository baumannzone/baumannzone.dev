<template>
  <article class="mt-8">
    <div class="container mx-auto max-w- px-2 md:px-8">
      <div class="text-lg mx-auto mb-12">
        <h1>
          <span
            class="
              block
              text-base text-center text-purple-600
              font-semibold
              tracking-wide
              uppercase
            "
          >
            {{ post.category }}
          </span>
          <span
            class="
              mt-2
              block
              text-3xl text-center
              leading-8
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
          >
            {{ post.title }}
          </span>
        </h1>
        <div class="text-center mt-2 mb-4">
          <post-tag
            v-for="tag in post.tags"
            :key="tag"
            class="inline-flex items-center mx-1"
            variant="purple"
          >
            {{ tag }}
          </post-tag>
        </div>
      </div>

      <div class="prose prose-purple prose-lg mx-auto">
        <nuxt-content :document="post" />
      </div>

      <div class="article-width mx-auto">
        <p class="text-sm font-medium text-gray-500 text-right">
          {{ post.updatedAt }}
        </p>
        <prev-next :prev="prev" :next="next" content-path="blog" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()
    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('created', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      post,
      prev,
      next,
    }
  },
}
</script>

<style>
.nuxt-content .nuxt-content-highlight {
  @apply relative;
}

.nuxt-content .nuxt-content-highlight .filename {
  @apply absolute right-0 mr-3 -mt-3 font-light text-sm bg-purple-100 px-2 pt-0 rounded text-purple-600;
}

.article-width {
  font-size: 1.125rem;
  max-width: 65ch;
}
</style>
