<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="
            text-base
            font-semibold
            text-purple-600
            tracking-wide
            uppercase
          "
        >
          CSS
        </h2>
        <p
          class="
            mt-1
            text-4xl
            font-extrabold
            text-gray-900
            sm:text-5xl sm:tracking-tight
            lg:text-6xl
          "
        >
          El juego del unicornio
        </p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          Start building for free, then add a site plan to go live. Account
          plans unlock additional features.
        </p>
      </div>
    </div>

    <div class="container">
      <div class="game">
        <div class="road-left"></div>
        <div class="road-right"></div>

        <div
          class="n00b"
          data-text="El pobre unicornio ha muerto por tu culpa ☠️ ☠️ ☠️"
        ></div>
        <div
          class="gg"
          data-text="🎉🎉 ¡Enhorabuena! El unicornio ha escapado 🌈 🌈"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnicornCssGame',
}
</script>

<style>
/* stylelint-disable */

.container {
  position: relative;
  width: 700px;
  height: 560px;
  margin: 20px auto;
  border: 10px solid #6a6a6a;
  overflow: hidden;
  background: linear-gradient(87deg, #10d0ff, #3642b7);
  background-size: 400% 400%;
  animation: move-bg 5s linear infinite;
  border-radius: 5px;
}

.game {
  position: relative;
  width: 100%;
  height: 132%;
  margin: 0 auto;
  box-shadow: 0 1px 15px #222;
  transform: perspective(230px) rotateX(12deg) translateY(-195px);
  text-align: center;
  overflow: hidden;
  background-color: #222;
  cursor: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px'><text y='20'>🦄</text></svg>")
      16 0,
    auto;
}

.game::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 10px;
  width: 20px;
  height: 20px;
  transform: translateX(-50%);
  background: limegreen;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.game:hover::after {
  display: none;
}

.game:hover .road-left,
.game:hover .road-right {
  animation: move-road 5s ease-in forwards,
    change-background 1s infinite forwards;
}

.game:hover .gg {
  animation: show-gg 5s linear forwards;
}

.n00b,
.gg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.n00b {
  display: none;
  background: red;
  cursor: progress;
}

.gg {
  opacity: 0;
  pointer-events: none;
  background-color: limegreen;
}

.gg::after,
.n00b::after {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 3em;
  transform: translate3d(-50%, -50%, 0);
  content: attr(data-text);
}

.road-left,
.road-right {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 400%;
  transform: translateZ(1px);
  background-color: #bfbfbf;
  background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23000000' fill-opacity='0.11'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.road-left {
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

.road-right {
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

.road-left:hover ~ .n00b,
.road-right:hover ~ .n00b,
.n00b:hover {
  display: block;
  z-index: 1;
}

@keyframes show-gg {
  99% {
    opacity: 0;
  }
  100% {
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

@keyframes move-road {
  100% {
    transform: translateY(100%);
  }
}

@keyframes change-background {
  0% {
    background-color: red;
  }
  10% {
    background-color: deepskyblue;
  }
  20% {
    background-color: yellow;
  }
  30% {
    background-color: green;
  }
  40% {
    background-color: blue;
  }
  50% {
    background-color: indigo;
  }
  60% {
    background-color: mediumvioletred;
  }
  70% {
    background-color: gold;
  }
  80% {
    background-color: fuchsia;
  }
  100% {
    background-color: lime;
  }
}
</style>
