// Ejercicios con números en JavaScript 

console.groupCollapsed("Ejercicio 1");
// Ejercicio 1
// 1. Sumar dos números. 
console.log(1+2);

console.groupEnd();

console.groupCollapsed("Ejercicio 2");
// Ejercicio 2
// 2. Restar dos números. 
console.log(1-2);

console.groupEnd();

console.groupCollapsed("Ejercicio 3");
// Ejercicio 3  Multiplicar dos números. 
console.log(2*3);

console.groupEnd();

console.groupCollapsed("Ejercicio 4");
// Ejercicio 4 Dividir dos números. 
console.log(5/2);
console.groupEnd();

console.groupCollapsed("Ejercicio 5");
// Ejercicio 5 Calcular el módulo (resto) de una división.
 console.log(2%3);

console.groupEnd();

console.groupCollapsed("Ejercicio 6");
// Ejercicio 6 Generar un número aleatorio entre 1 y 10. 

console.log(Math.round(Math.random()*10));

console.groupEnd();

console.groupCollapsed("Ejercicio 7");
// Ejercicio 7 Elevar un número a la potencia de otro. 
console.log(Math.pow(2,5));

console.groupEnd();

console.groupCollapsed("Ejercicio 8");
// Ejercicio 8
// 8. Calcular la raíz cuadrada de un número. 
console.log(Math.sqrt(16));

console.groupEnd();

console.groupCollapsed("Ejercicio 9");
// Ejercicio 9

// 9. Convertir grados Celsius a Fahrenheit. 
let celsius = 0
let fahrenheit = 32
console.log((celsius* 9/5)+ fahrenheit);

console.groupEnd();

console.groupCollapsed("Ejercicio 10");
// Ejercicio 10

// 10. Calcular el área de un círculo. 
let radio = 6
console.log("El area del circulo es:",Math.round(Math.PI * Math.pow(radio, 2)));
console.groupEnd();

console.groupCollapsed("Ejercicio 11");
// Ejercicio 11
// 11. Calcular el perímetro de un cuadrado. 
let lado1= 2
let lado2= 2
let lado3= 2
let lado4= 2

const perimetro = lado1+ lado2 + lado3+ lado4
console.log("El perímetro es:",perimetro);


console.groupEnd();

console.groupCollapsed("Ejercicio 12");
// Ejercicio 12
// 12. Calcular el volumen de una esfera. 
radio = 14
let volumen = Math.round((4/3)* Math.PI * Math.pow(radio, 3)) 
console.log("El volumen es:", volumen)

console.groupEnd();

console.groupCollapsed("Ejercicio 13");
// Ejercicio 13
// 13. Calcular el área de un triángulo. 
console.log((3*4)/2);
console.groupEnd();

console.groupCollapsed("Ejercicio 14");
// Ejercicio 14
// 14. Generar la tabla de multiplicar del número 5. 
let factorA = 5
let inicio = 1
let fin =10
let resul 
for (let factorB  = inicio; factorB  <= fin; factorB++) {
   resul= factorA * factorB
    console.log(`${factorA} x ${factorB} = ${resul}`);
    
}
console.groupEnd();

console.groupCollapsed("Ejercicio 15");
// Ejercicio 15
// 15. Encontrar el número mayor entre 3, 7 y 2. 
console.log(Math.max(3,7,2));

console.groupEnd();

console.groupCollapsed("Ejercicio 16");
// Ejercicio 16
// 16. Encontrar el número menor entre 10, 20 y 5. 
console.log(Math.min(10,20,5));

console.groupEnd();

console.groupCollapsed("Ejercicio 17");
// Ejercicio 17
// 17. Calcular el promedio de 4, 6 y 8. 
console.log((4+6+8)/3);
console.groupEnd();

console.groupCollapsed("Ejercicio 18");
// Ejercicio 18
// 18. Calcular la factorial de 5. 
// El factorial de un número es el número multiplicado por el factorial del número anterior
let numero = 5; 
let resultado = 1;

for (let i = 1; i <= numero; i++) {
  resultado *= i; // (*=) operador de asignación de multiplicación. Combina la multiplicación y la asignación.
}
console.log(`El factorial de 5 (${numero}!) es: ${resultado}`);

console.groupEnd();

console.groupCollapsed("Ejercicio 19");
// Ejercicio 19
// 19. Redondear el número 3.6. 
let numeroRedondear = 3.9
console.log(Math.round(numeroRedondear));
console.groupEnd();

console.groupCollapsed("Ejercicio 20");
// Ejercicio 20
// 20. Calcular el doble de 9. 
let doble = 9
console.log( doble * 2);
console.groupEnd();

console.groupCollapsed("Ejercicio 21");
// Ejercicio 21
// 21. Calcular el triple de 4. 
let triple = 4
console.log( triple * 3);
console.groupEnd();

console.groupCollapsed("Ejercicio 22");
// Ejercicio 22
// 22. Calcular el cuadrado de 6. 
console.log(Math.pow(6,2));
console.groupEnd();

console.groupCollapsed("Ejercicio 23");
// Ejercicio 23
// 23. Calcular el cubo de 3. 
console.log(Math.pow(3,3));

console.groupEnd();

console.groupCollapsed("Ejercicio 24");
// Ejercicio 24
// 24. Calcular la suma de los primeros 10 números naturales. 
let suma = 0
for (let index = 1; index <= 10; index++) {
    suma+=index
}
console.log(`La suma de los primeros 10 números naturales es: ${suma}`); // Resultado: La suma de los primeros 10 números naturales es: 55

console.groupEnd();

