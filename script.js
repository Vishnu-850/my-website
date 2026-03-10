// script.js - basic user interactions

document.addEventListener('DOMContentLoaded', () => {
    const aboutBtn = document.getElementById('aboutBtn');
    const licenseBtn = document.getElementById('licenseBtn');
    const items = document.querySelectorAll('main ol li');

    aboutBtn.addEventListener('click', () => {
        alert('Welcome to Surya Kiranam! We are a friendly local store offering a variety of goods.');
    });

    licenseBtn.addEventListener('click', () => {
        alert('All products are sold under the standard store license. Contact us for details.');
    });

    items.forEach(li => {
        li.addEventListener('click', () => {
            const name = li.textContent.trim();
            alert(`You clicked on: ${name}`);
            li.classList.toggle('highlight');
        });
    });

    // optional: show current time in the header
    const header = document.querySelector('header');
    const timeDiv = document.createElement('div');
    timeDiv.id = 'clock';
    header.appendChild(timeDiv);

    function updateClock() {
        const now = new Date();
        timeDiv.textContent = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();
});