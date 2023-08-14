// Dark Mode
let isDarkMode = false;
const darkModeToggle = document.getElementById('dark-mode-toggle');

function toggleDarkMode() {
    const body = document.body;
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

darkModeToggle.addEventListener('change', toggleDarkMode);

// cambiar el estado inicial del switch según el modo actual
darkModeToggle.checked = isDarkMode;
