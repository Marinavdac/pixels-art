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
  colorSelector.classList = (`color ${colorItem}`);
  colorSelector.style.backgroundColor = (`${colorItem}`);
  section.appendChild(colorSelector);
}
const middleSection = document.createElement('section');
middleSection.setAttribute('id', 'buttons');
body.appendChild(middleSection);

const button = document.createElement('button');
button.setAttribute('id', 'clear-board');
middleSection.appendChild(button);
button.innerText = 'Limpar';
// button.addEventListener('click' function limpar(event) {
//   // set all to white
//   // set selected to black
// })

const board = document.createElement('section');
body.appendChild(board);
board.setAttribute('id', 'pixel-board');

const pixelNumbers = [1, 2, 3, 4, 5];
for (let i = 0; i < pixelNumbers.length; i += 1) {
  const pixWidth = document.createElement('div');
  pixWidth.classList = ('pixel width');
  board.appendChild(pixWidth);
  for (let j = 1; j < pixelNumbers.length; j += 1) {
    const pixHeight = document.createElement('div');
    pixHeight.classList = ('pixel height');
    pixHeight.style.backgroundColor = ('white');
    board.appendChild(pixHeight);
  }
}
