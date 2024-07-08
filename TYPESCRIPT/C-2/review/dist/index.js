"use strict";
// const form = document.querySelector(".new-item-form") as HTMLFormElement
// const number = document.querySelector("#number") as HTMLInputElement
// form.addEventListener("submit", (ev: Event) => {
//     ev.preventDefault();
//     let valor: number = Number(number.value)
//     if (valor % 2 == 0) {
//         alert(`El número ${valor} es PAR`)
//     } else {
//         alert(`El número ${valor} es IMPAR`)
//     }
//     form.reset()
// })
// const formAge = document.querySelector(".form-age") as HTMLFormElement
// const inputAge = document.querySelector("#age") as HTMLInputElement
// formAge.addEventListener("submit", (e:Event) =>{
//     e.preventDefault()
//     let age : number = Number(inputAge.value)
//     if (age >= 18 ) {
//         alert(`En hora buena, eres mayor de edad`)
//     } else {
//         alert(`Ups! Aun eres menor de edad`)
//     }
//     formAge.reset()
// })
// const formDay = document.querySelector(".form-day") as HTMLFormElement
// const inputDay = document.querySelector("#day") as HTMLInputElement
// formDay.addEventListener("submit", (e:Event) =>{
//     e.preventDefault()
//     let weekDay:number=Number(inputDay.value)
//     switch (weekDay) {
//         case 1:
//             alert(`Seleccionaste el día ${weekDay} ¡Lunes!`)
//             break;
//         case 2:
//             alert(`Seleccionaste el día ${weekDay} ¡Martes!`)  
//             break;
//         case 3:
//             alert(`Seleccionaste el día ${weekDay} ¡Miércoles!`)   
//             break;
//         case 4:
//             alert(`Seleccionaste el día ${weekDay} ¡Jueves!`) 
//             break;
//         case 5:
//             alert(`Seleccionaste el día ${weekDay} ¡Viernes!`) 
//             break;
//         case 6:
//             alert(`Seleccionaste el día ${weekDay} ¡Sábado!`) 
//             break;
//         case 6:
//             alert(`Seleccionaste el día ${weekDay} ¡Domingo!`) 
//             break;
//         case 7:
//             alert(`Seleccionaste el día ${weekDay} ¡Domingo!`) 
//         default:
//             break;
//     }
// })
// const formNacionalidad = document.querySelector(".form-nacionality") as HTMLFormElement
// const inputNacionalidad = document.querySelector("#nacionality") as HTMLInputElement
// formNacionalidad.addEventListener("submit", (e:Event)=> {
//     e.preventDefault()
//     let nacionalidadPerson:string= String(inputNacionalidad.value)
//     nacionalidadPerson.toLowerCase() == "colombiana" || nacionalidadPerson.toLowerCase()== "colombia"  ? alert("Eres nativo"): alert("No eres nativo")
//     formNacionalidad.reset()
// })
// const fromNumbers = document.querySelector(".form-numbers") as HTMLFormElement
// const inputNumber1 = document.querySelector("#num1") as HTMLInputElement
// const inputNumber2 = document.querySelector("#num2") as HTMLInputElement
// const inputNumber3 = document.querySelector("#num3") as HTMLInputElement
// fromNumbers.addEventListener("submit", (e: Event) => {
//     let numeroUno: number = Number(inputNumber1.value)
//     let numeroDos: number = Number(inputNumber2.value)
//     let numeroTres: number = Number(inputNumber3.value)
//     if (numeroUno > numeroDos && numeroUno > numeroTres) {
//         alert(`el primer número ${numeroUno} es mayor`)
//     } else if (numeroDos > numeroUno && numeroDos > numeroTres) {
//         alert(`el segundo número ${numeroDos} es mayor`)
//     } else if (numeroTres > numeroUno && numeroTres > numeroDos) {
//         alert(`el tercer número ${numeroTres} es mayor`)
//     }
// })
// const formPass = document.querySelector(".form-pass") as HTMLFormElement
// const inputPass = document.querySelector("#pass") as HTMLInputElement
// formPass.addEventListener("submit", (e:Event) =>{
//     let password = String(inputPass.value)
//     if (password) {
//         alert("Contraseña válida")
//     } else {
//         alert("Contraseña no válida")
//     }
//     formPass.reset()
// })
const formMonths = document.querySelector(".form-months");
const inputMonths = document.querySelector("#months");
formMonths.addEventListener("submit", (e) => {
    e.preventDefault();
    let monthsNumber = Number(inputMonths.value);
    switch (monthsNumber) {
        case 1:
            alert(`Seleccionaste el día ${monthsNumber} ¡Enero!`);
            break;
        case 2:
            alert(`Seleccionaste el día ${monthsNumber} ¡Febrero!`);
            break;
        case 3:
            alert(`Seleccionaste el día ${monthsNumber} ¡Marzo!`);
            break;
        case 4:
            alert(`Seleccionaste el día ${monthsNumber} ¡Abril!`);
            break;
        case 5:
            alert(`Seleccionaste el día ${monthsNumber} ¡Mayo!`);
            break;
        case 6:
            alert(`Seleccionaste el día ${monthsNumber} ¡Junio!`);
            break;
        case 7:
            alert(`Seleccionaste el día ${monthsNumber} ¡Julio!`);
            break;
        case 7:
            alert(`Seleccionaste el día ${monthsNumber} ¡Agosto!`);
            break;
        case 8:
            alert(`Seleccionaste el día ${monthsNumber} ¡Septiembre!`);
            break;
        case 9:
            alert(`Seleccionaste el día ${monthsNumber} ¡Octubre!`);
            break;
        case 10:
            alert(`Seleccionaste el día ${monthsNumber} ¡Octubre!`);
            break;
        case 11:
            alert(`Seleccionaste el día ${monthsNumber} ¡Noviembre!`);
            break;
        case 11:
            alert(`Seleccionaste el día ${monthsNumber} ¡Diciembre!`);
        default:
            break;
    }
});
