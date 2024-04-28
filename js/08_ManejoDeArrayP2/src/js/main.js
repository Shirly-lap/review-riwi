// if
// if-else
// if-else if
// swich
// aritmeticos (+-/*%** ++ --)
// comparativos (== = === != !== >< <= >=)
// logico (|| && !)
// for - es el general, cuado yo se cuantas vuelta voy a dar
// while - este ciclo se repite una y otra vez hasta que la condicion de rompa
// do while - es lo mismo el while con la diferencia de que se ejecuta una ver si o si
// for of - me da los valores de la coleccion que estamos recorriendo
// for in - el me devuelve el indice de la coleccion
// foreach - este nos puede brindar el valor y el indice en caso de ser necesario

// MAP: PERIMTE RETOMAR ELEMENTOS A DIFERENCIA DEL FOR EACH
console.group("map")
const array1 = ["lucas", "pablo", "maria", "pedro"]

let array2 = [] //["LUCAS", "PABLO", "MARIA", "PEDRO"]

// array2 = array1.map(function (nombre){
//     return nombre.toUpperCase()
// })

array2 = array1.map(function (nombre) { return nombre.toUpperCase() }) 

array1.forEach(nombre => {
    array1.push(nombre.toUpperCase())
});
console.log(array1)
console.log(array2)

console.groupEnd()

// REVERSE AND TOREVERSE: PERMITER ALTERAR EL ORDEN 
console.group("reverse and toReverse")

    const alfabeto = ["a", "b", "c", "d"]
    // console.log(alfabeto);

    // alfabeto.reverse() // invertir el orden
    // console.log(alfabeto);

   const alfabetoInvertido= alfabeto.reverse(); //
   console.log(alfabeto);
    console.log(alfabetoInvertido);


    let alfabetoMilitar = [
        "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot",
        "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima",
        "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo",
        "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray",
        "Yankee", "Zulu"
    ];

    console.log(alfabetoMilitar);

    let alfabetoMilitarInvertidoReverse = alfabetoMilitar.reverse();
    console.log(alfabetoMilitarInvertidoReverse);

   let alfabetoMilitarInvertidoTo = alfabetoMilitar.toReversed();
    console.log(alfabetoMilitarInvertidoTo);


    //SORT : ORDENA ALFABETICAMENTEÇ
    let nombresCoders =[
        "santiago",
        "reycon",
        "narciris",
        "pablo",
        "carolina",
        "marlon",
        "brandon",
        "edson",
        "esteban",
        "carlos",
        "shirly"
    ]

    let coderOrdenados =nombresCoders.sort(); //ordena con orden alfabetico
    console.log(coderOrdenados);

    coderOrdenados = nombresCoders.toSorted();
    console.log(coderOrdenados);
    

    let listaSuperMercado =[
        "jabón",
        "sal",
        "azúcar",
        "tómate",
        "cebolla",
        "ajo",
        "salsas",
        "hielo",
        "arroz",
        "zanahoría"
    ] 

    let asc = listaSuperMercado.toSorted();
    console.log(asc);
    let desc = listaSuperMercado.toSorted().reverse();
    console.log(desc);



    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    let array = []
    for (let numero = 0; numero < numeros.length; numero++) {
        if (numero %2 == 0) {
            array.push(numero)
            console.log(array);
        }
        
    }
console.groupEnd()

