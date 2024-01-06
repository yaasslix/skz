function openTab(evt, tabName) {
    // Ocultar todos los elementos con class="tabcontent"
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Mostrar el contenido de la pestaña actual
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Agregar un evento de 'click' al primer botón de pestaña para abrirlo por defecto al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();
});
