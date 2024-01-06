function openTab(evt, tabName) {
    // Ocultar todos los elementos con class="tabcontent"
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Eliminar la clase "active" de todos los elementos con class="tablinks"
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar el contenido de la pestaña actual y añadir una clase "active" al botón que abrió la pestaña
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Función para mostrar la categoría de photocards seleccionada
function showPhotocardCategory(category) {
    // Ocultar todas las categorías
    var categories = document.getElementsByClassName("album-category");
    for (var i = 0; i < categories.length; i++) {
        categories[i].style.display = "none";
    }

    // Mostrar la categoría seleccionada
    var selectedCategory = document.getElementById(category);
    if (selectedCategory) {
        selectedCategory.style.display = "block";
    }
}

// Agregar un evento de 'click' al primer botón de pestaña para abrirlo por defecto al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();
});
