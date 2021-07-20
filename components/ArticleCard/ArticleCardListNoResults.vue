<template>
  <div class="w-full mt-6 pt-10">
    <div class="prose lg:prose-xl prose-purple">
      <p>
        La búsqueda de
        <code>{{ searchText }}</code> no obtuvo ningún resultado.
      </p>

      <p>Sugerencias:</p>
      <ul>
        <li>Comprueba que todas las palabras están escritas correctamente.</li>
        <li>Intenta usar palabras más generales.</li>
        <li>Prueba a usar menos palabras.</li>
        <li>Vuelve al inicio del <nuxt-link to="blog">blog</nuxt-link>.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCardListNoResults',
  props: {
    searchText: {
      type: String,
      required: true,
    },
  },
}
</script>
