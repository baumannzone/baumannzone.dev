<template>
  <div class="overflow-hidden bg-white">
    <div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="absolute top-0 bottom-0 hidden w-screen lg:block left-3/4"
      ></div>
      <div
        class="
          mx-auto
          text-base
          max-w-prose
          lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none
        "
      >
        <div>
          <h2
            class="
              text-base
              font-semibold
              tracking-wide
              text-indigo-600
              uppercase
            "
          >
            Mis /Uses
          </h2>
          <h3
            class="
              mt-2
              text-3xl
              font-extrabold
              leading-8
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
          >
            Mi espacio de trabajo
          </h3>
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:row-start-1 lg:col-start-2">
          <svg
            class="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
              height="384"
              fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
            />
          </svg>
          <div class="relative mx-auto text-base max-w-prose lg:max-w-none">
            <figure>
              <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                <img
                  class="object-cover object-center rounded-lg shadow-lg"
                  src="/uses/desktop.jpg"
                  alt="Whitney leaning against a railing on a downtown street"
                  width="1184"
                  height="1376"
                />
              </div>
              <figcaption class="flex mt-3 text-sm text-gray-500">
                <!-- Heroicon name: solid/camera -->
                <svg
                  class="flex-none w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2">Foto de mi escritorio de trabajo</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="mx-auto text-base max-w-prose lg:max-w-none">
            <p class="text-lg text-gray-500">
              Todas las semanas me llegan mensajes en los que me pregutan acerca
              de alguna aplicación de software que utilizo o alguna pieza de
              hardware que tengo.
            </p>
          </div>
          <div
            class="
              mx-auto
              mt-5
              prose
              text-gray-500
              prose-indigo
              lg:max-w-none lg:row-start-1 lg:col-start-1
            "
          >
            <p>
              Soy un fiel defensor del trabajo remoto. Llevo trabajando en
              remoto desde el 2015, aunque no siempre he tenido la oportunidad
              de hacerlo, pero sí la mayor parte del tiempo.
              <br />
              En DCSL Guidesmiths, la empresa para la que trabajo actualmente,
              tenemos la opción de ser <span class="italic">full remote</span>.
            </p>

            <h2>Hardware</h2>

            <h3>Portátil</h3>
            <ul>
              <li></li>
            </ul>
            <p>
              Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit
              nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et
              sit. Faucibus sed non gravida lectus dignissim imperdiet a.
            </p>
            <p>
              Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem
              arcu, metus, egestas netus cursus. In.
            </p>
            <ul>
              <li>Quis elit egestas venenatis mattis dignissim.</li>
              <li>
                Cras cras lobortis vitae vivamus ultricies facilisis tempus.
              </li>
              <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
            </ul>
            <p>
              Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt
              vel ultricies. Vulputate aliquet velit faucibus semper.
              Pellentesque in venenatis vestibulum consectetur nibh id. In id ut
              tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum
              lacus in. Viverra.
            </p>
            <h3>How we helped</h3>
            <p>
              Tincidunt integer commodo, cursus etiam aliquam neque, et.
              Consectetur pretium in volutpat, diam. Montes, magna cursus nulla
              feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu
              proin massa, lectus. Diam rutrum posuere donec ultricies non
              morbi. Mi a platea auctor mi.
            </p>
            <p>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
              urna sed consectetur neque tristique pellentesque. Blandit amet,
              sed aenean erat arcu morbi.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
