const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

Object.assign(canvas.style, {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: '-1',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
});

const ctx = canvas.getContext('2d');
let width, height;
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  width = canvas.width;
  height = canvas.height;
}
resize();
window.addEventListener('resize', resize);

// Buat partikel
function createParticles(count) {
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2
    });
  }
}
createParticles(100);

function animate() {
  ctx.clearRect(0, 0, width, height);

  // --- Partikel putih ---
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 10;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > width) p.dx *= -1;
    if (p.y < 0 || p.y > height) p.dy *= -1;
  });

  requestAnimationFrame(animate);
}

animate();
