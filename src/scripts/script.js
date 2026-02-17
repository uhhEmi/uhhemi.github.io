const ocImg = document.getElementById('oc-img');

// Function to blink
function blink() {
  ocImg.src = 'src/assets/characters/blink.png'; // close eyes
  setTimeout(() => {
    ocImg.src = 'src/assets/characters/default.png'; // open eyes
  }, 150); // blink duration (ms)
}

// Blink every few seconds, with a bit of randomness
setInterval(
  () => {
    blink();
  },
  3000 + Math.random() * 2000
); // interval: 3–5 seconds
