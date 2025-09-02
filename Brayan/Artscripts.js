document.addEventListener("DOMContentLoaded", () => {
    // Botón para resaltar secciones
    const btnResaltar = document.getElementById("resaltarBtn");
    btnResaltar.addEventListener("click", () => {
        document.querySelectorAll(".box").forEach(section => {
            section.classList.toggle("resaltado");
        });
    });
});
