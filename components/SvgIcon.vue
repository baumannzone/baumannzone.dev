<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <path :d="pathIcon" />
    </g>
  </svg>
</template>

<script>
import { socialIcons, socialNames } from '@/constants'

export default {
  props: {
    iconName: {
      type: String,
      required: true,
      validator: (val) => {
        return Object.keys(socialNames).includes(val)
      },
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
  computed: {
    pathIcon() {
      return socialIcons[this.iconName].path
    },
  },
}
</script>
