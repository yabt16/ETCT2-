document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message sent successfully!");

});

/* SIMPLE SCROLL EFFECT */

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    header.classList.toggle(
        "sticky",
        window.scrollY > 50
        
        const verifyForm =
document.getElementById("verifyForm");

if(verifyForm){

verifyForm.addEventListener(
"submit",
function(e){

e.preventDefault();

alert(
"Certificate VERIFIED successfully!"
);

});

}
    );

});
const menuToggle =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector("nav");

menuToggle.addEventListener(
"click",
function(){

navMenu.classList.toggle("active");

});
