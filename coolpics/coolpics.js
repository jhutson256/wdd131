let btn = document.querySelector('#menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
}

const mainGrid = document.querySelector('#main-grid');
const modal = document.querySelector('dialog');
const modalImg = modal.querySelector('img');
const closeViewer = modal.querySelector('.close-viewer');

mainGrid.addEventListener('click', openModal);

function openModal(e) {
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');
    modalImg.src = full;
    modalImg.alt = alt;
    modal.showModal();
}

closeViewer.addEventListener('click', function() {
    modal.close();
});

modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.close();
    }
});