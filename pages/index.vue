<template>
  <div class="home-page">
    <ProfileSection />
    <ArticleSection
      :articles="latestBlog"
      title="Blog"
      :show-reading-time="false"
    />
    <FormSuscribeSection />
    <ArticleSection
      :articles="latestCssArt"
      title="CSS Art"
      :show-reading-time="false"
    />
  </div>
</template>

<script>
import { addDisplayDate } from 'assets/functions'

import ProfileSection from '@/components/HomePage/ProfileSection'
import ArticleSection from '@/components/ArticleSection'
import FormSuscribeSection from '@/components/HomePage/FormSuscribeSection'

export default {
  components: {
    ProfileSection,
    ArticleSection,
    FormSuscribeSection,
  },
  async asyncData({ $content }) {
    const articleToShow = 4
    const latestBlog = await $content('blog')
      .only(['title', 'description', 'slug', 'created', 'body'])
      .where({ type: { $containsAny: 'blog' }, isDraft: { $ne: true } })
      .limit(articleToShow)
      .sortBy('created', 'desc')
      .fetch()

    const latestCssArt = await $content('blog')
      .only(['title', 'description', 'slug', 'created', 'body'])
      .where({ type: { $containsAny: 'css-art' }, isDraft: { $ne: true } })
      .limit(articleToShow)
      .sortBy('created', 'desc')
      .fetch()

    return {
      latestBlog: addDisplayDate(latestBlog),
      latestCssArt: addDisplayDate(latestCssArt),
    }
  },
  head: {
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Contenido FullStack con JavaScript. Artículos y guías sobre desarrollo Web',
      },
    ],
  },
}
</script>
