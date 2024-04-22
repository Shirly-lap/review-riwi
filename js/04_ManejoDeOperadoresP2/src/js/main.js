let variable1 =156
let variable2 ="854"
let variable3 ="Hola Mundo"
let variable4 = true
let variable5 = undefined
let variable6 = null

console.group("Tipo de variables")
    console.log("variable 1:", typeof variable1)
    console.log("variable 2:", typeof variable2)
    console.log("variable 3:", typeof variable3)
    console.log("variable 4:", typeof variable4)
    console.log("variable 5:", typeof variable5)
    console.log("variable 6:", typeof variable6)
console.groupEnd

console.group("operadoresaritmeticos")
    let numero1 =84
    let numero2 =15

    let suma= numero1+numero2
    let resta= numero1-numero2
    let multiplicacion= numero1*numero2
    let division= numero1/numero2
    let potencia = numero1 ** numero2
    let modulo = numero1 % numero2
    console.log("suma",suma)
    console.log("resta",resta)
    console.log("multiplicacion",multiplicacion)
    console.log("dividion",division)
    console.log("potencia", potencia)
    console.log("modulo", modulo)
console.groupEnd

//operadores de incremento y decremento

console.group("operadores")
    let numeroIncremento = 10
    document.write(numeroIncremento)

    numeroIncremento ++ //suma 1
    numeroIncremento +=2 // suma el numero que le estipulemos
    numeroIncremento -- //resta 1
    numeroIncremento -=1 // resta el numero que le estipulemos
    console.log(numeroIncremento);
console.groupEnd

console.group("operadores compraracccion");
    //igualdad
    console.log( 4 == 4); //true
    console.log( 4 == "4"); //true
    console.log( 4 === "4"); //false

    //diferencia != o !==
    console.log(2 != 9); //false
    console.log(2 != 2); // true
    console.log(2 !== 9); 

    const contraseña = "12345"
    const confirmacion = "12345"

    if (contraseña === confirmacion) {
        console.error("Usuario registrado")
    }

    // comparador mayor que 
    console.log(8 > 5) // true
    console.log(8 >= 8) // true


    // comparador menor que 
    console.log(8 < 5) // true
    console.log(8 <= 8) // true



console.groupEnd

//operadores logicos
console.group("operadores logicos");
    // AND
    console.log("usuario" == "admin" && "1234" ==1234 && "rol"== false);
    // OR
    console.log(1 > 6 || 5 > 1  || 8 > 2 || 9 > 50); 

    // not
    let variable = true
    console.log(!variable);

    //mezclados 
    console.log(("usuario" == "Usuario" && 5 > 2) || ("rol" == "rol" && 6 == "6"));


console.groupEnd