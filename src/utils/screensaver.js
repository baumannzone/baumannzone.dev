const bannerText = "💻 baumannzone.dev";
const secondsToWait = 60;
const id = "screen-saver";
const currentTitle = document.title;

const zSuperScript = "ᶻ"; // Carácter superíndice de la z
let zCount = 0;
let titleInterval = null; // Para controlar el intervalo de actualización del título
let increasing = true; // Controla si estamos añadiendo o quitando "z"

// Función para actualizar el título con las zzz
function updateTitle() {
  if (increasing) {
    zCount += 1;
    if (zCount === 3) {
      increasing = false; // Cambia la dirección cuando llega a "zzz"
    }
  } else {
    zCount -= 1;
    if (zCount === 1) {
      increasing = true; // Cambia la dirección cuando llega a "z"
    }
  }
  document.title = zSuperScript.repeat(zCount) + " | " + currentTitle;
}

const millisecondsToWait = secondsToWait * 1000;
const el = document.body.appendChild(document.createElement("div"));
el.id = id;

el.style.position = "fixed";
el.innerHTML = `
<div>
  <div style="font-size: 1.5rem; font-weight: 700;">
    ${bannerText}
  </div>
</div>`;

const width = el.offsetWidth + 10;
const height = el.offsetHeight - 7;

const style = document.body.appendChild(document.createElement("style"));
style.textContent = `
  #screen-saver {
    left: 0; 
    top: 0; 
    right: 0; 
    bottom: 0;
    color: #fff;
    z-index: 100000;
  }
    
  #screen-saver div {
    width: ${width}px;
    height: ${height}px;
  }
  #screen-saver > div {
    animation: x${id} 5s linear infinite alternate;
  }
  #screen-saver > div > div {
    animation: y${id} 9s linear infinite alternate;
  }
  @keyframes x${id} {
    100% {
      transform: translateX(calc(100vw - ${width}px));
    }
  }
  @keyframes y${id} {
    100% {
      transform: translateY(calc(100vh - ${height}px));
    }
  }
`;

let timeoutId = null;

function disable() {
  el.style.display = "none";
  document.title = currentTitle;
  zCount = 1;
  increasing = true; // Resetea la dirección
  clearInterval(titleInterval); // Detiene la actualización del título

  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    el.style.display = "block";
    console.log(
      "%cScreen saver activated",
      "padding:1em; border-radius: 4px; background: rgb(221,0,255); background: linear-gradient(90deg, rgba(221,0,255,1) 25%, rgba(253,29,132,1) 75%); color: white; font-weight: bold; font-size: 20px; font-style: italic; text-shadow: 1px 1px 3px #444;",
    );
    console.log("💻 Mi setup: https://baumannzone.dev/uses");

    // Inicia el intervalo para actualizar el título con las zzz
    titleInterval = setInterval(updateTitle, 1000);
  }, millisecondsToWait);
}

function handleEvent() {
  disable();
}

disable();
document.addEventListener("mousemove", handleEvent);
document.addEventListener("keydown", handleEvent);
document.addEventListener("scroll", handleEvent);
