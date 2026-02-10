const overlay1 = document.getElementById('overlay1');
const overlay2 = document.getElementById('overlay2');

let start = performance.now();

function animate(time) {
  const t = (time - start) / 1000; // seconds

  // Overlay 1: gentle up + rotate
  const y1 = Math.sin(t * 1.2) * 8; // bobbing (px)
  const r1 = Math.sin(t * 0.8) * 2; // rotation (deg)

  // Overlay 2: opposite direction, slower
  const y2 = Math.sin(t * 1.1 + Math.PI) * 8;
  const r2 = Math.sin(t * 0.6 + Math.PI) * 2;

  overlay1.style.transform = `translateY(${y1}px) rotate(${r1}deg)`;
  overlay2.style.transform = `translateY(${y2}px) rotate(${r2}deg)`;

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
