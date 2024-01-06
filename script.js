function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    // Ocultar todo el contenido de las pestañas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Desactivar todas las pestañas
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Mostrar el contenido de la pestaña seleccionada y activarla
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function moveSlide(step, sliderId) {
    var slides = document.querySelectorAll("#" + sliderId + " .album-slide");
    var currentSlide = 0;
    // Encontrar el slide actual
    for (var i = 0; i < slides.length; i++) {
        if (slides[i].style.display === "block") {
            currentSlide = i;
            break;
        }
    }
    // Ocultar el slide actual
    slides[currentSlide].style.display = "none";
    // Calcular el nuevo índice del slide
    var newSlideIndex = currentSlide + step;
    if (newSlideIndex >= slides.length) newSlideIndex = 0;
    if (newSlideIndex < 0) newSlideIndex = slides.length - 1;
    // Mostrar el nuevo slide
    slides[newSlideIndex].style.display = "block";
}

// Inicializar el primer slide visible en cada slider
window.onload = function() {
    var allSliders = document.querySelectorAll('.album-slider');
    allSliders.forEach(function(slider) {
        slider.children[0].style.display = 'block';
    });

    // Mostrar la primera pestaña por defecto (si es necesario)
    var firstTab = document.querySelector('.tablinks');
    if (firstTab) {
        firstTab.click();
    }
};
