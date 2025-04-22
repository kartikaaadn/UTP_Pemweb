// script.js
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        // Remove active class from all tabs and panes
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        // Add active class to clicked tab and corresponding pane
        tab.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});
// Mobile menu toggle
const garistiga = document.querySelector('.garistiga');
const navLinks = document.querySelector('.nav-links');

garistiga.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    garistiga.classList.toggle('active');
});