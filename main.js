const menuBtn = document.querySelector('.menu-btn')
const navlink = document.querySelector('.navbar-link')
menuBtn.addEventListener('click',()=>{
    navlink.classList.toggle('mobile-menu')
})