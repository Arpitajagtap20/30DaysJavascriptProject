// Map key codes to sound file names
const soundMap = {
  65: 'sounds/Cello.mp3',     // A
  83: 'sounds/Drum.mp3', // S
  68: 'sounds/Guitar.mp3',     // D
  70: 'sounds/Organ.mp3',     // F
  71: 'sounds/Piano.mp3',     // G
  72: 'sounds/Sitar.mp3',     // H
  74: 'sounds/Tabla.mp3',     // J
  75: 'sounds/Trumpet.mp3',     // K
  76: 'sounds/Drum.mp3'       // L
};

// Play sound for a given key code
function playSound(keyCode) {
  const soundFile = soundMap[keyCode];
  if (soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
  }
}

// Handle button clicks
document.querySelectorAll('.drum').forEach(button => {
  button.addEventListener('click', () => {
    const keyCode = parseInt(button.getAttribute('data-key'));
    playSound(keyCode);
  });
});

// Handle key presses
document.addEventListener('keydown', event => {
  playSound(event.keyCode);
});

// Play all sounds in sequence
document.getElementById('playAll').addEventListener('click', () => {
  let delay = 0;
  Object.keys(soundMap).forEach(key => {
    setTimeout(() => playSound(parseInt(key)), delay);
    delay += 500; // 0.5 second between each sound
  });
});