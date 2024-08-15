const redesSociaisLink = document.querySelector('.redes-sociais');
const portfolioLink = document.querySelector('.portfolio');
const redesSociaisDropdown = document.querySelector('.redes-sociais-dropdown');
const portfolioDropdown = document.querySelector('.portfolio-dropdown');

redesSociaisLink.addEventListener('click', () => {
    redesSociaisDropdown.classList.toggle('show');
});

portfolioLink.addEventListener('click', () => {
    portfolioDropdown.classList.toggle('show');
});