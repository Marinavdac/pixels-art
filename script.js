const colorSection = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const buttonClear = document.getElementById('clear-board');
const boardInput = document.getElementById('board-size');
const buttonNewBoard = document.getElementById('');

function generateRandom(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

function pickColors() {
  const h = generateRandom(360);
  const s = generateRandom(100);
  const l = generateRandom(100);
  return `hsl(${h}deg, ${s}%, ${l}%)`;
}

const color2 = pickColors();
const color3 = pickColors();
const color4 = pickColors();

const colors = ['black', color2, color3, color4];

for (let i = 0; i < colors.length; i += 1) {
  const colorItem = colors[i];

  const colorSelector = document.createElement('div');
  colorSelector.classList = `color ${colorItem}`;
  colorSelector.style.backgroundColor = `${colorItem}`;
  colorSection.appendChild(colorSelector);
}
const black = document.querySelectorAll('.color')[0];
black.classList += ' ' + 'selected';
const secondColor = document.querySelectorAll('.color')[1];
const thirdColor = document.querySelectorAll('.color')[2];
const fourthColor = document.querySelectorAll('.color')[3];

function handleSelected(event) {
  const selectedItem = document.querySelector('.selected');
  selectedItem.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', handleSelected);
secondColor.addEventListener('click', handleSelected);
thirdColor.addEventListener('click', handleSelected);
fourthColor.addEventListener('click', handleSelected);

const input = '15';
const pixelNumbers = (input ** 2);

for (let i = 0; i < pixelNumbers; i += 1) {
  const pixelCreation = document.createElement('div');
  pixelBoard.style.width = `${input * 40}px`;
  pixelCreation.classList = 'pixel';
  pixelCreation.style.backgroundColor = 'white';
  pixelBoard.appendChild(pixelCreation);
}

function paintStroke(e) {
  const model = document.querySelector('.selected');
  e.target.style.backgroundColor = model.style.backgroundColor;
}

const paintingArea = document.querySelectorAll('.pixel');
for (let i = 0; i < paintingArea.length; i += 1) {
  const squares = paintingArea[i];
  squares.addEventListener('click', paintStroke);
}

buttonClear.addEventListener('click', () => {
  const pixelWhite = document.getElementsByClassName('pixel');
  console.log(pixelWhite[0]);
  for (let i = 0; i < pixelWhite.length; i += 1) {
    pixelWhite[i].style.backgroundColor = 'white';
    console.log(pixelWhite[i].classList.value);
  }
});
