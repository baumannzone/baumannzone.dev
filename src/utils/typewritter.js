// Efecto máquina de escribir

document.addEventListener("DOMContentLoaded", () => {
  const typewriter = document.getElementById("typewriter");
  const text = " - Has salido de la Matrix";
  let index = 0;

  function type() {
    if (index < text.length && typewriter) {
      typewriter.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
});
