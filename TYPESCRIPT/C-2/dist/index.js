"use strict";
// const form = document.querySelector(".new-item-form") as HTMLFormElement
// const  type = document.querySelector("#type") as HTMLSelectElement
// const  toFrom = document.querySelector("#tofrom") as HTMLInputElement
// const  details = document.querySelector("#details") as HTMLInputElement
// const  amount = document.querySelector("#amount") as HTMLInputElement
// form.addEventListener("submit", (ev: Event) =>{
//     ev.preventDefault()
//     console.log(`${type.value} is form: ${toFrom.value} details: ${details.value} the amount is: ${amount.value}`);
//     alert(type.value)
// })
const inputs = document.querySelectorAll("input");
let caracter = "mario";
//objetos
let user = {
    firstName: "Shirly",
    lastName: "Paola",
    age: 80
};
console.log(user.firstName.length);
//funciones
const add = (num1, num2) => {
    let suma = 0;
    if (suma) {
        suma = num1 + num2;
    }
    return suma;
};
add(1, 4);
