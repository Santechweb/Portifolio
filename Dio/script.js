// // Pega o botão do menu mobile
const menuToggle = document.getElementById('menuToggle');

// // Pega o menu
const menu = document.getElementById('menu');

// // Quando clicar no botão, abre ou fecha o menu
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// // Fecha o menu ao clicar em qualquer link no celular
const menuLinks = document.querySelectorAll('#menu a');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});