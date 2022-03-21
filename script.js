const body = document.querySelector('body');
const titleEl = document.createElement('h1');
body.appendChild(titleEl);

const title = document.getElementsByTagName('h1')[0];
title.setAttribute('id', 'title');
title.innerText = 'Paleta de Cores';
