const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// letras que se van a mostrar
const letters = "".split("");
const fontSize = 15;
const spacing = fontSize * 1.5;
const columns = Math.floor(canvas.width / spacing);
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
    drops[i] += 1.1;
  }
}

setInterval(draw, 50);

// Función para verificar si es un dispositivo móvil
function isMobileDevice() {
  return window.matchMedia("(max-width: 768px)").matches;
}

// Solo aplicar el evento de resize en dispositivos más grandes
if (!isMobileDevice()) {
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
