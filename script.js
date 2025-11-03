const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const numFlakes = 120;
const flakes = [];

for (let i = 0; i < numFlakes; i++) {
  flakes.push({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 3 + 1,
    d: Math.random() + 1,
  });
}

function drawFlakes() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.beginPath();
  for (let i = 0; i < numFlakes; i++) {
    const f = flakes[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveFlakes();
}

let angle = 0;

function moveFlakes() {
  angle += 0.01;
  for (let i = 0; i < numFlakes; i++) {
    const f = flakes[i];
    f.y += Math.pow(f.d, 2) + 1;
    f.x += Math.sin(angle) * 1;

    if (f.y > height) {
      flakes[i] = { x: Math.random() * width, y: 0, r: f.r, d: f.d };
    }
  }
}

setInterval(drawFlakes, 25);

