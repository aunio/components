const activeMenu = document.querySelector('.navbar-title');
const navbarBurger = document.querySelector('.navbar-burger');
const navbarOverlay = document.querySelector('.navbar-overlay');

const buttonsClick = document.querySelectorAll('.nav-link');

navbarBurger.addEventListener('click', () => document.body.classList.toggle("open"))
navbarOverlay.addEventListener('click', () => document.body.classList.toggle("open"))

buttonsClick.forEach( button => {
    button.addEventListener('click', () => {
        buttonsClick.forEach( btn => {
            btn.classList.remove("active");
        })
        activeMenu.innerHTML = button.innerText;
        button.classList.add("active");
    });
})