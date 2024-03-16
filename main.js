//to-top-btn
let toTop = document.querySelector("#to-top");

window.onscroll = () => {
    if(window.scrollY >= 600){
        toTop.style.cssText = "display:flex;"
    }else{
        toTop.style.cssText = "display:none;"
    }
};
toTop.onclick = function () {
    window.scrollTo({
        top:0,
        left:0,
        behavior :"smooth",
    });
}

//menu on phone
let bars = document.querySelector(".bars");
let navBar = document.querySelector("nav");

bars.addEventListener("click" , function() {
    navBar.classList.toggle("active");
});