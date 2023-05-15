const menuHamburger = document.querySelector('.menu-hamburger');

const menu = document.querySelector('.menu');

menuHamburger.addEventListener('click',() => {
    menu.classList.toggle('active')
});


// () Função anômima
// ClassList = CHAMAR CSS PELO Js
// toggle = tornar botão clicável (clicar e desclicar)