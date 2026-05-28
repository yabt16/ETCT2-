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
    );

});