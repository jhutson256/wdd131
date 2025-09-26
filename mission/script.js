let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        logo.setAttribute('src', 'byui-logo-white.png');
        logo.setAttribute('alt', 'BYU Idaho white logo');
        document.body.className = 'dark';
        document.querySelector('h4').style.color = 'lightblue';
        // code for changes to colors and logo
    } else {
        logo.setAttribute('src', 'brightspotcdn.byui.png');
        logo.setAttribute('alt', 'BYU Idaho logo');
        document.body.className = 'none';
        document.querySelector('h4').style.color = '#035f9c';
        // code for changes to colors and logo
    }
}           
                    