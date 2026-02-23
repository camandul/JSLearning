const li = document.querySelector('li');
console.log(li);

/* Desde un hijo accediendo al padre y podría seguir buscando al padre del padre y así... */
const ul = li.parentElement;
console.log(ul);

console.log(ul.children);
console.log(ul.childElementCount);
console.log(ul.childNodes.length);

console.log(ul.firstElementChild); /* Me retorna mi primer li dentro de la ul */
console.log(ul.firstChild); /* Me retornaría el primer nodo, que sería un espacio en blanco */

console.log(ul.lastElementChild);
console.log(ul.lastChild);

/* Ambos a la final son objetos de JS */
console.log(typeof ul.firstElementChild);
console.log(typeof ul.firstChild);

/* Obtengo el elemento siguiente (hermano) referenciando el elemento con el que estoy llamando el método */
console.log(li.nextElementSibling);
console.log(li.nextSibling);

/* Lo mismo para obtener el elemento anterior (hermano) */
console.log(li.previousElementSibling); /* Este debería ser null ya que es el primero dentro de la ul */
console.log(li.previousSibling);