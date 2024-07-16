document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.getElementById('about-link');
    const h1Element = document.getElementById('h1-keisis');
    const pElement = document.getElementById('p-keisis');

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();

        h1Element.textContent = 'About';
        pElement.textContent = 'kakkkkkkkkkkkkkkkkkkkkkkkkkkkkadu';
    });
});

