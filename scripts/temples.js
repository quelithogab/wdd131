
    // JavaScript to dynamically populate the current year
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // JavaScript to dynamically populate the last modified date
    document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

    document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
});

