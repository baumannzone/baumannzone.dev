<template>
  <span
    class="px-2 py-1 rounded text-xs font-medium"
    :class="`bg-${variant}-100 text-${variant}-800`"
  >
    <slot></slot>
  </span>
</template>

<script>
const variants = {
  gray: 'gray',
  red: 'red',
  yellow: 'yellow',
  green: 'green',
  blue: 'blue',
  indigo: 'indigo',
  purple: 'purple',
  pink: 'pink',
}

export default {
  name: 'PostTag',
  props: {
    variant: {
      type: String,
      default: variants.gray,
      validator: (val) => Object.keys(variants).includes(val),
    },
  },
}
</script>
