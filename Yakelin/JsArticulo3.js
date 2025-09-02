document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnDestacar");

    btn.addEventListener("click", function () {
        const sections = document.querySelectorAll("section");
        sections.forEach((section, index) => {
            section.style.backgroundColor = index % 2 === 0 ? "#e0f7fa" : "#fff3cd";
            section.style.borderLeft = "5px solid #28a745";
        });

        btn.textContent = "¡Información resaltada!";
        btn.classList.remove("btn-outline-primary");
        btn.classList.add("btn-success");

        // Deshabilita el botón después de hacer clic
        btn.disabled = true;
    });
});
