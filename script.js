// =====================================
// SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });
},
{
    threshold: 0.15
});

revealElements.forEach(el => {
    observer.observe(el);
});


// =====================================
// NAVBAR SHADOW ON SCROLL
// =====================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";

    } else {

        header.style.boxShadow = "none";

    }

});


// =====================================
// SMOOTH NAVIGATION HIGHLIGHT
// =====================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =====================================
// PARALLAX HERO EFFECT
// =====================================

const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

    const scrollValue = window.scrollY;

    if (heroBg) {

        heroBg.style.transform = `translateY(${scrollValue * 0.15}px)`;

    }

});


// =====================================
// FADE HERO TEXT ON SCROLL
// =====================================

const heroContent = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

    const scrollValue = window.scrollY;

    if (heroContent) {

        const opacity = 1 - scrollValue / 600;

        heroContent.style.opacity = opacity;

    }

});
