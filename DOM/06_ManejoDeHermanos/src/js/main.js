const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer")
// const btnExample = createButtonInfo()

// // main.before(btnExample) // lo pone antes del elemento referenciado
// // main.after(btnExample); // lo ponde despues del elemento referenciado
// // main.prepend(btnExample) // dentro del elemento referenciado
// // main.append(btnExample) // podemos agregar más de un elemento 
// // main.replaceChildren(btnExample) // remplaza los hijos 
// // main.replaceWith(btnExample) // remplaza todo el contenedor 
// // main.remove() //elimina todo

// function createButtonInfo() {
//     const btn = document.createElement("button");
//     btn.classList.add("btn", "btn-info");
//     btn.textContent = "Point"

//     return btn

// }

// console.log(main);
// console.log(main.children); // traigo a los hijos
// const btnDark = document.querySelector(".btn-dark")
// console.log(btnDark.parentElement); //trae los contenedores padres

console.log(main.previousElementSibling); //trae el hermano mayor
console.log(main);
console.log(main.nextElementSibling); //trae el hermano menor
