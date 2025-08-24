function generateColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  
  // Change background gradient
  document.body.style.background = `linear-gradient(135deg, ${randomColor}, #ffffff)`;

  // Update color box
  const colorBox = document.getElementById('colorBox');
  colorBox.textContent = randomColor;
  colorBox.style.backgroundColor = randomColor;
  colorBox.style.color = getContrastColor(randomColor);
}

// Helper to ensure text is readable
function getContrastColor(hex) {
  const r = parseInt(hex.substr(1,2),16);
  const g = parseInt(hex.substr(3,2),16);
  const b = parseInt(hex.substr(5,2),16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125 ? '#000' : '#fff';
}