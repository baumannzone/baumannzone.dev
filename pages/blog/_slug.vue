<template>
  <article class="pt-8 dark:bg-gray-800">
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
              dark:text-gray-200
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
            class="
              inline-flex
              items-center
              mx-1
              dark:bg-gray-700 dark:text-gray-300
            "
            variant="purple"
          >
            {{ tag }}
          </post-tag>

          <div class="mt-5 text-sm text-gray-500 dark:text-gray-300">
            <span>
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
              <time :datetime="post.created">{{ formatDateCreated }}</time> ·
            </span>
            <ArticleReadingTime :content="post.body" />
          </div>
        </div>
      </div>

      <div class="prose prose-purple prose-lg mx-auto dark:text-gray-300">
        <nuxt-content class="font-color-md" :document="post" />
      </div>

      <div class="article-width mx-auto">
        <div class="flex justify-between mb-10 mt-16">
          <p
            class="
              text-sm
              font-medium
              text-gray-500
              dark:text-gray-300
              text-left
              mr-2
            "
          >
            Editado el {{ formatDateUpdatedAt }}
          </p>
          <p class="text-sm font-medium text-right">
            <a
              :href="editPostOnGithub"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-purple-700 dark:text-purple-500 text-right"
            >
              Editar en GitHub
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
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </a>
          </p>
        </div>
        <prev-next :prev="prev" :next="next" />
      </div>

      <script
        type="application/javascript"
        src="https://utteranc.es/client.js"
        repo="baumannzone/baumannzonedev-comments"
        issue-term="pathname"
        label="comment"
        theme="preferred-color-scheme"
        crossorigin="anonymous"
        async
      ></script>
    </div>
  </article>
</template>

<script>
import { formatDate, editPostOnGithub } from 'assets/functions'

export default {
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()
    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .where({ isDraft: { $ne: true } })
      .sortBy('created', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      post,
      prev,
      next,
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          content: this.post.description,
          name: 'description',
        },
        {
          hid: 'og:title',
          content: this.title,
          property: 'og:title',
        },
        {
          hid: 'og:description',
          content: this.post.description,
          property: 'og:description',
        },
        {
          hid: 'og:url',
          content: this.url,
          property: 'og:url',
        },
        {
          hid: 'twitter:title',
          content: this.title,
          name: 'twitter:title',
        },
        {
          hid: 'twitter:description',
          content: this.description,
          name: 'twitter:description',
        },
        {
          hid: 'og:type',
          content: 'article',
          property: 'og:type',
        },
      ],
    }
  },
  computed: {
    formatDateUpdatedAt() {
      return formatDate(this.post.updatedAt)
    },
    formatDateCreated() {
      return formatDate(this.post.created)
    },
    editPostOnGithub() {
      return editPostOnGithub({ postSlug: this.post.slug })
    },
    title() {
      if (this.post) return `Baumannzone - ${this.post.title}`
      return 'Baumannzone.dev'
    },
    description() {
      if (this.post) return this.post.description
      return 'El blog de Baumannzone'
    },
    url() {
      if (this.post) return `/blog/${this.post.slug}`
      return this.$route.fullPath
    },
  },
}
</script>

<style>
.nuxt-content .nuxt-content-highlight {
  @apply relative;
}

.nuxt-content .nuxt-content-highlight .filename {
  @apply absolute right-0 mr-1 mt-1 font-light text-sm bg-gray-200 px-2 pt-0 rounded text-purple-500 dark:bg-gray-700 dark:text-purple-400 font-mono;
}

.article-width {
  font-size: 1.125rem;
  max-width: 65ch;
}

.font-color-md h1,
.font-color-md h2,
.font-color-md h3,
.font-color-md h4,
.font-color-md h5,
.font-color-md h6,
.font-color-md strong {
  @apply text-gray-900 dark:text-gray-200;
}
.font-color-md a {
  @apply dark:text-purple-400;
}
.font-color-md blockquote {
  @apply text-gray-900 dark:text-gray-200;
}
.font-color-md code {
  @apply text-gray-900 dark:text-gray-200;
}
.font-color-md pre {
  text-shadow: none;
  @apply dark:bg-gray-900 dark:text-gray-200;
}
span.token.operator {
  @apply bg-transparent;
}

.prose hr {
  @apply dark:border-gray-700;
}
</style>
