const burgerWrapper = document.querySelector(".nav-wrapper");
const body = document.querySelector("body"); //.lock
const burgerIcon = document.querySelector(".burger");
function pushBurgerButton() {
    if(burgerWrapper.classList.contains("active")){
        burgerWrapper.classList.remove("active");
        body.classList.remove("lock");
        burgerIcon.classList.remove("active");
    } else {
        burgerWrapper.classList.toggle("active");
        body.classList.toggle("lock");
        burgerIcon.classList.toggle("active");
    }
}  
burgerIcon.addEventListener("click", pushBurgerButton);