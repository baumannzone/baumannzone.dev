<template>
  <section class="d-block bg-gray-100 pb-16">
    <div class="bg-gradient-to-r from-purple-800 to-purple-700 h-44"></div>
    <div class="px-2 sm:px-4 lg:px-8">
      <div
        class="
          max-w-7xl
          bg-white
          mx-auto
          px-2
          sm:px-4
          lg:px-8
          -mt-16
          rounded-md
        "
      >
        <div class="flex justify-center">
          <nuxt-img
            src="/baumannzone-140.png"
            alt="Baumannzone picture"
            width="140"
            height="135"
            class="-mt-20 rounded-full ring-8 ring-purple-700 ring-opacity-100"
          />
        </div>
        <header class="text-center p-4">
          <h1 class="font-bold text-3xl">Jorge Baumann</h1>
          <p class="text-gray-500 font-light">
            Senior Full Stack Developer en DCSL GuideSmiths
          </p>
          <p class="font-light text-xl mt-4 mx-8 md:mx-16">
            Ingeniero de software y creador de contenido. Apasionado del open
            source y de las comunidades. Disfruta haciendo live-coding en
            twitch.
          </p>
        </header>
        <div class="flex justify-center px-4 pt-4 pb-8">
          <a
            v-for="{ name, url } in socialIconsParsed"
            :key="name"
            class="text-black hover:text-gray-500 mx-2"
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">{{ name }}</span>
            <SvgIcon :icon-name="name" width="25" height="25" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { socialIcons } from '@/constants'
import SvgIcon from '@/components/SvgIcon'

export default {
  name: 'ProfileSection',
  components: {
    SvgIcon,
  },
  computed: {
    socialIconsParsed() {
      const { linkedin, facebook, devTo, codepen, github, ...items } =
        socialIcons
      return items
    },
  },
}
</script>
