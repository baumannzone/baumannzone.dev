<template>
  <nav class="border-t border-gray-200 flex justify-around sm:px-0 mb-20 mt-8">
    <div class="-mt-px w-1/2 flex">
      <NuxtLink
        v-if="prev"
        :to="{ name: routeName, params: { slug: prev.slug } }"
        class="
          pt-4
          pr-1
          text-sm
          font-medium
          text-gray-500
          hover:text-purple-700
          border-t-2 border-transparent
          hover:border-purple-300
          w-full
        "
      >
        <div class="flex items-center">
          <svg
            class="mr-3 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="font-semibold">Anterior</span>
        </div>
        <p class="font-normal">{{ prev.title }}</p>
      </NuxtLink>
    </div>
    <div class="-mt-px w-1/2 flex justify-end">
      <NuxtLink
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        class="
          pt-4
          pl-1
          text-sm
          font-medium
          text-gray-500
          hover:text-purple-700
          border-t-2 border-transparent
          hover:border-purple-300
          w-full
        "
      >
        <div class="flex items-center justify-end">
          <span class="font-semibold">Siguiente</span>
          <svg
            class="ml-3 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <p class="text-right font-normal">{{ next.title }}</p>
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PrevNext',
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>
