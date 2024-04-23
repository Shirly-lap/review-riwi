// const teamLeader = {
//     id: "123456",
//     IdentificationNumber: "789456123",
//     name: "Javier",
//     lastname: "Combita",
//     birthDate: new Date("1998- 04- 23 14:00:00"),
//     phoneNumber: "(+57) 3166208976",
//     email: "javier@gmail.com"
 
// }
// // 
// for (const key in teamLeader){
//     console.log(key);
// }


// let numeros = []
// let pares =[]

// for (let numero = 1; numero <= 100; numero++) {
//     numeros.push(numero)
// }
// console.log(numeros);

// for (let par of numeros) {
//     if (par % 2 ===0 ) {
//         // console.log(par);
//         pares.push(par)
//     }
// }
// // numeros.forEach(par => {
// //    par % 2 == 0
// //    pares.push(par)
// // });

// console.log(pares);
// // numeros.forEach(element => {
// //     numeros = Math.random()
// // });


listaEmpleados = [
    {
        nombre: "Juan Pérez",
        edad: 30,
        puesto: "Desarrollador de Software",
        salario: 50000
    },
    {
        nombre: "María García",
        edad: 28,
        puesto: "Diseñadora Gráfica",
        salario: 45000
    },
    {
        nombre: "Luis Ramírez",
        edad: 35,
        puesto: "Gerente de Proyectos",
        salario: 60000
    },
    {
        nombre: "Ana Martínez",
        edad: 32,
        puesto: "Analista de Negocios",
        salario: 55000
    }
];

listaEmpleados

listaEmpleados.forEach(empleado => {
    console.log(`${empleado.nombre.toLowerCase()}`);
});