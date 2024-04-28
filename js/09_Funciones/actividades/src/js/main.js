// Funcionalidades Principales: 

// 1. Registrar una nueva mascota (nombre, especie, raza, edad (calcular la edad de acuerdo a la 
// fecha  de  nacimiento),  peso, estado  (estable,  critico),  nombre  propietario,  documento  del 
// dueño, teléfono de contacto, correo del propietario,). 
// 2. Ver la lista de todas las mascotas registradas, en dicho array. 
// 3. Ver una lista de todos los dueños 
// 4. Buscar una mascota por el nombre 
// 5. Filtrar y luego mostrar a todas las mascotas pertenecientes a un mismo dueño 
// 6. Actualizar la información de una mascota existente. 
// 7. Eliminar una mascota del array. 
// 8. Crear un menú que me permita controlar cada una de estas acciones  

const animales = [
  // CREAMOS UN ARRAY CON LOS 10 OBJETOS 
  {
    nombre: "spice",
    especie: "perro",
    raza: "criollo",
    fechaNacimiento: "05/11/2023",
    peso: "10kg",
    estado: "estable",
    propietario: {
      nombre: "Victoria",
      documentoID: "1234567890",
      telefono: "6799",
      correo: "victoria@gmail.com"
    }
  },

  {
    nombre: "Piolin",
    especie: "pajaro",
    raza: "carpintero",
    fechaNacimiento: "04/09/2019",
    peso: "3kg",
    estado: "critico",
    propietario: {
      nombre: "Mati",
      documentoID: "678904343",
      telefono: "533744959969",
      correo: "mati@gmail.com"
    }
  },

  {
    nombre: "Michi",
    especie: "elefante",
    raza: "mamut",
    fechaNacimiento: "14/11/2002",
    peso: "3000kg",
    estado: "estable",
    propietario: {
      nombre: "shirly ",
      documentoID: "10002499195",
      telefono: "31323",
      correo: "mati@gmail.com"
    }
  },
  {
    nombre: "Manchas",
    especie: "Perro",
    raza: "Golden Retriever",
    fechaNacimiento: "2018-05-12",
    peso: 25,
    estado: "estable",
    propietario: {
      nombre: "Juan Pérez",
      documento: "123456789",
      telefono: "+57 310 1234567",
      correo: "juan.perez@correo.com",
    },
  },
  {
    nombre: "Pelusa",
    especie: "Gato",
    raza: "Siamés",
    fechaNacimiento: "2020-02-01",
    peso: 5,
    estado: "estable",
    propietario: {
      nombre: "Ana Gómez",
      documento: "987654321",
      telefono: "+57 311 7654321",
      correo: "ana.gomez@correo.com",
    },
  },
  {
    nombre: "Toby",
    especie: "Tortuga",
    raza: "Carey",
    fechaNacimiento: "2015-03-24",
    peso: 10,
    estado: "estable",
    propietario: {
      nombre: "María López",
      documento: "876543210",
      telefono: "+57 312 5432100",
      correo: "maria.lopez@correo.com",
    },
  },
  {
    nombre: "Luna",
    especie: "Conejo",
    raza: "Angora",
    fechaNacimiento: "2019-11-08",
    peso: 3,
    estado: "estable",
    propietario: {
      nombre: "Pedro García",
      documento: "765432109",
      telefono: "+57 313 3210900",
      correo: "pedro.garcia@correo.com",
    },
  },
  {
    nombre: "Coco",
    especie: "Perro",
    raza: "Labrador Retriever",
    fechaNacimiento: "2017-07-15",
    peso: 35,
    estado: "estable",
    propietario: {
      nombre: "Isabel Ramírez",
      documento: "654321098",
      telefono: "+57 314 2109800",
      correo: "isabel.ramirez@correo.com",
    },
  },
  {
    nombre: "Nala",
    especie: "Gato",
    raza: "Persa",
    fechaNacimiento: "2021-04-20",
    peso: 4,
    estado: "estable",
    propietario: {
      nombre: "David Martínez",
      documento: "543210987",
      telefono: "+57 315 1098700",
      correo: "david.martinez@correo.com",
    },
  },
  {
    nombre: "Pancho",
    especie: "Tortuga",
    raza: "Sulcata",
    fechaNacimiento: "2016-06-30",
    peso: 20,
    estado: "estable",
    propietario: {
      nombre: "Carlos González",
      documento: "321098765",
      telefono: "+57 317 8765000",
      correo: "carlos.gonzalez"
    }
  },
  {
    nombre: "Lola",
    especie: "Conejo",
    raza: "Holandés",
    fechaNacimiento: "2020-12-25",
    peso: 2,
    estado: "estable",
    propietario: {
      nombre: "Carlos González",
      documento: "321098765",
      telefono: "+57 317 8765000",
      correo: "carlos.gonzalez"
    }
  }
]
function calcularEdad(fechaNacimientoString) {
  // creamos una variable para almacenar la fecha actual
  let fechaActual = new Date();
  // convertimos el string que entra en los parámetros en tipo date
  const fechaNacimiento = new Date(fechaNacimientoString);
  // obtenemos los años de la fecha actual y el de la fecha ingresada y así obtenemos los años
  let diferenciaAnios = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  return diferenciaAnios;
}

