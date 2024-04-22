
console.groupCollapsed("Ejercicio 22");
// Ejercicio 22
//Declara una variable indefinido y no le asignes ningún valor.
//Muestra en consola su tipo de dato utilizando el operador typeof().

let libroPreferido;
console.log(typeof(libroPreferido))

console.groupEnd();

console.groupCollapsed("Ejercicio 23");
// Ejercicio 23 Declara una variable decimal y asígnale un número decimal.
 //Muestra en consola su tipo de dato utilizando el operador typeof().

let decimal= 5.262782340;

console.log(typeof(decimal));

console.groupEnd();

console.groupCollapsed("Ejercicio 24");
// Ejercicio 24 Declara una variable negativo y asígnale un número negativo.
// Muestra en consola su tipo de dato utilizando el operador typeof().

let variableNegative=-2;
console.log(typeof(variableNegative))

console.groupEnd();

console.groupCollapsed("Ejercicio 25");
// Ejercicio 25 Utiliza el método indexOf() para encontrar la posición del
// carácter 'a' en la cadena "Casa" e imprime el resultado en consola.

let letraA= "casa";
console.log(letraA.indexOf("a"))
console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// Ejercicio 26 Comprueba si la cadena "Javascript" incluye el substring
//"Script" utilizando el método includes() e imprime el resultado en consola.

let cadena= "Javascript";
console.log(cadena.includes("script"))

console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// Ejercicio 27 Concatena las cadenas "Hola" y "Mundo" utilizando el método concat() y muestra el resultado en consola.

let simpleString1="Hola"
let simpleString2="Mundo"
console.log(simpleString1.concat(simpleString2));

console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// Ejercicio 28 Concatena las cadenas "Hola" y "Mundo" utilizando el operador + y muestra el resultado en consola.

console.log(simpleString1+simpleString2);
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// Ejercicio 29 Utiliza template strings para concatenar las cadenas "Hola" y "Mundo" e imprime el resultado en consola.

console.log(simpleString1+("  ")+simpleString2);

console.groupEnd();

console.groupCollapsed("Ejercicio 30");
// Ejercicio 30 Declara una variable cadenaConEspacios con el valor " Ejemplo con espacios ". Utiliza el método trimStart() y trimEnd() para eliminar
//los espacios en blanco al principio y al final, respectivamente, e imprime el resultado en consola.

let espacios= " Ejemplo con espacios ";

console.log(espacios.trimStart());
console.log(espacios.trimEnd());

console.groupEnd();

console.groupCollapsed("Ejercicio 31");
// Ejercicio 31 Reemplaza la palabra "azul" por "rojo" en la cadena "El cielo es azul"
//utilizando el método replace() e imprime el resultado en consola.

let remplazar="el cielo es azul"
console.log(remplazar.replace("azul","rojo"))

console.groupEnd();

console.groupCollapsed("Ejercicio 32");
// Ejercicio 32 Utiliza el método slice() para obtener los últimos cuatro caracteres de la cadena "Programación"
//e imprime el resultado en consola.

let ultimoCuatroCaracteres="Programacion"
console.log(ultimoCuatroCaracteres.slice(-4))

console.groupEnd();

console.groupCollapsed("Ejercicio 33");
// Ejercicio 33 Utiliza el método substring() para obtener una subcadena de la cadena "JavaScript" que comience en el índice 2 e imprime el resultado en consola.

let subcadema = "JavaScript"
console.log(subcadema.substring(2))

console.groupEnd();

console.groupCollapsed("Ejercicio 34");
// Ejercicio 34 Repite la cadena "Hola" tres veces utilizando el método repeat() e imprime el resultado en consola.

let saludo="hola"
console.log(saludo.repeat(3))

console.groupEnd();

console.groupCollapsed("Ejercicio 35");
// Ejercicio 35 Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.

    let cadenaLarga ="Esto es una oración de ejemplo"
    let array=cadenaLarga.split(" ")

    console.log(array)
console.groupEnd();

console.groupCollapsed("Ejercicio 36");
// Ejercicio 36 Convierte la cadena "Javascript" a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola.

let mayusculas="JavaScript"
console.log(mayusculas.toUpperCase());

console.groupEnd();

console.groupCollapsed("Ejercicio 37");
// Ejercicio 37 Convierte la cadena "EJEMPLO" a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola.

let minusculas="EJEMPLO"
console.log(minusculas.toLowerCase());
console.groupEnd();

console.groupCollapsed("Ejercicio 38");
// Ejercicio 38 Declara una variable numero y asígnale un número. Muestra en consola su tipo de dato utilizando el operador typeof().

let numero=5
console.log(typeof(numero));

console.groupEnd();

console.groupCollapsed("Ejercicio 39");
// Ejercicio 39 Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof().

let booleano=true
console.log(typeof(booleano));

console.groupEnd();

console.groupCollapsed("Ejercicio 40");
// Ejercicio 40 Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array.

let arreglo=["pera","manzana","uva","limón"]
console.log(arreglo.length);
console.groupEnd();

console.groupCollapsed("Ejercicio 41");
// Ejercicio 41 Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.

let objeto={
    marca:"Ford",
    linea:"Fiesta",
    modelo:2030
}
console.log(objeto.marca);
console.groupEnd();

console.groupCollapsed("Ejercicio 42");
// Ejercicio 42 Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().

let nulo=null
console.log(typeof(nulo));

console.groupEnd();

console.groupCollapsed("Ejercicio 43");
// Ejercicio 43 Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().

let indefinido= 
console.log(typeof(indefinido));
console.groupEnd();

console.groupCollapsed("Ejercicio 44");
// Ejercicio 44 Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof().

let decimal2= 2.6
console.log(typeof(decimal2));

console.groupEnd();

