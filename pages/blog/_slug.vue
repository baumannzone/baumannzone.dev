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
            >{{ post.category }}</span
          >
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
          <!-- <small class="font-semibold text-gray-600">{{ post.created }}</small>-->
          <post-tag
            v-for="tag in post.tags"
            :key="tag"
            class="inline-flex items-center mx-1"
            variant="purple"
          >
            {{ tag }}
          </post-tag>
          <!--
            <template v-if="post.showUpdatedAt">
              <small>Actualizado el {{ formatDate(post.updatedAt) }} </small>
              <small class="mx-1">·</small>
            </template>
            <small> {{ Math.trunc(article.readingTime) }} minutos lectura</small>
            <small class="mx-1">·</small>
          -->
        </div>
      </div>

      <!--
      <pre>{{ post.img }}</pre>
      <p>{{ post.description }}</p>
      <p>Actualizado: {{ formatDate(post.updatedAt) }}</p>
      -->

      <!-- // Show table of contents -->
      <!--
      <nav v-if="post.showToc">
        <ul>
          <li
            v-for="link of post.toc"
            :key="link.id"
            :class="{
              toc2: link.depth === 2,
              'ml-4 list-none': link.depth === 3,
            }"
          >
            <NuxtLink :to="`#${link.id}`">
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      -->

      <div class="prose prose-purple prose-lg mx-auto">
        <nuxt-content :document="post" />
      </div>

      <div class="article-width mx-auto">
        <p class="text-sm font-medium text-gray-500 text-right">
          {{ post.updatedAt }}
        </p>
        <prev-next :prev="prev" :next="next" type="blog" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()
    const [prev, next] = await $content('posts')
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
