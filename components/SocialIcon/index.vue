<template>
  <img :src="icoPath" :alt="icoName" :width="w" :height="h" />
</template>

<script>
const basePath = './svg/'
const extension = '.svg'
const icons = {
  codepen: 'codepen',
  devTo: 'dev-dot-to',
  fb: 'facebook',
  gh: 'github',
  ig: 'instagram',
  twitch: 'twitch',
  twitter: 'twitter',
  yt: 'youtube',
}
export default {
  name: 'SocialIco',
  props: {
    icoName: {
      type: String,
      required: true,
      validator: (val) => {
        return Object.keys(icons).includes(val)
      },
    },
    w: {
      type: [String || Number],
      default: 16,
    },
    h: {
      type: [String || Number],
      default: 16,
    },
    // TODO currentColor svg
  },
  computed: {
    icoPath() {
      const url = require(`${basePath}${icons[this.icoName]}${extension}`)
      return this.icoName ? url : null
    },
  },
}
</script>
