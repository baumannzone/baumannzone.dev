<template>
  <div class="flex space-x-4">
    <div class="box radial-gradient"></div>
    <div class="box radial-bg"></div>
  </div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  border-style: solid;
  border-width: 10px;
}

.radial-gradient {
  border-image: radial-gradient(red, cyan) 1;
}

.radial-bg {
  background: radial-gradient(red, cyan);
  border-width: 0;
}
</style>
