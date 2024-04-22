// Ejercicios con Operadores en JavaScript 

// Exercise 1
console.groupCollapsed("Exercise 1")
    // 1. ¿Es 35 mayor que 25? 
    console.log("1. El resultado es:", 35 > 25);

console.groupEnd()

// Exercise 2
console.groupCollapsed("Exercise 2")
    // 2. ¿Es 45 menor que 30? 
    console.log("2. El resultado es:",45< 30);
console.groupEnd()

// Exercise 3
console.groupCollapsed("Exercise 3")
// 3. ¿Son 50 y "50" iguales? 
console.log("3. El resultado es:", 50 == "50");

console.groupEnd()

// Exercise 4
console.groupCollapsed("Exercise 4")
// 4. ¿Es 40 estrictamente igual a 40 convertido a número? 
console.log("4.El resultado es:",40 === 40);

console.groupEnd()

// Exercise 5
console.groupCollapsed("Exercise 5")

// 5. ¿Son "apple" y "orange" diferentes? 
console.log("5. La diferencia es:", "apple" != "orange");

console.groupEnd()

// Exercise 6
console.groupCollapsed("Exercise 6")
// 6. ¿Es "apple" estrictamente diferente de "Apple"? 
console.log("6. La diferencia es:", "apple" !== "Apple");

console.groupEnd()

// Exercise 7
console.groupCollapsed("Exercise 7")
// 7. ¿Cuál es el valor de una variable sin definir? 
let variable
console.log( "7. Esta variable es de tipo",variable);

console.groupEnd()

// Exercise 8
console.groupCollapsed("Exercise 8")
// 8. ¿Cuál es el tipo de dato de una variable sin definir? 
console.log("8. El tipo de dato de esta variable", typeof(variable));

console.groupEnd()

// Exercise 9
console.groupCollapsed("Exercise 9")
// 9. ¿Es null igual a undefined? 
let variableNull = null
console.log("9",variable == variableNull);
console.groupEnd()

// Exercise 10
console.groupCollapsed("Exercise 10")
// 10. ¿Son null y undefined estrictamente iguales? 
console.log("10", variable === variableNull);

console.groupEnd()

// Exercise 11
console.groupCollapsed("Exercise 11")
// 11. ¿Es "2.75" mayor que 2.5? 
console.log("11", "2.75" > 2.5);

console.groupEnd()

// Exercise 12
console.groupCollapsed("Exercise 12")
// 12. ¿Es "2.75" mayor que 2.75? 
console.log("12", "2.75" > 2.75);

console.groupEnd()

// Exercise 13
console.groupCollapsed("Exercise 13")
// 13. ¿Es "2.75" mayor o igual a 2.75? 
console.log("13", "2.75" >= 2.75);

console.groupEnd()

// Exercise 14
console.groupCollapsed("Exercise 14")
// 14. ¿Es "2.75" menor o igual a 2.75? 
console.log("14", "2.75" <= 2.75);

console.groupEnd()

// Exercise 15
console.groupCollapsed("Exercise 15")
// 15. ¿Es "2.75" un número mayor a 2.8? 
console.log("15", "2.75" > 2.8);

console.groupEnd()

// Exercise 16
console.groupCollapsed("Exercise 16")
// 16. ¿Es "2.75" un número menor a 2.7? 
console.log("16", "2.75" < 2.7);

console.groupEnd()

// Exercise 17
console.groupCollapsed("Exercise 17")
// 17. ¿Es el nombre "John" diferente de "john"? 
console.log("17", "Jhon" != "john");

console.groupEnd()

// Exercise 18
console.groupCollapsed("Exercise 18")
// 18. ¿Es el nombre "John" diferente de "Jon"? 
console.log("18", "Jhon" != "Jon");

console.groupEnd()

// Exercise 19
console.groupCollapsed("Exercise 19")
// 19. ¿Es la edad 30 estrictamente diferente de "30"? 
console.log("19", 30 !== "30");

console.groupEnd()

// Exercise 20
console.groupCollapsed("Exercise 20")
// 20. ¿Cuál es el resultado de desplazar a la derecha 25 dos veces en bits? 
    // Número a desplazar
    let numero = 25;
    let veces = 2;
    let binario = numero.toString(2);
     console.log(binario);
    for (let i = 0; i < veces; i++) {
        binario = binario.slice(0, -1); // Eliminar el bit menos significativo
    }
    
    let resultado = parseInt(binario,2)
    console.log(`Resultado de desplazar ${numero} a la derecha ${veces} veces: ${resultado}`)
console.groupEnd()

// Exercise 21
console.groupCollapsed("Exercise 21")
// 21. ¿Cuál es el resultado de desplazar a la izquierda 8 tres veces en bits? 
console.log("El resultado es:",25<<8)
console.groupEnd()

// Exercise 22
console.groupCollapsed("Exercise 22")
// 22. ¿Son 15 y 15 iguales? 
console.log("El resultado es:",15 == 15);

console.groupEnd()

// Exercise 23
console.groupCollapsed("Exercise 23")
// 23. ¿Son 20 y 30 diferentes? 
console.log("El resultado es:",20 == 30);

console.groupEnd()

// Exercise 24
console.groupCollapsed("Exercise 24")
// 24. ¿Es "15" mayor que 30? 
console.log("El resultado es:","15" > 30);

console.groupEnd()

// Exercise 25
console.groupCollapsed("Exercise 25")
// 25. ¿Es 20 menor que 40? 
console.log("El resultado es:",20 < 40);

console.groupEnd()

// Exercise 26
console.groupCollapsed("Exercise 26")
// 26. ¿Es 100 mayor o igual a "99"? 
console.log("El resultado es:",100 >= 99);

console.groupEnd()

// Exercise 27
console.groupCollapsed("Exercise 27")
// 27. ¿Es 500 estrictamente igual a "500"? 
console.log("El resultado es:",500 === "500");

console.groupEnd()


console.groupCollapsed("Exercise 28")
// Exercise 28
// 28. ¿Es 750 estrictamente igual a 750?
console.log("El resultado es:", 750 === 750)

console.groupEnd()

// Exercise 29
console.groupCollapsed("Exercise 29")
// 29. ¿Es 5 estrictamente diferente de "5"? 
console.log("El resultado es:", 5 !== "5" )
console.groupEnd()

// Exercise 30
console.groupCollapsed("Exercise 30")
// 30. ¿Es 3 mayor que 5 y 4 menor que 6? (Operadores lógicos) 
console.log("El resultado es:", (3 > 5) && (4 < 6))
console.groupEnd()