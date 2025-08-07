const messages: string[] = [
  'Desarrollador de software freelance.',
  'Automatizo procesos, creo herramientas, despliego y mantengo infraestructuras.',
  'Explora mis proyectos.',
];

export function startTyping(): void {
  const el = document.getElementById('typed');
  if (!el) return;

  el.textContent = '';

  let messageIndex = 0;
  let charIndex = 0;

  function type(): void {
    if (!el) return;

    if (charIndex < messages[messageIndex].length) {
      el.textContent += messages[messageIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 50);
    } else {
      setTimeout(() => {
        el.textContent = '';
        charIndex = 0;
        messageIndex = (messageIndex + 1) % messages.length;
        type();
      }, 2000);
    }
  }

  setTimeout(type, 1000);
}
