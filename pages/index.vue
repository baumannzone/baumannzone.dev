<template>
  <div class="home-page">
    <ProfileSection />
    <BlogSection :latest-posts="latestPosts" />
    <FormSuscribeSection />
    <CssArtSection />
  </div>
</template>

<script>
import ProfileSection from '@/components/HomePage/ProfileSection'
import BlogSection from '@/components/HomePage/BlogSection'
import FormSuscribeSection from '@/components/HomePage/FormSuscribeSection'
import CssArtSection from '@/components/HomePage/CssArtSection'

export default {
  components: {
    ProfileSection,
    BlogSection,
    FormSuscribeSection,
    CssArtSection,
  },
  async asyncData({ $content }) {
    const latestPosts = await $content('posts')
      .without(['toc', 'body'])
      .limit(4)
      .sortBy('updatedAt', 'desc')
      .fetch()

    return {
      latestPosts,
    }
  },
}
</script>
