function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    const closeMenu = document.querySelector('.close-menu');
            closeMenu.style.display = (menu.classList.contains('active')) ? 'block' : 'none';
} 

// Adicione o código JavaScript para fechar o menu em telas maiores que 600px
window.addEventListener('resize', function () {
    const menu = document.querySelector('.menu');
    if (window.innerWidth > 600) {
        menu.classList.remove('active');
    }
});

