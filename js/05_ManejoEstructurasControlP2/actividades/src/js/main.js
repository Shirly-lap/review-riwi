// if-else con uso de operadores de comparación, Operadores de asignación con 
// Resta y asignación, y algún método de string: 
// Enunciado del Problema: Crea un programa que tome dos números del usuario y 
// utilice una estructura de control if-else para determinar si el primer número es 
// mayor que el segundo. Si es así, resta el segundo número al primero y muestra el 
// resultado en consola. Además, utiliza algún método de string para indicar si el 
// resultado es un número positivo o negativo. 

// let num1 = Number(prompt("Ingresa el primer  número "))
// let num2 = Number(prompt("Ingresa el segundo  número "))

// if (num1 > num2) {
//     let resta = num1 - num2
//     console.log(resta);
//         if (resta > 0) {
//             console.log("El número: ", resta, " es POSITIVO",);
//         }
//         else {
//             console.log("El número: ", resta, " es NEGATIVO",);
//         }
// }

// else if (num1 === num2) {
//     console.log("Los números son iguales");
// }
// else {
//     console.log("El segundo número es mayor");
// }


// 2. switch case con uso de operadores de comparación, Método Math y 
// Number.parseFloat(text): 
// Enunciado del Problema: Desarrolla un programa que solicite al usuario 
// seleccionar una operación matemática (suma, resta, multiplicación o división) 
// mediante un menú. Utiliza un switch case para realizar la operación seleccionada 
// en dos números ingresados por el usuario. Además, utiliza el método Math para 
// redondear el resultado y conviértelo a un número decimal utilizando 
// Number.parseFloat(text) antes de mostrarlo en consola. 



// let option = prompt(`
//     Qué operación quieres hacer hoy?: 

//      [1]. SUMA
//      [2]. RESTA
//      [3]. MULTIPLICACIÓN
//      [4]. DIVISIÓN
//  `)

// let numOperacion1= Number(prompt("Ingresa el primer numero"))
// let numOperacion2= Number(prompt("Ingresa el segundo numero"))
// let resultado
// let resultadoFloant 


// // switch (option) {
// //     case "1":
// //         resultado = Math.round(numOperacion1 + numOperacion2) ;
// //         resultadoFloant = parseFloat(numOperacion1 + numOperacion2);
// //         console.log(resultado);
// //         console.log(resultadoFloant);
// //         break;

// //     default:
// //         break;
// //}
// switch (option) {
//     case "1":
//     //    let suma= numOperacion1 + numOperacion2
//     //    console.log(suma);
//     //    resultado = Math.round(suma)
//     //    console.log(resultado);
//     //    console.log(parseFloat(resultado));

//         resultado = Math.round(numOperacion1 + numOperacion2) ;
//         resultadoFloant = parseFloat(numOperacion1 + numOperacion2);
//         console.log(resultado);
//         console.log(resultadoFloant);
//         break;

//     case "2":
//         resultado = Math.round(numOperacion1 - numOperacion2) ;
//         resultadoFloant = parseFloat(numOperacion1 - numOperacion2);
//         console.log(resultado);
//         console.log(resultadoFloant);
//        break;
//     case "3":
//         resultado = Math.round(numOperacion1 * numOperacion2) ;
//         resultadoFloant = parseFloat(numOperacion1 * numOperacion2);
//         console.log(resultado);
//         console.log(resultadoFloant);
//          break;

//     case "4":
//         resultado = Math.round(numOperacion1 / numOperacion2) ;
//         resultadoFloant = parseFloat(numOperacion1 / numOperacion2);
//         console.log(resultado);
//         console.log(resultadoFloant);
//          break;
//     default:
//         alert("INGRESASTE UNA OPCIÓN NO VÁLIDA")
//         break;
// }

// 3. for con uso de operadores de comparación, Método Math y toString: 
// Enunciado del Problema: Implementa un programa que solicite al usuario un 
// número y utilice un bucle for para imprimir la tabla de multiplicar de ese número 
// del 1 al 10. Además, utiliza el método Math para calcular cada producto y 
// convierte el resultado a una cadena de texto utilizando toString antes de 
// mostrarlo en consola. 

// let numTablas =Number(prompt("Ingresa ell número de la tabla de multiplicación que deseas"));
// let tablas;
// let resultado = "";
// for (let multiplicacion = 1; multiplicacion <= 10; multiplicacion++) {
//    tablas= numTablas* multiplicacion
//    resultado+=tablas.toString()+ " "
//    console.log(resultado); 
// }

// 4. if-else con uso de operadores lógicos y Método Math: 
// Enunciado del Problema: Crea un programa que pida al usuario su edad y la 
// cantidad de horas de sueño diarias. Utiliza una estructura de control if-else con 
// operadores lógicos para determinar si la persona es mayor de edad (más de 18 
// años) y si duerme lo suficiente (más de 7 horas). Utiliza el Método Math para 
// redondear la cantidad de horas de sueño y muestra un mensaje en consola 
// indicando si la persona tiene un buen equilibrio entre edad y descanso. 

// let edad = Number(prompt("Please enter your age"));
// let horasSuenio = Number.parseFloat(prompt("Plase enter your hours of sleep daily"));
// if (edad > 18 & horasSuenio > 7) {
//    Math.round(horasSuenio)
//    console.log("You have a good balance between your age and rest");
//    console.log();
// } else {
//    console.log("You do not have a good balance between your age and rest");  
// }

