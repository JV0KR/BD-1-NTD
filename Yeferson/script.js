document.addEventListener('DOMContentLoaded', () => {
    // Función 1: Mostrar mensaje de bienvenida
    function showWelcomeMessage() {
        alert('Bienvenido a la página de búsqueda académica. Explora los detalles del artículo y el proceso de búsqueda.');
    }
    showWelcomeMessage();

    // Función 2: Cambiar tema claro/oscuro
    function toggleTheme() {
        const body = document.getElementById('body');
        const themeButton = document.getElementById('themeToggle');
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeButton.textContent = 'Cambiar a Modo Claro';
        } else {
            themeButton.textContent = 'Cambiar a Modo Oscuro';
        }
    }
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Función 3: Gestionar cadenas de búsqueda (agregar y eliminar)
    function manageSearchTerms(action) {
        const searchTermsList = document.getElementById('searchTerms');
        if (action === 'add') {
            const input = document.getElementById('newSearchTerm');
            const term = input.value.trim();
            if (term === '') {
                alert('Por favor, ingresa una cadena de búsqueda válida.');
                return;
            }
            const li = document.createElement('li');
            li.textContent = term;
            searchTermsList.appendChild(li);
            input.value = ''; // Limpiar el campo
        } else if (action === 'remove') {
            const searchTerms = searchTermsList.getElementsByTagName('li');
            if (searchTerms.length > 0) {
                if (confirm('¿Estás seguro de que deseas borrar la última cadena de búsqueda?')) {
                    searchTermsList.removeChild(searchTerms[searchTerms.length - 1]);
                }
            } else {
                alert('No hay más cadenas de búsqueda para borrar.');
            }
        }
    }
    const addSearchButton = document.getElementById('addSearchBtn');
    const removeSearchButton = document.getElementById('removeSearchBtn');
    if (addSearchButton) {
        addSearchButton.addEventListener('click', () => manageSearchTerms('add'));
    } else {
        console.error('Botón de agregar cadena no encontrado.');
    }
    if (removeSearchButton) {
        removeSearchButton.addEventListener('click', () => manageSearchTerms('remove'));
    } else {
        console.error('Botón de borrar cadena no encontrado.');
    }
});