console.groupCollapsed("Ejercicio 25");
// Ejercicio 25
// 25. Calcular la resta entre 50 y 25. 
console.log("El resultado de 50 - 25",50-25);
console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// Ejercicio 26
// 26. Multiplicar 7 por 9. 
console.log("7 x 9 = ",7*9);
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// Ejercicio 27
// 27. Dividir 144 por 12. 
console.log( "144/12 =",144/12);
console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// Ejercicio 28
// 28. Obtener el módulo de 17 dividido por 4. 
console.log("17 % 4 =",17 % 4);
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// Ejercicio 29
// 29. Generar un número aleatorio entre 20 y 30. numeroEscalado = numeroAleatorio0a1 * (rangoMaximo - rangoMinimo) + rangoMinimo

console.log(Math.round(Math.random() * (30-20) + 20 ));
console.groupEnd();

console.groupCollapsed("Ejercicio 30");
// Ejercicio 30
// 30. Elevar 2 a la potencia de 8. 
console.log(Math.pow(2,8));
console.groupEnd();

console.groupCollapsed("Ejercicio 31");
// Ejercicio 31
// 31. Calcular la raíz cuadrada de 144. 
console.log(Math.sqrt(144));

console.groupEnd();

console.groupCollapsed("Ejercicio 32");
// Ejercicio 32
// 32. Convertir 100 grados Celsius a Fahrenheit. (0 °C × 9/5) + 32 = 32 °F
console.log((100 * 9/5) + 32, "ºF");

console.groupEnd();

console.groupCollapsed("Ejercicio 33");
// Ejercicio 33
// 33. Calcular el área de un rectángulo de base 5 y altura 10. 
console.log("El area del rectangulo es = ", 5*10);
console.groupEnd();

console.groupCollapsed("Ejercicio 34");
// Ejercicio 34
// 34. Calcular el perímetro de un círculo con radio 6. 
console.log(Math.round(Math.PI * Math.pow(6,2)));
console.groupEnd();

console.groupCollapsed("Ejercicio 35");
// Ejercicio 35
// 35. Calcular el volumen de un cubo con lado 4. 
console.log("El volumen del cubo es: ",Math.pow(4,3));
console.groupEnd();

console.groupCollapsed("Ejercicio 36");
// Ejercicio 36
// 36. Calcular el área de un rombo con diagonales de 8 y 10. 
console.log("el area del rombo es igual: ", 8*4/2, "cm3");
console.groupEnd();

console.groupCollapsed("Ejercicio 37");
// Ejercicio 37
// 37. Calcular el área de un trapecio con bases 6 y 10 y altura 4. 
console.log("el area del trapecio es igual: ", (6 + 10) * 4 /2);
console.groupEnd();

console.groupCollapsed("Ejercicio 38");
// Ejercicio 38
// 38. Generar la tabla de multiplicar del número 8. 

let resultadoTabla 
for (let factorB  = 1; factorB  <= 10; factorB++) {
    resultadoTabla = 8 * factorB
    console.log(` 8 x ${factorB} = ${resultadoTabla }`);
}
console.groupEnd();

console.groupCollapsed("Ejercicio 39");
// Ejercicio 39
// 39. Encontrar el número mayor entre 15, 20 y 25. 
console.log(`El número mayor entre 15, 20 y 25 es: ${Math.max(15,20,25)}`);
console.groupEnd();

console.groupCollapsed("Ejercicio 40");
// Ejercicio 40
// 40. Encontrar el número menor entre 50, 75 y 100. 
console.log(`El número menor entre 50, 75 y 100 es: ${Math.min(50,75,100)}`);

console.groupEnd();

console.groupCollapsed("Ejercicio 41");
// Ejercicio 41
// 41. Calcular el promedio de 7, 9 y 12. 
console.log("El promedio es: ", Math.round((7+9+12)/3));

console.groupEnd();

console.groupCollapsed("Ejercicio 42");
// Ejercicio 42
// 42. Calcular la factorial de 7. 
let resultadoFactorial=1
for (let i = 1; i <= 7; i++) {
    resultadoFactorial *= i; // (*=) operador de asignación de multiplicación. Combina la multiplicación y la asignación.
}
console.log(`El factorial de 7  (7!) es: ${resultadoFactorial}`);

console.groupEnd();

console.groupCollapsed("Ejercicio 43");
// Ejercicio 43
// 43. Redondear el número 7.9. 
console.log(Math.round(7.9));
console.groupEnd();

console.groupCollapsed("Ejercicio 44");
// Ejercicio 44
// 44. Calcular el doble de 15. 
console.log(15*2);

console.groupEnd();

console.groupCollapsed("Ejercicio 45");
// Ejercicio 45
// 45. Calcular el triple de 6. 
console.log(6*3);
console.groupEnd();

console.groupCollapsed("Ejercicio 46");
// Ejercicio 46
// 46. Calcular el cuadrado de 8. 
console.log(Math.pow(8,2));
console.groupEnd();

console.groupCollapsed("Ejercicio 47");
// Ejercicio 47
// 47. Calcular el cubo de 4. 
console.log(Math.pow(4,3));

console.groupEnd();

console.groupCollapsed("Ejercicio 48");
// Ejercicio 48
// 48. Calcular la suma de los primeros 15 números naturales. 
let suma2 =0
for (let index = 1; index <= 15; index++) {
    suma2+=index
}
console.log(`La suma de los primeros 15 números naturales es: ${suma2}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 49");
// Ejercicio 49
// 49. Calcular la resta entre 100 y 55. 
console.log(100-55);
console.groupEnd();

console.groupCollapsed("Ejercicio 50");
// Ejercicio 50
// 50. Multiplicar 6 por 8. 
console.log(6*8);
console.groupEnd();
