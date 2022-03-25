<template>
  <div class="flex space-x-4">
    <div class="box conic-gradient"></div>
    <div class="box conic-bg"></div>
  </div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
}

.conic-gradient {
  border-width: 10px;
  border-style: solid;
  border-image: conic-gradient(lime, fuchsia, cyan) 1;
}

.conic-bg {
  background: conic-gradient(lime, fuchsia, cyan);
}
</style>
