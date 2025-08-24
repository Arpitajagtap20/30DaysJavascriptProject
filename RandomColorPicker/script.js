function generateColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  document.body.style.backgroundColor = randomColor;
  document.getElementById('colorBox').textContent = randomColor;
  document.getElementById('colorBox').style.backgroundColor = randomColor;
}