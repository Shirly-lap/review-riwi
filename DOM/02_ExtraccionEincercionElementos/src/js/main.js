// const header = document.getElementsByTagName("header");
// console.log(header[0]);

const header = document.querySelector("header")
console.log(header);

//creamos un tag 
const title = document.createElement("h1")
//agregamos contenido a la tag
title.textContent="Galeria de perritos"

//agregar atributos
// title.setAttribute("id", "titulo-principal")

title.id="titulo-principal"

//crear una clases
title.classList.add("text-primary", "bg-black","text-center")
header.classList.add("bg-success")
header.classList.add("pb-5")

header.classList.remove("pb-5")
//incertamos una etiqueta dentro de un contenedor
header.appendChild(title)  

