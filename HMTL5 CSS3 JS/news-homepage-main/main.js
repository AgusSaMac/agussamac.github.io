document.addEventListener('DOMContentLoaded', function() {
    reportWindowSize();
});

// Function to detect window size.
function reportWindowSize() {
    let w = window.innerWidth;
    
    if (w > 750) {
        openMenu.classList.add('hidden');
        closeMenu.classList.add('hidden');
        navbar.classList.remove('hidden');
    } else {
        openMenu.classList.remove('hidden');
        closeMenu.classList.remove('hidden');
        navbar.classList.add('hidden');
    }
}

// Variables for mobile navigation bar
const navbar = document.querySelector(".menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("menu-close");

// arrow functions that control navbar
openMenu.addEventListener('click', () => {
    navbar.classList.remove("hidden");
});

closeMenu.addEventListener('click', () => {
    navbar.classList.add('hidden');
});

window.onresize = reportWindowSize; // Calling window size detect function