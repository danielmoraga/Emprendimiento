const hamburguer = document.getElementById('navigation__hamburguer')
const menulist = document.getElementById('navigation__list')

hamburguer.addEventListener('click',() =>{
    menulist.classList.toggle('show');

});