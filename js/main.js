const btnMobile = document.querySelector('.btn-mobile');;

function toggleMenu () {
    const menuNav = document.querySelector('#menu-nav');
    menuNav.classList.toggle('ativo');
}

btnMobile.addEventListener('click', toggleMenu)