<template>
  <div class="flex space-x-4">
    <div class="box linear-gradient"></div>
    <div class="box linear-bg"></div>
  </div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  border-style: solid;
  border-width: 10px;
}

.linear-gradient {
  border-image: linear-gradient(45deg, red, lime, blue) 1;
}

.linear-bg {
  background: linear-gradient(45deg, red, lime, blue);
  border-width: 0;
}
</style>
