<template>
  <div>
    <section class="relative bg-gray-50 overflow-hidden">
      <div
        class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div class="relative h-full max-w-7xl mx-auto">
          <svg
            class="
              absolute
              right-full
              transform
              translate-y-1/4 translate-x-1/4
              lg:translate-x-1/2
            "
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            class="
              absolute
              left-full
              transform
              -translate-y-3/4 -translate-x-1/4
              md:-translate-y-1/2
              lg:-translate-x-1/2
            "
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>

      <div class="relative pt-6 pb-16 sm:pb-24">
        <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div class="text-center">
            <h1
              class="
                text-4xl
                tracking-tight
                font-extrabold
                text-gray-900
                sm:text-5xl
                md:text-6xl
              "
            >
              <span class="block mb-2">Rambito Conf</span>
              <span
                class="
                  text-transparent
                  bg-clip-text bg-gradient-to-r
                  from-cyan-400
                  to-fuchsia-600
                "
              >
                Hacktoberfest Edition
              </span>
            </h1>
            <p
              class="
                my-5
                max-w-md
                mx-auto
                text-xl text-gray-500
                sm:text-lg
                md:mt-5 md:text-xl md:max-w-3xl
              "
            >
              Lunes 11 de Octubre. De 18:00 a 20:00 en Twitch.
            </p>
            <div class="mt-16 mx-auto sm:flex sm:justify-center md:mt-8">
              <a
                href="twitch.tv/baumannzone"
                class="
                  px-8
                  py-3
                  border border-transparent
                  text-base
                  font-medium
                  rounded-md
                  text-purple-700
                  bg-purple-100
                  hover:bg-purple-200
                "
              >
                twitch.tv/baumannzone
              </a>
            </div>
          </div>
        </main>
      </div>
    </section>

    <section class="bg-white">
      <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12">
          <div
            class="
              space-y-5
              sm:space-y-4
              md:max-w-xl
              lg:max-w-3xl
              xl:max-w-none
            "
          >
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
              El equipo
            </h2>
            <p class="text-xl text-gray-500">
              Conoce al equipo que te acompañará durante todo el evento.
            </p>
          </div>

          <ul
            role="list"
            class="
              space-y-12
              sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0
              lg:grid-cols-3 lg:gap-x-8
            "
          >
            <li v-for="user in team" :key="user.name">
              <div class="space-y-4">
                <div class="aspect-w-3 aspect-h-2">
                  <img
                    class="object-cover shadow-lg rounded-lg"
                    :src="user.image"
                    :alt="`Imagen de ${user.name}`"
                  />
                </div>

                <div class="space-y-2">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3>{{ user.name }}</h3>
                    <p class="text-purple-600">{{ user.role }}</p>
                  </div>
                  <ul role="list" class="flex space-x-5">
                    <li>
                      <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Twitter</span>
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">LinkedIn</span>
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-r from-purple-600 to-purple-900">
      <div
        class="
          max-w-4xl
          mx-auto
          px-4
          py-16
          sm:px-6 sm:pt-20 sm:pb-24
          lg:max-w-7xl lg:pt-24 lg:px-8
        "
      >
        <h2 class="text-3xl font-extrabold text-white tracking-tight">
          La Rambito Conf
        </h2>
        <p class="mt-4 max-w-3xl text-lg text-purple-200">
          La Rambito Conf es una conferencia online sobre tecnología,
          programación, open source y Hacktoberfest. Se trata de una conferencia
          totalmente gratuita que podrás ver en vivo y en directo desde
          <a href="twitch.tv/baumannzone" class="underline">twitch</a>. Apta
          para todos los niveles, tanto si te consideras junior, como si tienes
          años de experiencia... ¡te esperamos!
        </p>
        <p class="mt-4 max-w-3xl text-lg text-purple-200">
          Esta conferencia no sería lo mismo sin el apoyo de la comunidad en el
          chat. Por lo tanto, te invitamos a que te crees una cuenta en Twitch y
          que participes en el chat.
        </p>
        <div
          class="
            mt-12
            grid grid-cols-1
            gap-x-6 gap-y-12
            sm:grid-cols-2
            lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16
          "
        >
          <div>
            <div>
              <span
                class="
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-md
                  bg-white bg-opacity-10
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">100% Gratuita</h3>
              <p class="mt-2 text-base text-purple-200">
                La Rambito Conf es una conferencia tech online totalmente
                gratuita. No hay costo alguno.
              </p>
            </div>
          </div>

          <div>
            <div>
              <span
                class="
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-md
                  bg-white bg-opacity-10
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">
                Para todos los públicos
              </h3>
              <p class="mt-2 text-base text-purple-200">
                La conferencia es apta para todo el mundo. Seas junior o senior,
                en la Rambito Conf hay un lugar para ti.
              </p>
            </div>
          </div>

          <div>
            <div>
              <span
                class="
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-md
                  bg-white bg-opacity-10
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">Covid Free</h3>
              <p class="mt-2 text-base text-purple-200">
                En nuestra conferencia estarás a salvo. Solo te contagiarás del
                buen rollo.
              </p>
            </div>
          </div>

          <div>
            <div>
              <span
                class="
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-md
                  bg-white bg-opacity-10
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">Snack Time</h3>
              <p class="mt-2 text-base text-purple-200">
                Está permitido comer y beber durante toda la Rambito Conf. No
                hay restricciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RambitoConfPage',
  data() {
    return {
      team: [
        {
          name: 'Rambito JS',
          role: 'CEO',
          image: '/rambito-conf/rambito.jpg',
          social: [],
        },
        {
          name: 'Jorge Baumann',
          role: 'Full Stack JavaScript Developer',
          image: '/rambito-conf/baumann.jpg',
          social: [],
        },
        {
          name: 'Ari',
          role: 'Reinventada',
          image: '/rambito-conf/ari.jpg',
          social: [],
        },
      ],
    }
  },
}
</script>
