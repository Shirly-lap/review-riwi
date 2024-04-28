
// Ejercicios con Objetos en JavaScript 

// 1. Crea un objeto llamado persona con propiedades como 
// nombre, edad y ciudad. 

    const peopel ={
        name: "pepe",
        ciudad : "Madrid",
        edad : "2002-11-14 13:00:00",
    }

 
// 2. Agrega una propiedad adicional al objeto persona que 
// represente su ocupación. 

   peopel.ocupacion="programing";
   console.log(peopel);

// 3. Accede a una propiedad del objeto persona y muestra su valor 
// en la consola. 
console.log("el nombre es: ",peopel.name);

// 4. Crea otro objeto llamado libro con propiedades como título, 
// autor y año de publicación. 
    const libro ={
        titulo : "Cami el mejor",
        autor: "Juan Camilo Campillo",
        anio : "2013"
    }
// 5. Combina las propiedades de los objetos persona y libro en un 
// nuevo objeto llamado informacion. 
    const informacion =  {
        ...peopel,
        ...libro
    }
    console.log(informacion);

// 6. Cambia el valor de una propiedad en el objeto persona. 
    peopel.name = "Shirly";
    console.log(peopel);

// 7. Elimina una propiedad del objeto libro. 
    
// 8. Crea un objeto llamado coche con propiedades como modelo, 
// marca y año. 
// 9. Muestra todas las propiedades del objeto coche en la consola. 
// 10. Agrega un método al objeto coche que imprima un mensaje 
// en la consola. 
// 11. Crea un objeto llamado circulo con propiedades como radio y 
// color. 
// 12. Calcula el área del círculo utilizando la fórmula A = πr² y 
// muestra el resultado. 
// 13. Crea un objeto llamado rectangulo con propiedades como 
// ancho y alto. 
// 14. Calcula el perímetro del rectángulo utilizando la fórmula P = 2 
// * (ancho + alto) y muestra el resultado. 
// 15. Combina las propiedades de los objetos circulo y rectangulo 
// en un nuevo objeto llamado formas. 
// 16. Crea un objeto llamado computadora con propiedades como 
// marca, modelo y precio. 
// 17. Muestra el precio de la computadora en la consola. 
 
// 18. Agrega una propiedad al objeto computadora que indique si 
// tiene o no una tarjeta gráfica. 
// 19. Crea un objeto llamado mascota con propiedades como 
// nombre, especie y edad. 
// 20. Muestra en la consola la especie de la mascota en 
// mayúsculas. 
// 21. Crea un objeto llamado fruta con propiedades como nombre y 
// color. 
// 22. Agrega un método al objeto fruta que imprima un mensaje 
// indicando si la fruta está madura. 
// 23. Crea un objeto llamado estudiante con propiedades como 
// nombre, edad y calificaciones. 
// 24. Muestra en la consola el promedio de las calificaciones del 
// estudiante. 
// 25. Agrega una propiedad al objeto estudiante que indique si ha 
// aprobado o no. 
// 26. Crea un objeto llamado bolsa con propiedades como tamaño y 
// color. 
// 27. Muestra en la consola un mensaje que indique la capacidad 
// de la bolsa (tamaño). 
// 28. Agrega un método al objeto bolsa que cambie su color. 
// 29. Crea un objeto llamado telefono con propiedades como 
// marca, modelo y sistema operativo. 
// 30. Muestra en la consola un mensaje indicando el sistema 
// operativo del teléfono. 
// 31. Agrega una propiedad al objeto telefono que represente la 
// cantidad de memoria RAM. 
// 32. Crea un objeto llamado animal con propiedades como tipo y 
// sonido. 
// 33. Muestra en la consola un mensaje que indique el sonido del 
// animal. 
 
// 34. Agrega un método al objeto animal que imprima un mensaje 
// indicando su tipo y sonido. 
// 35. Crea un objeto llamado vuelo con propiedades como 
// aerolínea, número de vuelo y hora de salida. 
// 36. Muestra en la consola un mensaje que indique la aerolínea y 
// el número de vuelo. 
// 37. Agrega una propiedad al objeto vuelo que represente el 
// destino del vuelo. 
// 38. Crea un objeto llamado jugador con propiedades como 
// nombre, equipo y posición. 
// 39. Muestra en la consola un mensaje que indique el nombre y el 
// equipo del jugador. 
// 40. Agrega un método al objeto jugador que imprima un mensaje 
// indicando su posición en el equipo. 