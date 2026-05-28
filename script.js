document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message sent successfully!");

});

/* HEADER SCROLL EFFECT */

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(header){

        header.classList.toggle(
            "sticky",
            window.scrollY > 50
        );

    }

});

/* CERTIFICATE VERIFICATION */

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

/* MOBILE MENU */

const menuToggle =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector("nav");

if(menuToggle){

    menuToggle.addEventListener(
    "click",
    function(){

        navMenu.classList.toggle("active");

    });

}

/* DARK MODE */

const darkBtn =
document.getElementById("darkMode");

if(darkBtn){

    darkBtn.addEventListener(
    "click",
    function(){

        document.body.classList.toggle("dark");

    });

}