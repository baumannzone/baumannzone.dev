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
              Lunes 11 de Octubre. De 18:00 a 20:30 en Twitch.
            </p>
            <div class="mt-16 mx-auto sm:flex sm:justify-center md:mt-8">
              <a
                href="https://twitch.tv/baumannzone"
                target="_blank"
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
                    :alt="`Imagen de ${user.displayName}`"
                  />
                </div>

                <div class="space-y-2">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3>{{ user.displayName }}</h3>
                    <p class="text-purple-600">{{ user.role }}</p>
                  </div>
                  <ul role="list" class="flex space-x-5">
                    <li
                      v-for="socialItem in user.social"
                      :key="socialItem.name"
                    >
                      <a
                        :href="socialItem.url"
                        class="text-gray-400 hover:text-gray-500"
                        target="_blank"
                        rel="noopener"
                      >
                        <span class="sr-only">{{ socialItem.name }}</span>
                        <SvgIcon
                          :icon-name="socialItem.name"
                          width="25"
                          height="25"
                        />
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

    <section class="bg-gray-50">
      <div
        class="
          max-w-2xl
          mx-auto
          px-4
          py-16
          sm:px-6 sm:pt-20 sm:pb-24
          lg:pt-24 lg:px-8
        "
      >
        <h2 class="text-3xl font-extrabold tracking-tight mb-10">Agenda</h2>
        <div class="flow-root">
          <ul role="list" class="-mb-8">
            <li v-for="item in agenda" :key="item.title">
              <div class="relative pb-8">
                <!-- Vertical line -->
                <span
                  v-if="!item.isLastItem"
                  class="absolute top-4 left-2 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div class="relative flex space-x-3">
                  <div>
                    <span
                      class="
                        mt-1.5
                        h-4
                        w-4
                        rounded-full
                        bg-purple-500
                        border-4 border-purple-200
                        flex
                        items-center
                        justify-center
                        ring-4 ring-gray-50
                      "
                    >
                    </span>
                  </div>
                  <div class="min-w-0 flex-1 flex justify-between space-x-4">
                    <div>
                      <p class="text-lg text-gray-500 ml-1">
                        {{ item.title }}
                      </p>
                    </div>
                    <div
                      class="
                        text-right
                        whitespace-nowrap
                        text-gray-500
                        mt-0.5
                        font-mono
                      "
                    >
                      <time datetime="2020-09-20">{{ item.time }} h</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-22 lg:px-8 my-10">
        <div class="lg:grid lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Patrocinadores
            </h2>
            <p class="mt-3 max-w-3xl text-lg text-gray-500">
              En esta conferencia hemos contado con la ayuda de varias marcas.
              Si quieres aportar tu granito de arena, no dudes en contactarnos.
              ¡Estaremos encantados de hablar contigo!
            </p>
            <div class="mt-8">
              <a
                href="mailto:jorge.baumann.aguilar@gmail.com?Subject=Quiero%20patrocinar"
                class="
                  block
                  sm:inline-block
                  text-center
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
                Conctactar
              </a>
            </div>
          </div>
          <div class="mt-8 lg:mt-0 grid grid-cols-1 gap-0.5">
            <a
              href="https://vercel.com?ref=baumannzone.dev"
              target="_blank"
              rel="noopener"
            >
              <div
                class="
                  col-span-1
                  flex
                  justify-center
                  items-center
                  py-8
                  px-8
                  bg-gray-50
                "
              >
                <svg
                  role="img"
                  aria-label="Vercel Inc."
                  height="40"
                  viewBox="0 0 283 64"
                  fill="var(--geist-foreground)"
                >
                  <path
                    d="M37 0l37 64H0L37 0zM159.6 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7h28.3c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM267.3 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7H267c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM219.3 28.3l6.8-3.9c-3.2-5-8.9-7.8-15.8-7.8-10.9 0-18.5 7.2-18.5 17.5s7.6 17.5 18.5 17.5c6.9 0 12.6-2.8 15.8-7.8l-6.8-3.9c-1.8 3-5 4.7-9 4.7-6.3 0-10.5-4.2-10.5-10.5s4.2-10.5 10.5-10.5c3.9 0 7.2 1.7 9 4.7zM282.3 5.6h-8v45h8v-45zM128.5 5.6h-9.2L101.7 36 84.1 5.6h-9.3L101.7 52l26.8-46.4zM185.1 25.8c.9 0 1.8.1 2.7.3v-8.5c-6.8.2-13.2 4-13.2 8.7v-8.7h-8v33h8V36.3c0-6.2 4.3-10.5 10.5-10.5z"
                  ></path>
                </svg>
              </div>
            </a>

            <a href="https://bit.ly/2WN0Nf4" target="_blank" rel="noopener">
              <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <svg
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Universidad Isabel Primera"
                  viewBox="0 0 457 64"
                >
                  <defs>
                    <style>
                      .cls-1 {
                        fill: #323e48;
                      }
                      .cls-2 {
                        fill: #e7004c;
                      }
                      .cls-3 {
                        fill: #2a333a;
                      }
                    </style>
                  </defs>
                  <path
                    class="cls-1"
                    d="M73.67,4.33h2.21V14.51c0,2.41,1.57,3.82,4,3.82s4-1.41,4-3.86V4.33h2.21V14.51c0,3.51-2.52,5.85-6.21,5.85S73.67,18,73.67,14.51Z"
                  />
                  <path
                    class="cls-1"
                    d="M90.53,8.79h2.1v1.5c0,.45,0,.83,0,.83h0a4.6,4.6,0,0,1,4.25-2.59c2.66,0,3.88,1.45,3.88,4.33v7.23H98.6V13.35c0-1.59-.34-2.84-2.15-2.84a3.7,3.7,0,0,0-3.57,2.77,5.51,5.51,0,0,0-.18,1.52v5.29H90.53Z"
                  />
                  <path
                    class="cls-1"
                    d="M104.87,4.33h2.19V6.54h-2.19Zm0,4.46h2.16v11.3H104.9Z"
                  />
                  <path
                    class="cls-1"
                    d="M109.81,8.79h2.3l2.75,7.64c.22.63.35,1.54.38,1.54h0s.18-.91.4-1.54l2.75-7.64h2.28l-4.18,11.3H114Z"
                  />
                  <path
                    class="cls-1"
                    d="M128.33,8.53c3.19,0,4.89,2.36,4.89,5.29,0,.29-.07.94-.07.94h-8.24a3.69,3.69,0,0,0,3.88,3.73,5.36,5.36,0,0,0,3.35-1.32l.9,1.58a6.74,6.74,0,0,1-4.38,1.61,5.76,5.76,0,0,1-6-5.92A5.54,5.54,0,0,1,128.33,8.53Zm2.68,4.6a2.67,2.67,0,0,0-2.73-2.88,3.23,3.23,0,0,0-3.3,2.88Z"
                  />
                  <path
                    class="cls-1"
                    d="M136.75,8.79h2.1v2a7.27,7.27,0,0,1,0,.85h0a3.85,3.85,0,0,1,3.57-2.95,4.33,4.33,0,0,1,.56,0v2.15a3,3,0,0,0-.63-.07,3.42,3.42,0,0,0-3.17,2.66,6.91,6.91,0,0,0-.27,2v4.62h-2.16Z"
                  />
                  <path
                    class="cls-1"
                    d="M146.15,17.17a4.84,4.84,0,0,0,3.24,1.32c.94,0,1.87-.5,1.87-1.41,0-2.08-5.8-1.65-5.8-5.34,0-2.05,1.83-3.21,4.08-3.21a5.08,5.08,0,0,1,3.64,1.25l-.87,1.63a4.11,4.11,0,0,0-2.79-1c-.94,0-1.85.4-1.85,1.39,0,2,5.8,1.58,5.8,5.29,0,1.88-1.6,3.28-4.08,3.28a6.09,6.09,0,0,1-4.29-1.65Z"
                  />
                  <path
                    class="cls-1"
                    d="M156.89,4.33h2.19V6.54h-2.19Zm0,4.46h2.17v11.3h-2.17Z"
                  />
                  <path
                    class="cls-1"
                    d="M167.75,8.53a3.76,3.76,0,0,1,3.48,1.78h.05a5.63,5.63,0,0,1-.05-.76V4.33h2.17V20.09h-2.06V19c0-.44,0-.76,0-.76h0a4,4,0,0,1-3.71,2.1c-3.06,0-5-2.41-5-5.92S164.75,8.53,167.75,8.53Zm.29,10c1.67,0,3.26-1.19,3.26-4.07,0-2-1.05-4-3.2-4-1.78,0-3.26,1.48-3.26,4S166.16,18.49,168,18.49Z"
                  />
                  <path
                    class="cls-1"
                    d="M183.58,13h.49v-.2a2.19,2.19,0,0,0-2.48-2.48,5.71,5.71,0,0,0-3.14,1.09l-.9-1.58a7.09,7.09,0,0,1,4.22-1.34c2.86,0,4.47,1.56,4.47,4.42v7.14h-2V19c0-.51,0-.89,0-.89h0a3.92,3.92,0,0,1-3.62,2.23c-1.94,0-3.84-1.18-3.84-3.44C176.77,13.19,181.68,13,183.58,13Zm-2.5,5.58c1.83,0,3-1.92,3-3.6v-.35h-.56c-1.63,0-4.58.11-4.58,2.14A1.89,1.89,0,0,0,181.08,18.62Z"
                  />
                  <path
                    class="cls-1"
                    d="M194.75,8.53a3.76,3.76,0,0,1,3.48,1.78h.05a5.63,5.63,0,0,1-.05-.76V4.33h2.17V20.09h-2.05V19c0-.44,0-.76,0-.76h-.05a3.94,3.94,0,0,1-3.7,2.1c-3.06,0-5-2.41-5-5.92S191.76,8.53,194.75,8.53Zm.29,10c1.67,0,3.26-1.19,3.26-4.07,0-2-1.05-4-3.19-4-1.79,0-3.26,1.48-3.26,4S193.16,18.49,195,18.49Z"
                  />
                  <path class="cls-1" d="M73.67,32.73h3.78V59.66H73.67Z" />
                  <path
                    class="cls-1"
                    d="M85.76,54.66a8.27,8.27,0,0,0,5.53,2.25c1.6,0,3.2-.84,3.2-2.4,0-3.55-9.91-2.83-9.91-9.12,0-3.51,3.13-5.49,7-5.49,4.23,0,6.21,2.14,6.21,2.14l-1.48,2.78a7.07,7.07,0,0,0-4.77-1.72c-1.6,0-3.17.69-3.17,2.37,0,3.47,9.92,2.71,9.92,9,0,3.2-2.75,5.6-7,5.6A10.37,10.37,0,0,1,84,57.29Z"
                  />
                  <path
                    class="cls-1"
                    d="M114.21,47.6h.84v-.34c0-3.16-1.79-4.23-4.23-4.23a9.77,9.77,0,0,0-5.38,1.87l-1.53-2.71a12.12,12.12,0,0,1,7.21-2.29c4.88,0,7.63,2.67,7.63,7.55V59.66h-3.43V57.82c0-.87.07-1.52.07-1.52h-.07a6.69,6.69,0,0,1-6.18,3.81c-3.32,0-6.56-2-6.56-5.87C102.58,47.87,111,47.6,114.21,47.6Zm-4.27,9.54c3.13,0,5.15-3.28,5.15-6.14v-.61h-1c-2.78,0-7.81.19-7.81,3.66C106.32,55.61,107.54,57.14,109.94,57.14Z"
                  />
                  <path
                    class="cls-1"
                    d="M125.8,32.73h3.7v8.81c0,1-.07,1.64-.07,1.64h.07a6.82,6.82,0,0,1,6.18-3.28c5.19,0,8.47,4.12,8.47,10.11,0,6.14-3.7,10.1-8.77,10.1a7,7,0,0,1-6.07-3.31h-.07a14,14,0,0,1,.07,1.44v1.42H125.8Zm9,24.22c3,0,5.57-2.52,5.57-6.91,0-4.19-2.25-6.9-5.45-6.9-2.9,0-5.57,2-5.57,6.94C129.39,53.52,131.18,57,134.84,57Z"
                  />
                  <path
                    class="cls-1"
                    d="M158.53,39.9c5.45,0,8.35,4,8.35,9,0,.49-.12,1.6-.12,1.6H152.69a6.31,6.31,0,0,0,6.64,6.37,9.23,9.23,0,0,0,5.72-2.25l1.52,2.71a11.49,11.49,0,0,1-7.47,2.74A9.82,9.82,0,0,1,148.88,50C148.88,43.87,153,39.9,158.53,39.9Zm4.57,7.86c-.11-3.32-2.17-4.92-4.65-4.92a5.52,5.52,0,0,0-5.64,4.92Z"
                  />
                  <path
                    class="cls-1"
                    d="M172.68,32.73h3.69v21c0,2.33.92,2.75,2.06,2.75a5.52,5.52,0,0,0,.65,0v3.28a9.87,9.87,0,0,1-1.22.08c-2.1,0-5.18-.57-5.18-5.42Z"
                  />
                  <path class="cls-1" d="M196.62,32.73h3.78V59.66h-3.78Z" />
                  <path
                    class="cls-2"
                    d="M29.16,4.34h8l-.39-.23c-.84-.5-1.7-1-2.53-1.47l-2-1.14a7.22,7.22,0,0,0-3.8-1A7.94,7.94,0,0,0,26,.85a8.31,8.31,0,0,0-1.64.8l-.43.25-1.49.86L20.07,4.1l-.39.23h9.48Z"
                  />
                  <path
                    class="cls-2"
                    d="M20.26,12.19l4.8-2.78.4-.23H15.22l0,.06-1,1.65c-1.28,2.2-2.6,4.48-3.88,6.74l-.22.39.39-.22C13.77,15.94,17.07,14,20.26,12.19Z"
                  />
                  <path
                    class="cls-2"
                    d="M31.81,9.18h-.46l.4.23,5.55,3.21c3,1.7,6,3.47,9,5.18l.39.23-.23-.4c-1.76-3.07-3.51-6.1-4.84-8.39l0-.06H31.81Z"
                  />
                  <path
                    class="cls-2"
                    d="M.08,25.73l.22-.39c1.74-3,3.48-6,5.16-8.91,1-1.78,2.09-3.62,3.14-5.42l.22-.39-.39.22c-.92.51-1.85,1.05-2.75,1.57l-1.76,1A7.56,7.56,0,0,0,.07,20v5.75Z"
                  />
                  <path
                    class="cls-2"
                    d="M51.83,17.27c1.53,2.65,3.11,5.39,4.67,8.07l.23.39v-.45c0-.87,0-1.76,0-2.62V20.51a10.38,10.38,0,0,0-.1-1.84A7.48,7.48,0,0,0,53,13.46l-1.83-1.05c-.9-.53-1.83-1.07-2.75-1.58L48,10.61l.22.39C49.42,13.09,50.65,15.21,51.83,17.27Z"
                  />
                  <path
                    class="cls-2"
                    d="M7.16,23.6v-.45l-.23.39C6.07,25,5.21,26.51,4.37,28c-.7,1.23-1.43,2.49-2.16,3.73v0l0,.06a.35.35,0,0,0,0,.42L4,35.39l3,5.09.23.39V33.22C7.17,30.07,7.17,26.81,7.16,23.6Z"
                  />
                  <path
                    class="cls-2"
                    d="M49.88,23.54l-.23-.39v.45c0,4.21,0,8.49,0,12.63v4.64l.23-.39C51.33,38,53.05,35,54.74,32l0-.06,0-.06c-.83-1.41-1.66-2.85-2.46-4.25S50.69,24.91,49.88,23.54Z"
                  />
                  <path
                    class="cls-2"
                    d="M.31,38.65l-.23-.39v.45c0,1.21,0,2.44,0,3.63v1.72A7.53,7.53,0,0,0,4,50.6l1.83,1,2.65,1.53.4.22-.69-1.18C5.58,47.77,2.93,43.17.31,38.65Z"
                  />
                  <path
                    class="cls-2"
                    d="M56.74,43.94V38.27l-.22.39c-1.86,3.18-3.73,6.43-5.54,9.57L48.21,53l-.23.4.4-.23,2.89-1.66,1.58-.91A7.51,7.51,0,0,0,56.74,43.94Z"
                  />
                  <path
                    class="cls-2"
                    d="M25,54.83h.46l-.39-.23c-5.11-3-9.88-5.72-14.56-8.41l-.4-.22.23.39,2.83,4.92,2,3.49,0,.06H25Z"
                  />
                  <path
                    class="cls-2"
                    d="M31.74,54.6l-.39.23H41.59l0-.06c.54-1,1.09-1.89,1.64-2.83,1-1.83,2.15-3.72,3.21-5.59l.23-.39-3.65,2.1C39.35,50.2,35.51,52.41,31.74,54.6Z"
                  />
                  <path
                    class="cls-2"
                    d="M20.12,59.65h-.45l.38.23c.92.55,1.86,1.09,2.77,1.61l1.8,1a7.26,7.26,0,0,0,3.77,1h0a8.18,8.18,0,0,0,2.14-.29,8.71,8.71,0,0,0,2.2-1l.64-.37,1.32-.76c.68-.39,1.39-.79,2.07-1.21l.37-.23h-17Z"
                  />
                  <path class="cls-3" d="M226.12,4.21h1.07V59.79h-1.07Z" />
                  <path
                    class="cls-1"
                    d="M257,22.77h-4.6l-1.21,3.51h-1.76l4.39-12.21h1.8L260,26.28h-1.79Zm-2.3-7s-.27,1.1-.48,1.73l-1.37,3.87h3.71l-1.35-3.87c-.21-.63-.47-1.73-.47-1.73Z"
                  />
                  <path
                    class="cls-1"
                    d="M261.78,14.07h1.71v5.36h6.33V14.07h1.71V26.28h-1.71V20.92h-6.33v5.36h-1.71Z"
                  />
                  <path
                    class="cls-1"
                    d="M280.31,13.86a6.16,6.16,0,0,1,6.26,6.23,6.27,6.27,0,1,1-12.54,0A6.17,6.17,0,0,1,280.31,13.86Zm0,11.06a4.61,4.61,0,0,0,4.49-4.83,4.51,4.51,0,1,0-9,0A4.63,4.63,0,0,0,280.31,24.92Z"
                  />
                  <path
                    class="cls-1"
                    d="M289.06,14.07h3.74a6.24,6.24,0,0,1,2.28.27,3.35,3.35,0,0,1,2.06,3.31,3.33,3.33,0,0,1-2.2,3.3v0a4,4,0,0,1,.37.55l2.59,4.74H296l-2.57-4.86h-2.62v4.86h-1.71Zm4.17,5.86a2,2,0,0,0,2.16-2.21,2,2,0,0,0-1-1.89,3.44,3.44,0,0,0-1.68-.27h-2v4.37Z"
                  />
                  <path
                    class="cls-1"
                    d="M306.21,22.77h-4.6l-1.22,3.51h-1.76L303,14.07h1.8l4.4,12.21h-1.78Zm-2.3-7s-.28,1.1-.49,1.73l-1.37,3.87h3.71l-1.35-3.87c-.21-.63-.47-1.73-.47-1.73Z"
                  />
                  <path
                    class="cls-1"
                    d="M316.07,14.07h1.8l2.8,6.61c.28.67.61,1.64.61,1.64h0s.33-1,.61-1.64l2.8-6.61h1.8l1,12.21h-1.7l-.6-7.7c-.06-.74,0-1.8,0-1.8h0s-.36,1.13-.65,1.8l-2.44,5.51h-1.52l-2.43-5.51c-.27-.65-.66-1.83-.66-1.83h0s0,1.09,0,1.83l-.59,7.7h-1.72Z"
                  />
                  <path
                    class="cls-1"
                    d="M336.5,22.77h-4.6l-1.21,3.51h-1.76l4.39-12.21h1.8l4.4,12.21h-1.79Zm-2.3-7s-.27,1.1-.48,1.73l-1.37,3.87h3.7l-1.35-3.87c-.2-.63-.46-1.73-.46-1.73Zm.52-4.73h1.8l-1.66,2.2h-1.4Z"
                  />
                  <path
                    class="cls-1"
                    d="M341.35,23.58a4.82,4.82,0,0,0,3.11,1.32,1.89,1.89,0,0,0,2.12-1.8c0-2.65-5.92-2.08-5.92-5.83,0-1.91,1.64-3.41,3.94-3.41a5,5,0,0,1,3.46,1.23l-.77,1.42a4.32,4.32,0,0,0-2.69-1.06,2,2,0,0,0-2.21,1.78c0,2.53,5.92,1.86,5.92,5.82,0,1.88-1.46,3.44-3.88,3.44a5.71,5.71,0,0,1-4.05-1.61Z"
                  />
                  <path
                    class="cls-1"
                    d="M360.66,13.86a6.17,6.17,0,0,1,6.28,6.25,6.31,6.31,0,0,1-1.44,4L367,25.52l-1,1.08-1.41-1.42a6.16,6.16,0,0,1-3.88,1.31,6.26,6.26,0,0,1-6.27-6.38A6.17,6.17,0,0,1,360.66,13.86Zm0,11.06a4.41,4.41,0,0,0,2.65-.9l-1.44-1.4,1-1.08L364.28,23a4.93,4.93,0,0,0,.9-2.85,4.51,4.51,0,1,0-9,0A4.59,4.59,0,0,0,360.66,24.92Z"
                  />
                  <path
                    class="cls-1"
                    d="M369.45,14.07h1.71V22a2.8,2.8,0,0,0,3.08,3,2.83,2.83,0,0,0,3.12-3V14.07h1.71V22c0,2.71-2,4.53-4.81,4.53s-4.81-1.82-4.81-4.53Z"
                  />
                  <path
                    class="cls-1"
                    d="M382.22,14.07h7.09v1.49h-5.38v3.82h4.38v1.49h-4.38V24.8h5.68v1.48h-7.39Z"
                  />
                  <path
                    class="cls-1"
                    d="M396.58,14.07h1.7L403.71,22c.45.66,1,1.77,1,1.77h0s-.12-1.09-.12-1.77V14.07h1.72V26.28h-1.68l-5.45-7.92c-.45-.68-1-1.78-1-1.78h0s.12,1.09.12,1.78v7.92h-1.71Z"
                  />
                  <path
                    class="cls-1"
                    d="M409.5,14.07h1.72V22a2.8,2.8,0,0,0,3.08,3,2.82,2.82,0,0,0,3.11-3V14.07h1.71V22c0,2.71-1.95,4.53-4.81,4.53S409.5,24.67,409.5,22Z"
                  />
                  <path
                    class="cls-1"
                    d="M422.27,14.07H424L429.4,22c.45.66,1,1.77,1,1.77h0s-.12-1.09-.12-1.77V14.07h1.71V26.28h-1.68l-5.45-7.92c-.45-.68-1-1.78-1-1.78h0s.12,1.09.12,1.78v7.92h-1.72Z"
                  />
                  <path
                    class="cls-1"
                    d="M440.75,13.86a6.3,6.3,0,0,1,4.45,1.61l-.85,1.28a5.58,5.58,0,0,0-3.53-1.33,4.43,4.43,0,0,0-4.51,4.67,4.58,4.58,0,0,0,4.53,4.83,5.51,5.51,0,0,0,3.77-1.6l.92,1.23a6.55,6.55,0,0,1-4.74,1.94,6.15,6.15,0,0,1-6.25-6.38A6.1,6.1,0,0,1,440.75,13.86Z"
                  />
                  <path
                    class="cls-1"
                    d="M453.92,22.77h-4.6l-1.21,3.51h-1.77l4.4-12.21h1.8l4.39,12.21h-1.78Zm-2.3-7s-.28,1.1-.49,1.73l-1.36,3.87h3.7l-1.35-3.87c-.21-.63-.47-1.73-.47-1.73Z"
                  />
                  <path
                    class="cls-1"
                    d="M254.7,37.47h-5.45V36.13h12.38v1.34h-5.44V51.29H254.7Z"
                  />
                  <path
                    class="cls-1"
                    d="M261.18,40.44h1.46V47c0,1.7.26,3.21,2.36,3.21,2.48,0,4-2.18,4-4.53v-5.2h1.47V51.29h-1.43V49.67c0-.47,0-.86,0-.86h0a4.63,4.63,0,0,1-4.25,2.74c-2.54,0-3.62-1.38-3.62-4.2Z"
                  />
                  <path
                    class="cls-1"
                    d="M279.67,40.44h1.46V47c0,1.7.26,3.21,2.35,3.21,2.49,0,4-2.18,4-4.53v-5.2H289V51.29h-1.42V49.67c0-.47,0-.86,0-.86h0a4.64,4.64,0,0,1-4.25,2.74c-2.54,0-3.62-1.38-3.62-4.2Z"
                  />
                  <path
                    class="cls-1"
                    d="M292.5,40.44H294v1.62c0,.47,0,.86,0,.86h0a4.62,4.62,0,0,1,4.33-2.74c2.68,0,3.63,1.53,3.63,4.21v6.9h-1.47V44.78c0-1.71-.26-3.22-2.35-3.22a4.14,4.14,0,0,0-3.95,3.07,5.32,5.32,0,0,0-.17,1.46v5.2H292.5Z"
                  />
                  <path
                    class="cls-1"
                    d="M305.25,36.13h1.54V38h-1.54Zm.05,4.31h1.46V51.29H305.3Z"
                  />
                  <path
                    class="cls-1"
                    d="M308.81,40.44h1.56l3,8c.19.54.36,1.3.36,1.3h.05a12.27,12.27,0,0,1,.38-1.3l3-8h1.53l-4.14,10.85H313Z"
                  />
                  <path
                    class="cls-1"
                    d="M325.36,40.18c3,0,4.53,2.31,4.53,5,0,.26,0,.75,0,.75h-8.33a4.08,4.08,0,0,0,4.21,4.3,5,5,0,0,0,3.3-1.32L329.7,50a6.24,6.24,0,0,1-4,1.51A5.48,5.48,0,0,1,320,45.88C320,42.32,322.43,40.18,325.36,40.18Zm3,4.56c-.09-2.27-1.47-3.33-3.08-3.33a3.69,3.69,0,0,0-3.74,3.33Z"
                  />
                  <path
                    class="cls-1"
                    d="M332.7,40.44h1.44v1.92c0,.48,0,.87,0,.87h0a3.71,3.71,0,0,1,3.43-2.9,2.71,2.71,0,0,1,.58.07v1.44a4,4,0,0,0-.54,0,3.49,3.49,0,0,0-3.15,2.81,7.32,7.32,0,0,0-.3,2.11v4.57H332.7Z"
                  />
                  <path
                    class="cls-1"
                    d="M340.29,48.92a4.65,4.65,0,0,0,3.23,1.32c1.17,0,2.18-.59,2.18-1.73,0-2.37-5.84-1.79-5.84-5.33,0-1.94,1.74-3,3.71-3a4.56,4.56,0,0,1,3.34,1.19l-.67,1.12a3.83,3.83,0,0,0-2.72-1c-1.1,0-2.15.47-2.15,1.68,0,2.4,5.84,1.75,5.84,5.33,0,1.77-1.53,3-3.71,3a5.53,5.53,0,0,1-4-1.57Z"
                  />
                  <path
                    class="cls-1"
                    d="M349.89,36.13h1.53V38h-1.53Zm0,4.31h1.47V51.29h-1.47Z"
                  />
                  <path
                    class="cls-1"
                    d="M359.1,40.18a3.84,3.84,0,0,1,3.54,2h0s0-.36,0-.82V36.13h1.47V51.29h-1.43V50.15a6.53,6.53,0,0,1,0-.78h0A3.92,3.92,0,0,1,359,51.55c-2.91,0-4.72-2.33-4.72-5.69S356.25,40.18,359.1,40.18Zm.07,10.06c1.81,0,3.51-1.3,3.51-4.38,0-2.2-1.12-4.36-3.45-4.36-1.92,0-3.49,1.62-3.49,4.36S357.14,50.24,359.17,50.24Z"
                  />
                  <path
                    class="cls-1"
                    d="M373.4,44.58H374V44.3c0-2.09-1.15-2.8-2.7-2.8a5.29,5.29,0,0,0-3.06,1l-.69-1.12a6.22,6.22,0,0,1,3.86-1.23c2.61,0,4.06,1.45,4.06,4.17v6.94h-1.41V50.11a7.51,7.51,0,0,1,.05-.91h-.05a3.91,3.91,0,0,1-3.62,2.35c-1.81,0-3.69-1.06-3.69-3.21C366.76,44.67,371.53,44.58,373.4,44.58Zm-2.71,5.72c2.07,0,3.32-2.16,3.32-4v-.48h-.63c-1.7,0-5.11.07-5.11,2.46A2.16,2.16,0,0,0,370.69,50.3Z"
                  />
                  <path
                    class="cls-1"
                    d="M383,40.18a3.82,3.82,0,0,1,3.53,2h.05a6.63,6.63,0,0,1-.05-.82V36.13H388V51.29h-1.42V50.15a6.53,6.53,0,0,1,0-.78h0a3.93,3.93,0,0,1-3.73,2.18c-2.92,0-4.73-2.33-4.73-5.69S380.18,40.18,383,40.18Zm.06,10.06c1.81,0,3.52-1.3,3.52-4.38,0-2.2-1.12-4.36-3.45-4.36-1.92,0-3.5,1.62-3.5,4.36S381.06,50.24,383.09,50.24Z"
                  />
                  <path
                    class="cls-2"
                    d="M402.31,40.18a5.69,5.69,0,1,1-5.74,5.63A5.62,5.62,0,0,1,402.31,40.18Zm0,10.06a4.29,4.29,0,0,0,4.23-4.43,4.23,4.23,0,1,0-8.45,0A4.28,4.28,0,0,0,402.31,50.24Z"
                  />
                  <path
                    class="cls-2"
                    d="M410.79,40.44h1.45v1.62a7.56,7.56,0,0,1-.05.86h.05a4.62,4.62,0,0,1,4.33-2.74c2.68,0,3.63,1.53,3.63,4.21v6.9h-1.47V44.78c0-1.71-.26-3.22-2.35-3.22a4.13,4.13,0,0,0-3.95,3.07,5.32,5.32,0,0,0-.17,1.46v5.2h-1.47Z"
                  />
                  <path
                    class="cls-2"
                    d="M423.48,36.13h1.46V48.4c0,1.43.65,1.64,1.21,1.64a3.55,3.55,0,0,0,.37,0v1.32a4,4,0,0,1-.54,0c-.91,0-2.5-.28-2.5-2.65Z"
                  />
                  <path
                    class="cls-2"
                    d="M428.87,36.13h1.53V38h-1.53Zm0,4.31h1.47V51.29h-1.47Z"
                  />
                  <path
                    class="cls-2"
                    d="M433.92,40.44h1.44v1.62c0,.47,0,.86,0,.86h0a4.63,4.63,0,0,1,4.34-2.74c2.68,0,3.62,1.53,3.62,4.21v6.9h-1.46V44.78c0-1.71-.26-3.22-2.35-3.22a4.12,4.12,0,0,0-3.95,3.07,5.32,5.32,0,0,0-.17,1.46v5.2h-1.47Z"
                  />
                  <path
                    class="cls-2"
                    d="M451.31,40.18c3,0,4.53,2.31,4.53,5,0,.26,0,.75,0,.75h-8.32a4.08,4.08,0,0,0,4.2,4.3,5,5,0,0,0,3.3-1.32l.67,1.12a6.2,6.2,0,0,1-4,1.51A5.48,5.48,0,0,1,446,45.88C446,42.32,448.37,40.18,451.31,40.18Zm3,4.56c-.09-2.27-1.47-3.33-3.09-3.33a3.69,3.69,0,0,0-3.73,3.33Z"
                  />
                </svg>
              </div>
            </a>

            <a
              href="https://codely.tv/pro/rambitoconf"
              target="_blank"
              rel="noopener"
            >
              <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img
                  class="max-h-12"
                  src="https://codely.tv/wp-content/uploads/2016/08/horizontal.png"
                  alt="Codely TV"
                  aria-label="Codely Tv"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'

