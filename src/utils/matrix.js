const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// letras que se van a mostrar
const letters = "BAUMANNZONE.DEV</©†❖> $#? JavaScript DEVELOPER♥︎♦︎♣︎♠︎".split(
  "",
);
const fontSize = 15;
const spacing = fontSize * 1.5;
const columns = Math.floor(canvas.width / spacing);
// +2 para que haya mas columnas y se cubra toda la pantalla
const drops = Array(columns + 2).fill(1);

// funcion para dibujar
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00FF00";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * spacing, drops[i] * spacing);

    if (drops[i] * spacing > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 50);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
