<template>
  <div class="py-40 flex flex-col bg-white">
    <main
      class="
        flex-grow flex flex-col
        justify-center
        max-w-7xl
        w-full
        mx-auto
        px-4
        sm:px-6
        lg:px-8
      "
    >
      <div class="py-16">
        <div class="text-center">
          <p
            class="
              text-sm
              font-semibold
              text-purple-600
              uppercase
              tracking-wide
            "
          >
            Error 404
          </p>
          <h1
            class="
              mt-2
              text-4xl
              font-extrabold
              text-gray-900
              tracking-tight
              sm:text-5xl
            "
          >
            Página no encontrada
          </h1>
          <p class="mt-2 text-base text-gray-500">
            Oops, la página que estás buscando no existe.
          </p>
          <div class="mt-6">
            <a
              href="#"
              class="
                text-base
                font-medium
                text-purple-600
                hover:text-purple-500
              "
              >Volver al inicio <span aria-hidden="true"> &rarr;</span></a
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