// 5. switch case con uso de operadores lógicos, substring y slice: 
// Enunciado del Problema: Desarrolla un programa que solicite al usuario un día de 
// la semana (por ejemplo, "lunes"). Utiliza un switch case con operadores lógicos 
// para determinar si el día ingresado es un día laboral (de lunes a viernes) o un fin 
// de semana (sábado o domingo). Luego, utiliza los métodos substring y slice de 
// string para mostrar un mensaje en consola indicando si es un día hábil o de 
// descanso. 

// let diaSemana = String(prompt("Please enter weekday "))
// switch (diaSemana) {
//    case "lunes" :
//     console.log(diaSemana.slice(0,5), "working day");
//     break

//    case "martes":
//     console.log(diaSemana.slice(0,6), "working day");
//     break

//    case "miercoles":
//     console.log(diaSemana.slice(0,9), "working day");
//     break

//    case "jueves":
//     console.log(diaSemana.slice(0,6), "working day");
//     break

//    case "viernes":
//       console.log(diaSemana.slice(0,7), "working day");
//    break

//    case "sabado":
//     console.log(diaSemana.slice(0,6), "non-working day ");
//    case "domingo":
//       console.log(diaSemana.slice(0,7), "non-working day ");
//    default:
//       break;
// }


// 6. for con uso de operadores lógicos y Método Math: 
// Actividades Modulo 3 
 
// Elaborado: RIWI 16 de noviembre de 2023 
// Enunciado del Problema: Implementa un programa que solicite al usuario ingresar 
// un número. Utiliza un bucle for para encontrar la suma de todos los números 
// impares hasta el número ingresado. Además, utiliza operadores lógicos para 
// identificar números impares y el Método Math para realizar cálculos. Muestra el 
// resultado en consola. 

// let numeroIngresado = Number(prompt("Please enter a number"));
// let suma = 0;
//     for (let numero = 0; numero <= numeroIngresado; numero++) {
//         if (numero % 2 !== 0) {
//             suma+= numero;
//         }
//     }
// console.log(`La suma de los números impares hasta ${numeroIngresado} es: ${suma}`);


// 7. if-else con uso de operadores de asignación, Método Math y 
// Number.parseInt: 
// Enunciado del Problema: Crea un programa que solicite al usuario ingresar un 
// número decimal. Utiliza una estructura if-else con operadores de asignación para 
// redondear el número hacia abajo utilizando el método Math.floor() y luego 
// convierte el resultado a un número entero utilizando Number.parseInt. Muestra 
// el número original y el número redondeado en consola. 

// let numDecimal = parseFloat(prompt("Plase enter a decimal number"));
// let numeroEntero

// // let numeroEntero = Math.floor(numDecimal);
// // numeroEntero = parseInt(numeroEntero)

// // console.log(`Número original: ${numDecimal}`);
// // console.log(`Número redondeado hacia abajo: ${numeroEntero}`);

// if (numDecimal >= 0) {
//     numeroEntero= Math.floor(numDecimal);
// } else {
//     numeroEntero = Math.ceil(numDecimal);    
// }

// numeroEntero = parseInt(numDecimal);
// console.log(`Número original: ${numDecimal}`);
// console.log(`Número redondeado hacia abajo: ${numeroEntero}`);

// 8. switch case con uso de operadores de asignación, replacing y 
// Number.parseInt: 
// Enunciado del Problema: Desarrolla un programa que pida al usuario una frase y 
// utilice un switch case para realizar diferentes operaciones en la frase. 
// Dependiendo de la opción seleccionada (por ejemplo, 1 para convertir a 
// mayúsculas, 2 para reemplazar espacios con guiones, etc.), realiza la operación 
// correspondiente y muestra el resultado en consola. Utiliza Number.parseInt para 
// manejar las opciones ingresadas por el usuario. 

// let option = parseInt(prompt(`
//     Qué operación quieres hacer hoy?: 

//      [1]. Convertir a mayúscula
//      [2]. Remplazar espacios con guiones

//  `));

// let frase = prompt("Please enter a phrase: ");

//  switch (option) {
//     case 1:
       
//         console.log(frase.toUpperCase());
//         break;
//     case 2:
//         console.log(frase.replace(/ /g, "--" ));
//         break
//     default:
//         break;
//  }

// 9. for loop con uso de operadores de asignación ToUpperCase - ToLowerCase: 
// Enunciado del Problema: Implementa un programa que solicite al usuario ingresar 
// una palabra. Utiliza un bucle for para alternar entre caracteres en mayúsculas y 
// minúsculas en la palabra. Utiliza operadores de asignación como toUpperCase() y 
// toLowerCase() para cambiar el caso de cada caracter en cada iteración del bucle. 
// Muestra el resultado en consola. 

// let palabra = prompt("please enter a phrase");
// let palabraAlterada = " "
// for (let i = 0; i < palabra.length; i++) {
//     if (i % 2 === 0) {
//         palabraAlterada += palabra[i].toUpperCase();
//       } else {
//         palabraAlterada += palabra[i].toLowerCase();
//       }
// }
// console.log("Palabra alterada:", palabraAlterada);
