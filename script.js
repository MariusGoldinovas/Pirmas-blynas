document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.getElementById('about-link');
    const h1Element = document.getElementById('h1-keisis');
    const pElement = document.getElementById('p-keisis');

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();

        h1Element.textContent = 'About';
        pElement.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sequi possimus ad quod officia maxime! Ullam optio amet est laborum reprehenderit adipisci minima, consequatur';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const historyLink = document.getElementById('history-link');
    const h1Element = document.getElementById('h1-keisis');
    const pElement = document.getElementById('p-keisis');

    historyLink.addEventListener('click', function(event) {
        event.preventDefault();

        h1Element.textContent = 'History';
        pElement.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sequi possimus ad quod officia maxime! Ullam optio amet est laborum reprehenderit adipisci minima, consequatur';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactsLink = document.getElementById('contacts-link');
    const h1Element = document.getElementById('h1-keisis');
    const pElement = document.getElementById('p-keisis');

    contactsLink.addEventListener('click', function(event) {
        event.preventDefault();

        h1Element.textContent = 'Contacts';
        pElement.textContent = 'kontaktai';
    });
});