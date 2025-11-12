// validator.js
document.addEventListener("DOMContentLoaded", () => {
  const htmlContent = document.body.innerHTML;

  if (htmlContent.includes("<p>") && !htmlContent.includes("</p>")) {
    alert("⚠️ Parece que olvidaste cerrar un párrafo con </p>");
  }

  if (htmlContent.includes("<h1>") && !htmlContent.includes("</h1>")) {
    alert("⚠️ Parece que olvidaste cerrar un encabezado con </h1>");
  }
});
