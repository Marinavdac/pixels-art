const body = document.querySelector('body');
const titleEl = document.createElement('h1');
body.appendChild(titleEl);

const title = document.getElementsByTagName('h1')[0];
title.setAttribute('id', 'title');
title.innerText = 'Paleta de Cores';

const section = document.createElement('section');
body.appendChild(section);
section.setAttribute('id', 'color-palette');

const colors = ['black', 'midnightblue', 'firebrick', 'darkred'];
for (let i = 0; i < colors.length; i += 1) {
  const colorItem = colors[i];

  const colorSelector = document.createElement('div');
  colorSelector.classList = `color ${colorItem}`;
  colorSelector.style.backgroundColor = `${colorItem}`;
  section.appendChild(colorSelector);
}

const black = document.querySelectorAll('.color')[0];
black.classList += " " + "selected";

const secondColor = document.querySelectorAll('.color')[1];
const thirdColor = document.querySelectorAll('.color')[2];
const fourthColor = document.querySelectorAll('.color')[3];

function handleSelected(event) {
  const selectedItem = document.querySelector('.selected');
  selectedItem.classList.remove('selected');
  event.target.classList.add('selected');
  console.log(event.target);
}

black.addEventListener('click', handleSelected);
secondColor.addEventListener('click', handleSelected);
thirdColor.addEventListener('click', handleSelected);
fourthColor.addEventListener('click', handleSelected);

console.log(handleSelected);

const middleSection = document.createElement('section');
middleSection.setAttribute('id', 'buttons');
body.appendChild(middleSection);

const button = document.createElement('button');
button.setAttribute('id', 'clear-board');
middleSection.appendChild(button);
button.innerText = 'Limpar';
button.addEventListener('click', function handleClean() {
  const pixelWhite = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelWhite.length; i += 1) {
    pixelWhite[i].style.backgroundColor = 'white';
    console.log(pixelWhite[i].classList.value)
  }
});

const board = document.createElement('section');
body.appendChild(board);
board.setAttribute('id', 'pixel-board');
let input = '5';
const pixelNumbers = Math.pow(input, 2);

for (let i = 0; i < pixelNumbers; i += 1) {
  const pixelCreation = document.createElement('div');
  board.style.width = `${input * 40}px`;
  pixelCreation.classList = 'pixel';
  pixelCreation.style.backgroundColor = 'white';
  board.appendChild(pixelCreation);
}
