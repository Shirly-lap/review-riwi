console.groupCollapsed("creación de arrays")
  const array1 = new Array;
  const array2 = Array("a", "b", "c");
  const array3 = [];

  console.log(array1);
  console.log(array2);
  console.log(array3);

console.groupEnd()

console.groupCollapsed("consultar datos de array")

  const array = [1,2,3,4,5,6, "hola", false];
  console.log("el array tiene ", array.length ,"elementos");
  console.log(array[6]);
  console.log(array.at(-1));
console.groupEnd()

console.groupCollapsed ("actualizar elementos del array")
  array[6] = "Pao la mejor"
  console.log(array);
console.groupEnd()

console.groupCollapsed("agregar elementos del array")
  array[8] = "Ana la mejor"
  console.log(array);
  array.push("hh"); //al final de la lista
  array.unshift("al comienzo"); //agrega al comienzo 
  console.log(array);
  
console.groupEnd()

console.groupCollapsed("buscar elementos del array")
console.log(array.includes("al comienzo")); // true o false 
console.log(array.indexOf(false)); // retorna la posición y si nno -1
  
console.groupEnd()

console.groupCollapsed("eliminar elementos del array")

  console.log(array);
  array.pop() //elimina el ultimo
  console.log(array);

  delete array[2]
  console.log(array);


  array.shift() //primero de la lista
  console.log(array);
console.groupEnd()

console.groupCollapsed("sumar array")
  // const objeto1 = {
  //   nombre : "alpha",
  //   apellido : "perez"
  // }

  // const objeto2 = {
  //   edad : "26 años",
  //   ciudad : "magangué"
  // }

  //   // const objeto3 = {...objeto1, ...objeto2} //se crea uno nuevo commbinando los dos 
  // console.log(objeto1)
  // console.log(objeto2)
  // // console.log(objeto3)
  // Object.assign(objeto1,objeto2) // se agg al arreglo de la izquierda
  // console.log(objeto1)
  let primerosNumeros = [1,2,3,4,5,6];
  let segundosNumeros = [7,8,9,0]

  console.log(primerosNumeros);
  console.log(segundosNumeros);

  let sumaNumeros = primerosNumeros.concat(segundosNumeros) //un nuevo array se suma 
  console.log(sumaNumeros);

  primerosNumeros= primerosNumeros.concat(segundosNumeros)
  primerosNumeros= segundosNumeros.concat(primerosNumeros, 234,"agregar con concat", true)
  console.log(primerosNumeros);
console.groupEnd()

console.group("sumar array")
  const listaSupermercado =[
    "arroz",
    "yuca",
    "suere",
    "pescado",
    "pan",

  ]
  console.log("FOR",);

  for (let alimentos = 0; alimentos < listaSupermercado.length; alimentos++) {
    console.log(listaSupermercado[alimentos]);
  }

  console.log("---WHILE---");
  let contador = 0;
  while (contador < listaSupermercado.length) {
    console.log(listaSupermercado[contador]);
    contador ++ 
    
  }

  console.log("--FOREACH--",);
  listaSupermercado.forEach(alimentos => {
    console.log(alimentos);
  });


console.log("--FOR OF--");
  for (const iterator of listaSupermercado) {
      console.log(iterator);
  }
console.groupEnd()


// listaSupermercado = listaSupermercado.map(producto =>)


