const button =document.querySelector('.header-button')
const nav =document.querySelector('.nav')
const header =document.querySelector('.header')
const home =document.querySelector('.home-container')

button .addEventListener('click',()=>{
    nav.classList.toggle('active')
})

button .addEventListener('click',()=>{
    header.classList.toggle('active1')
})

button .addEventListener('click',()=>{
    home.classList.toggle('hidden')
})



