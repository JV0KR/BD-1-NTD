// 🔹 Resaltar artículo
function resaltar(idArticulo) {
    const articulo = document.getElementById(idArticulo);
    articulo.classList.toggle("resaltado");
}

// 🔹 Mostrar/Ocultar resumen
function toggleResumen(idArticulo) {
    const resumen = document.querySelector(`#${idArticulo} .resumen`);
    if (resumen.style.display === "none" || resumen.style.display === "") {
        resumen.style.display = "block";
    } else {
        resumen.style.display = "none";
    }
}

// 🔹 Cambiar color de fondo aleatorio
function cambiarColor(idArticulo) {
    const articulo = document.getElementById(idArticulo);
    const colores = ["#fef9e7", "#e8f8f5", "#f9ebea", "#eaf2f8", "#f4ecf7"];
    const colorRandom = colores[Math.floor(Math.random() * colores.length)];
    articulo.style.backgroundColor = colorRandom;
}
//comentario

// 🔹 Contar palabras del resumen
function contarPalabras(idArticulo) {
    const resumen = document.querySelector(`#${idArticulo} .resumen`).innerText;
    const numPalabras = resumen.split(" ").length;
    alert(`El resumen tiene ${numPalabras} palabras.`);
}

// 🔹 Copiar DOI al portapapeles
function copiarDOI(idArticulo) {
    const doi = document.querySelector(`#${idArticulo} a`).href;
    navigator.clipboard.writeText(doi).then(() => {
        alert("DOI copiado al portapapeles: " + doi);
    });
}

// 🔹 Zoom + y Zoom -
function zoom(idArticulo, accion) {
    const articulo = document.getElementById(idArticulo);
    let fontSize = window.getComputedStyle(articulo, null).getPropertyValue('font-size');
    let currentSize = parseFloat(fontSize);

    if (accion === "in") {
        articulo.style.fontSize = (currentSize + 2) + "px";
    } else if (accion === "out") {
        articulo.style.fontSize = (currentSize - 2) + "px";
    }
}

// 🔹 Scroll automático al artículo
function irAArticulo(idArticulo) {
    const articulo = document.getElementById(idArticulo);
    articulo.scrollIntoView({ behavior: "smooth", block: "center" });
}
