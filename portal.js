let myName = document.querySelector('#name');

myName.innerText = 'Jacob Hutson';

let btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}

const hobbies = ['Football', 'Computer Programming', 'Computer Building', 'Fishing'];

let myList = document.querySelector('#my-list');

const hobbiesHTML = hobbies.map(listTemplate);

function listTemplate(item){
    return `<li>${item}</li>`;
}

myList.innerHTML = hobbiesHTML.join('');