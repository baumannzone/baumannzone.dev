<template>
  <div class="game">
    <div class="dungeon">
      <div class="dungeon-wall-left"></div>
      <div class="dungeon-wall-right"></div>
      <div
        class="n00b"
        data-text="El pobre unicornio ha muerto por tu culpa ☠️ ☠️ ☠️"
      />
      <div
        class="gg"
        data-text="¡Bien hecho! 🎉 El unicornio ha escapado 🌈 🌈 🌈"
      />
    </div>
  </div>
</template>
∆
<script>
export default {
  name: 'UnicornCssGame',
}
</script>

<style>
/* stylelint-disable */

.game {
  @apply relative w-full border-8 border-gray-500 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white;
  height: 560px;
  background-size: 400% 400%;
  animation: move-bg 5s linear infinite;
  font-size: 2rem;
}

.dungeon {
  @apply relative w-full mx-auto my-0 text-center overflow-hidden bg-gray-800;
  height: 132%;
  box-shadow: 0 0 25px #555;
  transform: perspective(230px) rotateX(12deg) translateY(-195px);
  cursor: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px'><text y='20'>🦄</text></svg>")
      12 12,
    auto;
}

.dungeon::after {
  @apply absolute left-1/2 bottom-2.5 w-5 h-5 transform translate-x-1/2;
  content: '';
  background-color: lime;
  clip-path: polygon(100% 100%, 50% 70%, 0 100%, 50% 0);
}

.dungeon:hover::after {
  display: none;
}

.dungeon:hover .dungeon-wall-left,
.dungeon:hover .dungeon-wall-right {
  animation: move-walls 5s linear, change-background 1s infinite;
}

.dungeon:hover .gg {
  animation: show-gg 0s 5s linear forwards;
}

.n00b,
.gg {
  @apply absolute top-0 left-0 w-full h-full;
}

.n00b {
  @apply hidden bg-red-500 cursor-wait;
}

.gg {
  @apply opacity-0 cursor-wait pointer-events-none;
  background-color: limegreen;
}

.gg::after,
.n00b::after {
  @apply absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 rotate-0;
  content: attr(data-text);
}

@media (min-width: 500px) {
  .gg::after,
  .n00b::after {
    font-size: 3rem;
  }
}

.dungeon-wall-left,
.dungeon-wall-right {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 400%;
  background-color: #bfbfbf;
  background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23000000' fill-opacity='0.11'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.dungeon-wall-left {
  left: 0;
  clip-path: polygon(
    0px 0px,
    40% 0px,
    35% 15%,
    67% 40%,
    31% 38%,
    31% 59%,
    69% 71%,
    70% 77%,
    22% 79%,
    22% 86%,
    40% 100%,
    0px 100%
  );
}

.dungeon-wall-right {
  right: 0;
  clip-path: polygon(
    60% 0px,
    100% 0px,
    100% 100%,
    64% 100%,
    35% 86%,
    77% 84%,
    77% 65%,
    42% 54%,
    40% 46%,
    85% 48%,
    85% 42%,
    48% 14%
  );
}

.dungeon-wall-left:hover ~ .n00b,
.dungeon-wall-right:hover ~ .n00b,
.n00b:hover {
  @apply block z-10;
}

@keyframes show-gg {
  to {
    opacity: 1;
  }
}

@keyframes move-bg {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

@keyframes move-walls {
  100% {
    transform: translateY(100%);
  }
}

@keyframes change-background {
  0% {
    background-color: lightcoral;
  }
  10% {
    background-color: lightcyan;
  }
  20% {
    background-color: yellow;
  }
  30% {
    background-color: PaleGreen;
  }
  40% {
    background-color: LightBlue;
  }
  50% {
    background-color: Pink;
  }
  60% {
    background-color: Lavender;
  }
  70% {
    background-color: Ivory;
  }
  80% {
    background-color: Plum;
  }
  100% {
    background-color: HoneyDew;
  }
}
</style>
