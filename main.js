const navBar = document.getElementById('nav-bar'),
openMenu = document.getElementById('open-menu'),
closeMenu = document.getElementById('close-menu')

openMenu.addEventListener('click', () => {
    navBar.classList.toggle('show')
})
closeMenu.addEventListener('click', () => {
    navBar.classList.remove('show')
})