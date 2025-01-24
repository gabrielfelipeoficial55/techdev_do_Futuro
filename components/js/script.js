const navbar = document.querySelector(".navbar");
const btnMobile = document.querySelector(".fa-bars");

btnMobile.addEventListener('click', () => {

    navbar.classList.toggle('active');

})