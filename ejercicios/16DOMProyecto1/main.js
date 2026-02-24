const cajaColor = document.querySelector(".color");
const button = document.querySelector("button");
const valor = document.querySelector(".valor");
const fondo = document.getElementById("fondo");
const footer = document.querySelector("footer");

const codigos = Array.from(document.querySelectorAll("#fondo section p"));
const cajasColor = Array.from(document.querySelectorAll("#fondo section"));

cajasColor.forEach((cajaColor, index) => {
  cajaColor.addEventListener("click", () => {
    let copiable = codigos[index].innerText;
    navigator.clipboard.writeText(copiable);
    footer.classList.add("visible");

    setTimeout(() => {
      footer.classList.remove("visible");
    }, 6000);
  });
});

/* Contenedor que lleva en él las cajas a estilar (paleta) */
/* const cajas = Array.from(fondo.children); */ /* Existe un método de Array que me permite
tomar HTMLCollections y hacerlas un elemento Array para poder usar forEach, ya que HTMLCollection no se puede
iterar con forEach, los Nodos por su parte si se pueden iterar usando forEach */

/* const cajas = [...fondo.children]; */ /* Esta es otra forma aún más sencilla de convertir este elemento en
un Array.

Si bien ya aprendí estos métodos, voy a usar for of, que este si está soportado para HTMLCollections*/
const cajas = fondo.children;

function darColor() {
  /* Función que genera un color aleatorio */
  let valorFinal = "#";

  /* Teniendo en cuenta que son utilizados valores hexadecimales */
  let valores = "0123456789ABCDEF";

  for (let index = 0; index < 6; index++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    valorFinal += valores[indiceAleatorio];
  }

  return valorFinal;
}

cajaColor.addEventListener("click", () => {
  let copiable = valor.innerText;
  navigator.clipboard.writeText(copiable);
});

button.addEventListener("click", async () => {
  const color = darColor();
  valor.innerText = color;
  cajaColor.style.backgroundColor = color;
  const paleta = (await obtenerPaletaDeIA(color)) ?? [
    "#ffff00",
    "#0000ff",
    "#ff0000",
  ];
  let i = 0;
  for (const caja of cajas) {
    caja.style.backgroundColor = paleta[i];
    codigos[i].innerText = paleta[i];
    i++;
  }
});

/* Integración de IA para generar una paleta de colores con base en el color aleatorio generado */
async function obtenerPaletaDeIA(colorHex) {
  const API_KEY = 'APIKEY';
  const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`;
  const bodyPeticion = {
    contents: [
      {
        parts: [
          {
            text: `Actúa como un experto en teoría del color. He generado el color ${colorHex}. 
    Devuélveme exactamente 3 colores en formato HEX que combinen perfectamente con él. 
    Responde ÚNICAMENTE con un arreglo de strings en formato JSON válido, sin texto adicional, ni formato markdown. 
    Ejemplo estricto: ["#111111", "#222222", "#333333"]`,
          },
        ],
      },
    ],
  };

  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyPeticion),
    });

    const datos = await respuesta.json();

    if (datos.candidates && datos.candidates[0].content) {
      let textoIA = datos.candidates[0].content.parts[0].text;

      const jsonLimpio = textoIA
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      return JSON.parse(jsonLimpio);
    } else {
      console.error("Respuesta inesperada de la IA:", datos);
      return null;
    }
  } catch (error) {
    /* Caso de error por conexión */
    console.error("Error de conexión:", error);
    return null;
  }
}