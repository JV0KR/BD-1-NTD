// Mostrar alerta de bienvenida
window.onload = function () {
  alert("Bienvenido al sitio de búsqueda académica 📚");
}

// Función para resaltar secciones
function resaltarSecciones() {
  const secciones = document.querySelectorAll("section");
  secciones.forEach(sec => {
    sec.style.borderColor = "#ff6600";
    sec.style.backgroundColor = "#fff8e6";
  });
}

// Función para alternar visibilidad de resúmenes
function toggleResumenes() {
  const resumenes = document.querySelectorAll(".resumen");
  resumenes.forEach(res => {
    res.style.display = (res.style.display === "none") ? "block" : "none";
  });
}

// Función para volver al estilo original
function restaurarEstilos() {
  const secciones = document.querySelectorAll("section");
  secciones.forEach(sec => {
    sec.style.borderColor = "#0066cc";
    sec.style.backgroundColor = "#ffffff";
  });
}
