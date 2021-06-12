<template>
  <div
    class="
      border-t border-grey-200
      px-4
      flex
      items-center
      justify-between
      mt-14
    "
  >
    <div class="-mt-px w-0 flex-1 flex">
      <NuxtLink
        v-show="!isFirstPage"
        :to="prevUrl"
        class="
          border-t-2 border-transparent
          pt-4
          pr-1
          inline-flex
          items-center
          text-sm
          font-medium
          text-gray-500
          hover:text-purple-700 hover:border-purple-300
        "
      >
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
        Anterior
      </NuxtLink>
    </div>

    <div class="hidden lg:flex">
      <a
        href="#"
        class="
          border-transparent
          text-gray-500
          border-t-2
          pt-4
          px-4
          inline-flex
          items-center
          text-sm
          font-medium
        "
        >1</a
      >
      <a
        href="#"
        class="
          border-purple-500
          text-purple-600
          border-t-2
          pt-4
          px-4
          inline-flex
          items-center
          text-sm
          font-medium
        "
        >2</a
      >
      <span
        class="
          border-transparent
          text-gray-500
          border-t-2
          pt-4
          px-4
          inline-flex
          items-center
          text-sm
          font-medium
        "
      >
        ...
      </span>
      <a
        href="#"
        class="
          border-transparent
          text-gray-500
          border-t-2
          pt-4
          px-4
          inline-flex
          items-center
          text-sm
          font-medium
        "
        >5</a
      >
      <a
        href="#"
        class="
          border-transparent
          text-gray-500
          border-t-2
          pt-4
          px-4
          inline-flex
          items-center
          text-sm
          font-medium
        "
        >6</a
      >
    </div>

    <div class="-mt-px w-0 flex-1 flex justify-end">
      <NuxtLink
        v-show="!isLastPage"
        :to="nextUrl"
        class="
          border-t-2 border-transparent
          pt-4
          pl-1
          inline-flex
          items-center
          text-sm
          font-medium
          text-gray-500
          hover:text-purple-700 hover:border-purple-300
        "
      >
        Siguiente
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
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    lastPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    prevUrl() {
      return `/blog/page/${this.currentPage - 1}`
    },
    nextUrl() {
      return `/blog/page/${this.currentPage + 1}`
    },
    isFirstPage() {
      return this.currentPage === 1
    },
    isLastPage() {
      return this.currentPage === this.lastPage
    },
  },
}
</script>
