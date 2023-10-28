// Add your JavaScript code here
function toggleInfo(id) {
    var element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

// Update toggleInfo to add animations and resizing
function toggleInfo(id) {
    var element = document.getElementById(id);
    var parentElement = element.parentElement;
    
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        element.classList.add('show');
        parentElement.classList.add('active');
    } else {
        element.classList.add('hidden');
        element.classList.remove('show');
        parentElement.classList.remove('active');
    }
}

// JS code for header scroll behavior
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 30) {
        header.classList.add('scrolled-down');
    } else {
        header.classList.remove('scrolled-down');
    }
});

// JS code for footer scroll behavior
window.addEventListener("scroll", function() {
    const footer = document.querySelector("footer");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition + windowHeight >= documentHeight) {
        footer.classList.remove("footer-partial");
    } else {
        footer.classList.add("footer-partial");
    }
});

document.addEventListener("scroll", function() {
    const footer = document.querySelector("footer");
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.classList.add("sticky-green");
    } else if (window.scrollY === 0) {
        footer.classList.remove("sticky-green");
    } else {
        footer.classList.remove("sticky-green");
    }
});