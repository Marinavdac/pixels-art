const body = document.querySelector('body');
const titleEl = document.createElement('h1');
body.appendChild(titleEl);

const title = document.getElementsByTagName('h1')[0];
title.setAttribute('id', 'title');
title.innerText = 'Paleta de Cores';

const section = document.createElement('section');
body.appendChild(section);
section.setAttribute('id', 'color-palette');

const colors = ['black', 'blue', 'red', 'green'];
for (let i = 0; i < colors.length; i += 1) {
  const colorItem = colors[i];

  const colorSelector = document.createElement('div');
  colorSelector.classList = (`color ${colorItem}`);
  colorSelector.style.backgroundColor = (`${colorItem}`);
  section.appendChild(colorSelector);
}
