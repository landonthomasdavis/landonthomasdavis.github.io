// Simple Scroll Reveal Effect
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.project-card');
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom) {
            card.style.opacity = "1";
            card.style.transform = "translateX(0)";
        }
    });
});

// Logging a cheeky message for other engineers inspecting your site
console.log("%c Interested in the source code? Check my GitHub! ", "background: #222; color: #38bdf8; font-size: 15px;");
