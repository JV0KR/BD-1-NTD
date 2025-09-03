document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Verificar la preferencia guardada al cargar la página
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Modo Claro';
    }
    
    // Añadir event listener al botón
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Cambiar el texto del botón según el modo actual
        if (document.body.classList.contains('dark-mode')) {
            this.textContent = 'Modo Claro';
        } else {
            this.textContent = 'Modo Oscuro';
        }
        
        // Guardar la preferencia en localStorage
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
});