const burgerWrapper = document.querySelector(".nav-wrapper");
const body = document.querySelector("body"); //.lock
const burgerButton = document.querySelector(".burger");
const orderButton = document.querySelector(".nav-wrapper__button");
function pushBurgerButton() {
    if(burgerWrapper.classList.contains("active")){
        burgerWrapper.classList.remove("active");
        body.classList.remove("lock");
        burgerButton.classList.remove("active");
    } else {
        burgerWrapper.classList.toggle("active");
        body.classList.toggle("lock");
        burgerButton.classList.toggle("active");
    }
}  
function pushOrderButton() {
    if(burgerWrapper.classList.contains("active")){
        burgerWrapper.classList.remove("active");
        body.classList.remove("lock");
        burgerButton.classList.remove("active");
    }
}  
burgerButton.addEventListener("click", pushBurgerButton);
orderButton.addEventListener("click", pushOrderButton);




const orderButtonLink = document.querySelector("a.nav-wrapper__button");
function changeLink(){
    if(window.location.href.includes("about-us")) {
        orderButtonLink.href = "https://25vt4.weblium.site/#contact-form";
    }
}
console.log(orderButtonLink);
document.addEventListener("DOMContentLoaded", changeLink());


/*function redirectToHomePage() {
    if(window.location.href.contains("about-us")){
        const currentPageUrl = window.location.href;
        const partOfPageIndex = currentPageUrl.search("about-us");
        const partOfPageUrl = currentPageUrl.slice(partOfPageIndex);
        return currentPageUrl.replace(partOfPageUrl, "index.html");      
    }
    if(window.location.href.contains("sweets")){
        const currentPageUrl = window.location.href;
        const partOfPageIndex = currentPageUrl.search("sweets");
        const partOfPageUrl = currentPageUrl.slice(partOfPageIndex);
        currentPageUrl.replace(partOfPageUrl, "index.html");      
    }
}  
*/
//orderButton.addEventListener("click", redirectToHomePage);

  
  
  
  
  