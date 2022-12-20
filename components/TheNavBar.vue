<template>
  <nav class="bg-white dark:bg-gray-800 shadow sticky top-0 z-10 sm:static">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex px-2 lg:px-0">
          <div class="flex-shrink-0 flex items-center">
            <a href="/">
              <nuxt-img
                class="block lg:hidden h-8 w-auto"
                src="/logo.png"
                alt="Baumannzone's logo"
              />
              <nuxt-img
                class="hidden lg:block h-8 w-auto lg:dark:hidden"
                src="/logo-with-name.png"
                alt="Baumannzone's logo"
              />
              <div
                class="hidden lg:dark:flex gap-2 items-center justify-center"
              >
                <nuxt-img
                  class="h-8 w-auto"
                  src="/logo.png"
                  alt="Baumannzone's logo dark"
                />
                <h1 class="text-2xl font-bold text-white">BAUMANNZONE</h1>
              </div>
            </a>
          </div>
          <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
            <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              :exact="item.exact"
              class="
                border-transparent
                text-gray-500
                hover:border-gray-300 hover:text-gray-700
                dark:hover:text-gray-300
                inline-flex
                items-center
                px-1
                pt-1
                border-t-2
                text-sm
                font-medium
              "
              >{{ item.text }}</NuxtLink
            >
          </div>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            px-2
            lg:ml-6 lg:justify-end
          "
        >
          <div class="max-w-lg w-full lg:max-w-xs">
            <label for="search" class="sr-only">Buscar</label>
            <div class="relative">
              <div
                class="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <!-- Heroicon name: solid/search -->
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                v-model="searchText"
                name="search"
                class="
                  block
                  w-full
                  pl-10
                  pr-3
                  py-2
                  border border-gray-300
                  dark:border-gray-600
                  rounded-md
                  leading-5
                  bg-white
                  dark:bg-gray-700 dark:text-gray-300
                  placeholder-gray-500
                  dark:placeholder-gray-400
                  focus:outline-none focus:placeholder-gray-400
                  dark:focus:placeholder-gray-300
                  focus:ring-1 focus:ring-purple-500 focus:border-purple-500
                  sm:text-sm
                "
                placeholder="Buscar en el blog"
                type="search"
                autocomplete="off"
                @keyup.enter="onEnter"
              />
            </div>
          </div>
        </div>
        <div class="flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-gray-500 hover:bg-gray-100
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-purple-500
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="onClickBtn"
          >
            <span class="sr-only">Abrir menu</span>

            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div id="mobile-menu" class="lg:hidden" :class="{ hidden: isCollapsed }">
      <div class="pt-2 pb-3 space-y-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :exact="item.exact"
          class="
            border-transparent
            text-gray-600
            hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800
            dark:hover:bg-gray-700 dark:hover:text-gray-300
            block
            pl-3
            pr-4
            py-2
            border-l-4
            text-base
            font-medium
          "
          >{{ item.text }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
import { navItems } from '@/constants'

export default {
  data() {
    return {
      searchText: '',
      navItems,
      isCollapsed: true,
    }
  },
  methods: {
    onClickBtn() {
      this.isCollapsed = !this.isCollapsed
    },
    onEnter() {
      if (this.searchText === '') return
      this.$router.push({ name: 'search', query: { q: this.searchText } })
    },
  },
}
</script>

<style scoped>
.nuxt-link-active {
  @apply bg-purple-50 border-purple-500 text-purple-700 dark:bg-gray-700 dark:border-purple-700 dark:text-gray-200;
}
</style>
