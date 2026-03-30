// script.js

// ================================
// 1. Hacker Text Effect
// ================================
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const h1 = document.querySelector("h1");

h1.onmouseover = event => {
    let iteration = 0;
    const targetText = event.target.dataset.value;
    
    const interval = setInterval(() => {
        event.target.innerText = targetText
            .split("")
            .map((letter, index) => {
                return index < iteration
                    ? targetText[index]
                    : letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");

        iteration++;
        if (iteration > targetText.length) clearInterval(interval);
    }, 50);
};

// ================================
// 2. Particle Background
// ================================
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let particles = [];
const particleCount = Math.floor(canvas.width * canvas.height / 10000);

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }
    draw() {
        ctx.fillStyle = 'rgba(0,255,65,0.7)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}
initParticles();

function animate() {
    // Draw semi-transparent black to create trail effect
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}
animate();
