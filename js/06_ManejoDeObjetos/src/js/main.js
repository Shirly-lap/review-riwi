// const coder ={
//   name: "Shirly",
//   lastName:"Mejia",
//   birthDate: new Date("2002-11-14 13:00:00"),
//   identificationNumber : "123456789",
//   email :"smmj@gmail.com",
//   clan : "Gosling",
//   phoneNumber: "313456789",
//   codebtor: "Lina C",
//   address: "cra 34 -45",
//   workingDay: "complete",
//   saludar : function(){
//     console.log(`Hola mundo ${this.name}`);
//   }
// }

// console.group("Show data")
// console.log(coder.name, coder.lastName);
// console.log(coder["name"], coder["lastName"]);

// crear un objeto mascota, este objeto debe contener la informacion del nombre, edad, peso, raza, especie,
// y propietario, propietario debe tener los datos de nombre, apellido, tipo documento y documento
// se deben contar con 2 metodos, uno que imprima el nombre de la mascota y su edad; el otro metodo 
// debe retornar los datos del propietario

// const mascota ={
//   name : "pinky",
//   birthDate: "3 anios",
//   weight : "30kg",
//   race:"dobermman",
//   species : "",
//   propietario : {
//       nombre: "ana",
//       apellido : "perez",
//       tipoDocumento: "CC",
//       numeroDocumento: "1234567890"
//   }
// }

// let {
//   nom

// } = mascota 
// // Object.values(console.log(mascota.name, mascota.birthDate))
// // Object.values(console.log(mascota.propietario["nombre"]))

  // camel case pascal case primeras mayisculas el resto en minuscula 
// snake case todo es en minusculas
// keback para html 
// const coder = {
//     name: "ana maria",
//     lastName: "muñoz",
//     birthDay: new Date("1997-10-02 12:00:00"),
//     IdentificationNumber: "1021465",
//     location: {
//         country: "colombia",
//         state: "antioquia",
//         city: "medellin",
//         address: "cll6 #65-45"
//     },
//     Email: "ana03aaron@gmail.com",
//     clan: "dell",
//     PhoneNumber: "3166208976",
//     codebtor: "Isabel Munoz",
//     address: "cll6 #25-85",
//     WorkingDay: "completa",
//     saludar: function () {
//         return ("hola mundo soy${this.name}")
//         coder.showFullName()

//     }
// }

// console.group("show data")
// console.log(coder.name, coder.lastName)
// console.log(coder["name"], coder["lastName"])
// console.log(coder.name, coder["lastName"])
// conosole.log(coder.saludar())
// coder.showFullName()

// console.groupEnd()

// console.group("add data")

// coder.typeBlood = "A +"
// coder["gener"] = "masculino"

// coder.emergency = {}
// coder.emergency.contactName = "maria lopez"
// coder.emergency["backupPhoneNumber"] = "3166208976"


// console.groupEnd()
// // AGREGAR PROPIEDADES A MIS LISTAS 

// Object.defineProperty(coder, "teamLeader", {
//     value: "robinson",
//     writable: true, //permite que la propiedad sea actualizada
//     enumerable: true, //permite que la propiedad sea visible, lo apaga para que las personas no lo puedan ver 
//     configurable: false //permite qeu la propiedad sea eliminada "delete nkmbre variable"
//     // propiedad "undefine" para que no se elimine la propiedad
// })
// coder.id = "T001"
// coder["PhoneNumber"] = "3166208976"
// console.log(coder)

// console.groupEnd()

// console.groupCollapsed("sum objects")

// const ObjectA = {
//     a: "alpha",
//     b: "bravo",
//     c: "charlie",
// }
// const ObjectB = {
//     d: "delta",
//     e: "elefante",
//     f: "foxtror",
// }
// console.info(ObjectA)
// console.info(ObjectB)

// Object.assign(ObjectA, ObjectB) //assign:  es un metodo los datos del segundo objecto se agregan al objecto a nos ayuda a sumar 



// console.groupEnd()

// console.group("suma objects")
// const objectsC = {
//     a: "alpha",
//     b: "bravo",
//     c: "charlie",
// }
// const objectsD = {
//     d: "delta",
//     e: "elefante",
//     f: "foxtror",
// }
// const objectoResultado = {
//     ...objectsC,
//     ...objectsD
// } // los puntos para unir dos objetos en uno
// console.log(objectsC)
// console.log(objectsD)
// console.log(objectoResultado)
// coonsole.groupEnd

// console.group("destructuring")

// const person = {
//     nameCoder: "javier",
//     lastNameCoder: "combita",
//     birthDateCoder: new Date("1998-04-23 14:00:00"),
//     identificationNumberCoder: "109624738486",
//     location: {
//         countryCoder: "colombia",
//         state: "antioquia",
//         city: "medellin",
//         address: "cl 14 # 58-43",
//         emailCoder: "jcomte@outlook.com",
//     },

// }

// // const name = person.nameCoder
// // const documentId = person.identificationNumberCoder
// // const Email = person.emailCoderCoder



// const {
//     nameCoder: name,
//     identificationNumberCoder: documentId,
//     emailCoder: Email,
// } = person

// console.log(name)
// console.log(documentId)
// console.log(Email)

// let {
//     nameCoder: nombre,
//     location: {
//         address:direccion
//     },
//     lastNameCoder: apellido,

// }= person
// console.info(nombre)
// console.info(apellido)
// console.info(ubicacion[address])


// console.groupEnd()


// crear un objeto mascota, este objeto debe contener la informacion del nombre, edad, peso, raza, especie, y propietario, propietario debe tener los datos de nombre, apellido, tipo documento y documento
// se deben contar con 2 metodos, uno que imprima el nombre de la mascota y su edad; el otro metodo debe retornar los datos del propietario
const mascota= {
    nombre: "spice",
    edad: 5,
    peso: 10,
    raza: "criollo",
    especie: "perro",
    propietario: {
        nombre: "ana",
        apellido: "muñoz",
        tipo_documento: "cedula",
        documento: 1023456789,
        imprimirNombre: function(){
            console.info(`el nombre de la mascota es ${this.nombre} y su edad es ${this.edad}`)
        },  
        imprimirPropietario: function(){
            console.info(`el nombre del propietario es ${this.propietario.nombre} y su apellido es ${this.propietario.apellido}`)
        }
    },
    


}= mascota

mascota.imprimirNombre()
mascota.imprimirPropietario()