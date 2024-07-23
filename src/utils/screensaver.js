(function() {
  const currentScript = document.currentScript;
  const el = document.getElementById('screen-saver');
  const id = el.id;

  el.innerHTML = `<div><div>${(currentScript && currentScript.getAttribute('displayText')) || 'baumannzone.dev'}</div></div>`;

  const width = el.offsetWidth;
  const height = el.offsetHeight;

  const style = document.body.appendChild(document.createElement('style'));
  style.textContent = `
#${id} {
  left: 0; top: 0; right: 0; bottom: 0;
  z-index: 100000;
  color: #eee;
  background-color: #000;
}
#${id} div {
  width: ${width}px;
  height: ${height}px;
  line-height: 1;
}
#${id} > div {
  animation: x${id} 13s linear infinite alternate;
}
#${id} > div > div {
  animation: y${id} 7s linear infinite alternate;
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
  const timeout = (currentScript && Number(currentScript.getAttribute('timeout'))) || 180000;

  function disable() {
    el.style.display = 'none';
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      el.style.display = 'block';
    }, timeout);
  }

  function handleEvent() {
    disable();
  }

  disable();
  document.addEventListener('mousemove', handleEvent);
  document.addEventListener('keydown', handleEvent);
  document.addEventListener('scroll', handleEvent);
})();
