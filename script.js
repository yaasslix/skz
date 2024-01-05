function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openNestedTab(evt, tabName) {
    var i, nestedTabcontent, nestedTablinks;
    nestedTabcontent = document.getElementsByClassName("nested-tabcontent");
    for (i = 0; i < nestedTabcontent.length; i++) {
        nestedTabcontent[i].style.display = "none";
    }

    nestedTablinks = document.getElementsByClassName("nested-tablinks");
    for (i = 0; i < nestedTablinks.length; i++) {
        nestedTablinks[i].className = nestedTablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
 function moveSlide(step, sliderId) {
    var slides = document.querySelectorAll("#" + sliderId + " .album-slide");
    var currentSlide = 0;
    for (var i = 0; i < slides.length; i++) {
        if (slides[i].style.display === "block") {
            currentSlide = i;
            break;
        }
    }
    slides[currentSlide].style.display = "none";
    var newSlideIndex = currentSlide + step;
    if (newSlideIndex >= slides.length) newSlideIndex = 0;
    if (newSlideIndex < 0) newSlideIndex = slides.length - 1;
    slides[newSlideIndex].style.display = "block";
}

function showPhotocardCategory(category) {
    var categories = document.getElementsByClassName('album-category');
    for (var i = 0; i < categories.length; i++) {
        categories[i].style.display = 'none';
    }
    document.getElementById(category).style.display = 'block';
}

// Inicializar el primer slide visible y la primera categoría de photocards
window.onload = function() {
    var allSliders = document.querySelectorAll('.album-slider');
    allSliders.forEach(function(slider) {
        slider.children[0].style.display = 'block';
    });

    // Asegúrate de que exista el elemento con id '5-STAR' antes de intentar mostrarlo
    var initialCategory = document.getElementById('5-STAR');
    if (initialCategory) {
        initialCategory.style.display = 'block';
    }
};