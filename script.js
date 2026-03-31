// ==========================================
// Telemetry Network Background (Hero Canvas)
// ==========================================
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Particle setup - slightly denser for the network effect
let particles = [];
const particleCount = Math.floor((canvas.width * canvas.height) / 12000); 

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        // Slightly faster, more erratic movement
        this.speedX = (Math.random() - 0.5) * 0.6; 
        this.speedY = (Math.random() - 0.5) * 0.6;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges smoothly
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }

    draw() {
        // TGR Red for the nodes
        ctx.fillStyle = 'rgba(235, 10, 30, 0.8)'; 
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

// Draw lines between close particles
function connectParticles() {
    let opacityValue = 1;
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            // If particles are within 100px, draw a line
            if (distance < 100) {
                opacityValue = 1 - (distance / 100);
                // Crisp white/grey lines for high tech contrast
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue * 0.15})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    
    // Draw nodes
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    
    // Draw connections
    connectParticles();
    
    requestAnimationFrame(animate);
}

// Start the loop
animate();
