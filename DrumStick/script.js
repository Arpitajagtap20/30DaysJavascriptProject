// Map key codes to sound file names
const soundMap = {
  65: 'sounds/crash.mp3',     // A
  83: 'sounds/kick-bass.mp3', // S
  68: 'sounds/snare.mp3',     // D
  70: 'sounds/tom-1.mp3',     // F
  71: 'sounds/tom-2.mp3',     // G
  72: 'sounds/tom-3.mp3',     // H
  74: 'sounds/tom-4.mp3',     // J
  75: 'sounds/hihat.mp3',     // K
  76: 'sounds/ride.mp3'       // L
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