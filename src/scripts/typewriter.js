const messages = [
  "Desarrollador de software freelance.",
  "Automatizo procesos, creo herramientas, despliego y mantengo infraestructuras.",
  "Explora mis proyectos.",
];

function type() {
  const el = document.getElementById("typed");
  if (!el) return;

  let messageIndex = 0;
  let charIndex = 0;

  function _type() {
    if (charIndex < messages[messageIndex].length) {
      el.textContent += messages[messageIndex].charAt(charIndex);
      charIndex++;
      setTimeout(_type, 50);
    } else {
      setTimeout(() => {
        el.textContent = "";
        charIndex = 0;
        messageIndex = (messageIndex + 1) % messages.length;
        _type();
      }, 2000);
    }
  }

  _type();
}

export function startTyping() {
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
  });
}
