document.addEventListener("DOMContentLoaded", () => {
  const MOUSE_SENSITIVITY = 20; // Divisor para la sensibilidad del mouse
  const ROTATION_FACTOR = 1.5; // Factor de rotación 3D

  const container = document.getElementById("parallaxContainer");
  const layers = document.querySelectorAll(".parallax-layer");

  let mouseX = 0;
  let mouseY = 0;
  let containerRect = container.getBoundingClientRect();

  function updateParallax(e) {
    mouseX =
      (e.clientX - containerRect.left - containerRect.width / 2) /
      MOUSE_SENSITIVITY;
    mouseY =
      (e.clientY - containerRect.top - containerRect.height / 2) /
      MOUSE_SENSITIVITY;

    layers.forEach((layer) => {
      const speed = parseFloat(layer.dataset.speed || "0");
      const x = mouseX * speed;
      const y = mouseY * speed;
      const rotateX = -y * ROTATION_FACTOR;
      const rotateY = x * ROTATION_FACTOR;

      layer.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }

  container.addEventListener("mousemove", updateParallax);

  container.addEventListener("mouseleave", () => {
    layers.forEach((layer) => {
      layer.style.transform =
        "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)";
    });
  });

  window.addEventListener("resize", () => {
    containerRect = container.getBoundingClientRect();
  });
});
