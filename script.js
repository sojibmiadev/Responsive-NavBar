

let menuBtn = document.getElementById("menu-btn")
let navBar = document.getElementById("nav-bar")
let navLinks = document.querySelectorAll("li")


menuBtn.addEventListener("click",()=>{
    navBar.classList.toggle("active")
    menuBtn.classList.toggle("fa-times")
})

navLinks.forEach((navLinks)=>{
    navLinks.addEventListener("click",()=>{
        navBar.classList.remove("active")
        menuBtn.classList.toggle("fa-times")
    })
})