// theme-switcher.js
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

// Agregar un botón dinámicamente
document.addEventListener("DOMContentLoaded", () => {
  const button = document.createElement("button");
  button.textContent = "Cambiar tema";
  button.style.margin = "10px";
  button.onclick = toggleTheme;
  document.body.prepend(button);
});
