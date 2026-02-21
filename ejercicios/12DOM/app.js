const fondo = document.getElementsByTagName('html')[0];
fondo.style.backgroundColor = 'rgb(196, 217, 255)';

const body = document.getElementsByTagName('body')[0];
body.style.border = '5px solid blue'

const titulo = document.getElementsByClassName('titulo')[0];
titulo.style.color = 'blue';

const elementoUno = document.querySelectorAll('ul li')[0];
elementoUno.innerText = 'Desarrollo: Fullstack';

const elementoDos = document.querySelectorAll('ul li')[1];
elementoUno.innerText = 'Idiomas: Inglés y francés';

const elementoTres = document.querySelectorAll('ul li')[2];
elementoUno.innerText = 'Deportes: Gimnasio y Boxeo';

const referencia = document.querySelector('ul');
const elementoCinco = document.createElement('li');
elementoCinco.innerText = 'Ropa: Comprar y conocer';

referencia.append(elementoCinco);