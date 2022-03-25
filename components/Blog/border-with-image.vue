<template>
  <div class="flex">
    <div class="box border-image mr-4"></div>
    <div class="-mt-8 -mb-8">
      <img
        src="/blog/bordes-con-degradado-css/pexels-magda-ehlers-1279813.jpg"
        alt="image with multiple colored columns"
        width="150"
      />
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 150px;
  height: 100px;
  border-style: solid;
  border-width: 10px;
}

.border-image {
  border-image-source: url('/blog/bordes-con-degradado-css/pexels-magda-ehlers-1279813.jpg');
  border-image-slice: 1;
}
</style>
