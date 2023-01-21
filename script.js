const nav = document.querySelector('nav');
const button = document.querySelector('.hamburger-menu')
button.addEventListener('click', (event) => {
    nav.classList.toggle('open')
})



window.addEventListener("scroll",function(){
    const header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

const video = document.getElementById('home-logo');
video.play();

