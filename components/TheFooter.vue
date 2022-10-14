<template>
  <footer class="bg-purple-700" aria-labelledby="footerHeading">
    <h2 id="footerHeading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <!-- Enlaces -->
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div
              v-for="(item, index) in footerItems"
              :key="item.title"
              :class="{ 'mt-12 md:mt-0': index === 1 }"
            >
              <h3
                class="
                  text-sm
                  font-semibold
                  text-white
                  tracking-wider
                  uppercase
                "
              >
                {{ item.title }}
              </h3>
              <ul class="mt-4 space-y-4">
                <li v-for="{ to, name } in item.items" :key="to">
                  <a
                    :href="to"
                    class="text-base hover:text-purple-300 text-white"
                  >
                    {{ name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Formulario-->
        <div class="mt-8 xl:mt-0">
          <h3 class="text-sm font-semibold text-white tracking-wider uppercase">
            Suscríbete a la newsletter
          </h3>
          <p class="mt-4 text-base text-purple-300">
            Las últimas noticias, artículos y recursos, directo a tu email.
          </p>
          <form
            id="revue-form-footer"
            class="mt-4 sm:flex sm:max-w-md"
            action="https://www.getrevue.co/profile/baumannzone/add_subscriber"
            method="post"
            name="revue-form"
            target="_blank"
          >
            <label for="member_email_footer" class="sr-only"
              >Introduce tu email en este campo para unirte a la
              newsletter.</label
            >
            <input
              id="member_email_footer"
              name="member[email]"
              type="email"
              autocomplete="email"
              required
              class="
                appearance-none
                min-w-0
                w-full
                bg-white
                border border-transparent
                rounded-md
                py-2
                px-4
                text-base text-gray-900
                dark:text-gray-100
                placeholder-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-purple-800
                focus:ring-purple-300
                focus:border-purple-300
                focus:placeholder-purple-700
                dark:focus:placeholder-gray-300 dark:bg-gray-800
                border-white
                dark:border-gray-500 dark:focus:ring-gray-400
              "
              placeholder="Enter your email"
            />
            <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                class="
                  w-full
                  bg-purple-500
                  border border-transparent
                  rounded-md
                  py-2
                  px-4
                  flex
                  items-center
                  justify-center
                  text-base
                  font-medium
                  text-white
                  hover:bg-purple-600
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-800
                  focus:ring-purple-500
                "
              >
                Suscríbete
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        class="
          mt-8
          border-t border-purple-800
          pt-8
          md:flex md:items-center md:justify-between
        "
      >
        <div
          class="
            flex flex-wrap
            sm:space-x-6 sm:order-2
            justify-between
            sm:justify-end
          "
        >
          <a
            v-for="{ name, url } in socialIcons"
            :key="name"
            class="text-purple-400 hover:text-purple-300 mb-2"
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">{{ name }}</span>
            <SvgIcon :id="`${name}-footer`" :icon-name="name" />
          </a>
        </div>
        <p class="mt-8 text-base text-purple-100 md:mt-0 md:order-1">
          &copy; 2021 Baumannzone - Desarrollo Full Stack JavaScript.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { socialIcons, navItems } from '@/constants'
import SvgIcon from '@/components/SvgIcon'

const sectionItems = navItems.map((i) => ({
  name: i.text,
  to: i.to,
}))

const footerItems = [
  {
    title: 'Secciones',
    items: sectionItems,
  },
  {
    title: 'Apóyame',
    items: [
      {
        name: 'Buy me a coffee',
        to: 'https://www.buymeacoffee.com/baumannzone',
      },
      {
        name: 'GitHub Sponsors',
        to: 'https://github.com/sponsors/baumannzone',
      },
      {
        name: 'Twitch Prime',
        to: 'https://www.twitch.com/baumannzone/',
      },
      {
        name: 'Patrocinio',
        to: '/patrocinio',
      },
    ],
  },
]

export default {
  components: {
    SvgIcon,
  },
  data() {
    return {
      footerItems,
      socialIcons,
    }
  },
}
</script>