function registrarMascota() {
  // Solicitar datos de la mascota al usuario
  let nombre = prompt("Ingrese el nombre de la mascota: ");
  let especie = prompt("Ingrese la especie de la mascota: ");
  let raza = prompt("Ingrese la raza de la mascota: ");
  let fechaNacimientoString = prompt("Ingrese la fecha de nacimiento (YYYY-MM-DD): ");
  let peso = parseFloat(prompt("Ingrese el peso de la mascota (en kg): "));
  let estado = prompt("Ingrese el estado de la mascota (estable/critico): ");
  let nombrePropietario = prompt("Ingrese el nombre del propietario: ");
  let documentoDueno = prompt("Ingrese el documento del dueño: ");
  let telefonoContacto = prompt("Ingrese el teléfono de contacto: ");
  let correoPropietario = prompt("Ingrese el correo del propietario: ");

  //variable que almacenará la llamada de la función 
  let edad = calcularEdad(fechaNacimientoString);
  // se crea un nuevo objeto con los datos ingresados 
  let mascota = {
    nombre: nombre,
    especie: especie,
    raza: raza,
    edad: edad,
    peso: peso,
    estado: estado,
    propietario: {
      nombre: nombrePropietario,
      documento: documentoDueno,
      telefono: telefonoContacto,
      correo: correoPropietario,
    },
  };

  // se agrega un nuevo objeto al array
  animales.push(mascota);
  console.log(`La mascota ${nombre} ha sido registrada exitosamente.`);

}

function listarMascotas() {
  let consultarListaMascotas = console.table(animales);
}

function listarPropietarios() {
  animales.forEach(animal => {
    console.log(`Propietario de ${animal.nombre}:`);
    Object.entries(animal.propietario).forEach(([propiedad, valor]) => {
      console.log(`  - ${propiedad}: ${valor}`);
    });
  });
}

function buscarMacostaPorNombre(nombreMascota) {
  // validamos que el nombre de la mascota ingresada se encuentre en el array
  const mascotaEncontrada = animales.find(animales => animales.nombre === nombreMascota);
  if (mascotaEncontrada) {
    // en caso de encontrar la mascota crea una tabla con las propedades de esa mascota
    console.log("Macota encontrada");
    console.table(mascotaEncontrada)
  } else {
    console.log("No se encontró la mascota con el nombre ");
  }
}

function filtrarMacostaConMimoDuenio(nombrePropietario) {

  const mascotaDelPropietario = animales.filter(animal => animal.propietario.nombre === nombrePropietario);
  if (mascotaDelPropietario.length > 0) {
    console.log(`Mascotas de ${nombrePropietario}`);
    mascotaDelPropietario.forEach(mascota =>
      console.table(mascota)
    )
  } else {

  }

}

function actualizarInfoMascota(nombreMascota, nuevaEstado) {
  const mascotaEncontrada = animales.find(animal => animal.nombre === nombreMascota);
  if (mascotaEncontrada) {
    mascotaEncontrada.estado = nuevaEstado;
    console.log("Mascota", nombreMascota, "actualizada");
    console.table(mascotaEncontrada);
  } else {
    console.log(`No se encontró ninguna mascota con el nombre "${nombreMascota}"`);

  }
}

function eliminarMascota(nombreMascota) {
  const indiceMascota = animales.findIndex(animal => animal.nombre === nombreMascota);
  if (indiceMascota !== -1) {
    animales.splice(indiceMascota, 1);
    console.log(`Mascota "${nombreMascota}" eliminada con éxito.`);
    listarMascotas();
  } else {
    console.log(`No se encontró ninguna mascota con el nombre "${nombreMascota}"`);
  }
}

let opcion = prompt(` BIENVENIDO A LA VETERINARIA ANA
        ¿Qué deseas hacer hoy?

        [1]. Gestionar animales
        [2]. Gestionar propietarios
`)

// Por medio de la opción que ingresó el usuario le muestra el panel de las mascotas o los propietarios
switch (opcion) {

  case "1":
    let menuMacota = prompt(` 
        **************************************
        BIENVENIDO AL PANEL DE PROPIETARIO
        **************************************
        Ingresa por favor una opción 
        
        [1].Registrar mascota
        [2].Listar mascotas
        [3].Filtrar mascota
        [4]. Actuallizar mascota
        [5]. Eliminar mascota
        `)

    // validamos la función que desea hacer y llamamos la función correspondiente 
    switch (menuMacota) {
      case "1":
        registrarMascota();
        break;

      case "2":
        listarMascotas();
        break;

      case "3":
        // creamos una variable para recibir el argumento de la función
        let buscar = prompt("Ingresa el nombre de la mascota que deseas buscar");
        buscarMacostaPorNombre(buscar);
        break;

      case "4":
        let nombreMascota = prompt("Ingresa el nombre de la mascota que deseas actualizar");
        let estado = prompt("Ingresa el nuevo estado de la mascota: ");
        actualizarInfoMascota(nombreMascota, estado);
        break;

      case "5":
        let nombreMascotaEliminar = prompt("Ingresa el nombre de la mascota que deseas eliminar");
        eliminarMascota(nombreMascotaEliminar)
        break;

      default:
        alert("Ingresaste una opción no válida");
        break;
    }



    break;

  case "2":
    let menuPropietario = prompt(` 
            *************************************
            BIENVENIDO AL PANEL DE PROPIETARIO
            *************************************
            Ingresa por favor una opción 
            
            [1].Listar propietario
            [2].Buscar mascotas asociadas
            [3].Actuallizar propietario
            [4].Eliminar propietario 
            `)
    switch (menuPropietario) {
      case "1":
        listarPropietarios();

        break;

      case "2":
        let buscar = prompt("Ingresa el nombre del dueño que deseas buscar");
        filtrarMacostaConMimoDuenio(buscar);

        break;

      default:
        alert("Ingresaste una opción no válida")
        break;

    }
  default:
    alert("Ingresaste una opción no válida")
    break;
}

