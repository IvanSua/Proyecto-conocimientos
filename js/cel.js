const menu = document.querySelector(".iniciomenu");
const abrirMenuBtn = document.querySelector (".abrirmenu");
const cerrarMenuBtn = document.querySelector (".cerrarmenu");

function toggleMenu () {
    menu.classList.toggle ("menu_abrir");

}

abrirMenuBtn.addEventListener ("click", toggleMenu);
cerrarMenuBtn.addEventListener ("click", toggleMenu);