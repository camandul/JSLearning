const botones = document.querySelectorAll(".botones");

console.log(botones);

botones.forEach((boton) => {
  /* Recorro los elementos button que tengan la coincidencia por '.botones' */
  boton.addEventListener("click", () => {
    /* El trigger (detonante), el event listener y desde luego... */
    boton.innerText = "Aplicado";
    boton.classList.add("boton-presionado");
    boton.setAttribute("disabled", "true");

    /* El event handler, que es la función completa que se ejecutará una vez
    ocurra el evento */

    /* De igual forma es posible recorrer el NodeList (tipo de arreglo para eventos) con un for of de la
    siguiente forma */
  });
});


const titulos = document.getElementsByTagName("h2");
for (const titulo of titulos) {
  titulo.addEventListener('click', ()=>{
    titulo.innerText = 'Texto modificado';
    titulo.style.backgroundColor = 'orange';
  })
}


/* Tambien si deseo aplicar cambios a un evento individual es posible realizarlo de esta manera */
const primerParrafo = document.querySelector('p'); /* Tomando primer elemento p del HTML */
primerParrafo.addEventListener('click', ()=>{
    primerParrafo.innerText = 'El parrafo fue clickeado';
})