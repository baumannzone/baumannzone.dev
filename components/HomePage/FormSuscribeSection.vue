<template>
  <section class="bg-purple-700 py-10 px-4 sm:px-6 lg:px-8">
    <div
      class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"
    >
      <div class="py-6 rounded-lg md:py-12 lg:py-16 xl:flex xl:items-center">
        <div class="xl:w-0 xl:flex-1 xl:pr-16">
          <h2
            class="
              text-2xl
              font-extrabold
              tracking-tight
              text-white
              sm:text-3xl
            "
          >
            Únete a la newsletter
          </h2>
          <p class="mt-3 max-w-3xl text-lg leading-6 text-purple-200">
            Suscríbete y entérate de lo último en desarrollo web para crecer en
            tu carrera profesional.
          </p>
        </div>
        <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
          <form
            id="revue-form"
            action="https://www.getrevue.co/profile/baumannzone/add_subscriber"
            method="post"
            name="revue-form"
            target="_blank"
            class="sm:flex"
          >
            <label for="member_email" class="sr-only">Correo electrónico</label>
            <input
              id="member_email"
              type="email"
              required
              name="member[email]"
              autocomplete="email"
              placeholder="Email"
              class="
                w-full
                border-white
                px-5
                py-3
                placeholder-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-purple-700
                focus:ring-white
                rounded-md
              "
            />
            <div aria-hidden="true" style="position: absolute; left: -5000px">
              <input
                name="b_6d7c39987e19978db13eafcf0_3b7102c5ac"
                tabindex="-1"
              />
            </div>
            <button
              type="submit"
              value="Subscribe"
              name="subscribe"
              class="
                mt-3
                w-full
                flex
                items-center
                justify-center
                px-5
                py-3
                border border-transparent
                shadow
                text-base
                font-medium
                rounded-md
                text-white
                bg-purple-500
                hover:bg-purple-400
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-purple-700
                focus:ring-white
                sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0
              "
            >
              Suscríbete
            </button>
          </form>
          <p class="mt-3 text-sm text-purple-200 xl:text-right">
            Al suscribirse, acepta los
            <a
              target="_blank"
              href="https://www.getrevue.co/terms"
              class="text-white font-medium underline"
              rel="noopener noreferrer"
            >
              Términos</a
            >
            y la
            <a
              target="_blank"
              href="https://www.getrevue.co/privacy"
              class="text-white font-medium underline"
              rel="noopener noreferrer"
            >
              Política de Privacidad</a
            >
            de Revue.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FormSuscribeSection',
}
</script>