export default {
  name: 'RambitoConfPage',
  components: {
    SvgIcon,
  },
  data() {
    return {
      agenda: [
        {
          title: 'Presentación y bienvenida 🎃',
          time: '18:00',
        },
        {
          title: 'Repasando GitHub',
          time: '18:20',
        },
        {
          title: 'Empezar en Open Source',
          time: '18:40',
        },
        {
          title: 'Tu web gratis con GitHub y GitHub Pages',
          time: '19:00',
        },
        {
          title: 'Hacktoberfest',
          time: '19:20',
        },
        {
          title: 'Buscamos una Pull Request',
          time: '19:40',
        },
        {
          title: 'Sorteos y despedida 🎁',
          time: '20:00',
          isLastItem: true,
        },
      ],
      team: [
        {
          displayName: 'Rambito JS',
          role: 'CEO',
          image: '/rambito-conf/rambito.jpg',
          social: [
            {
              name: 'youtube',
              url: 'https://www.youtube.com/rambitoJS',
            },
          ],
        },
        {
          displayName: 'Jorge Baumann',
          role: 'Full Stack JavaScript Developer',
          image: '/rambito-conf/baumann.jpg',
          social: [
            {
              name: 'twitter',
              url: 'https://twitter.com/baumannzone',
            },
            {
              name: 'instagram',
              url: 'https://www.instagram.com/baumannzone',
            },
            {
              name: 'twitch',
              url: 'https://www.twitch.tv/baumannzone',
            },
          ],
        },
        {
          displayName: 'Ariane De Bilbao (Ari Reinventada)',
          role: 'Frontend developer | Sngular',
          image: '/rambito-conf/ari.jpg',
          social: [
            {
              name: 'twitter',
              url: 'https://twitter.com/ari_reinventada',
            },
            {
              name: 'twitch',
              url: 'https://www.twitch.tv/ari_reinventada',
            },
            {
              name: 'youtube',
              url: 'https://www.youtube.com/c/AriReinventada',
            },
            {
              name: 'instagram',
              url: 'https://www.instagram.com/ari_reinventada',
            },
          ],
        },
      ],
    }
  },
}
</script>
