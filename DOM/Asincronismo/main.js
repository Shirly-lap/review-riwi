// console.log("uno");
// console.log("dos");
// setTimeout(() => {
//     alert("hola mundo")
// }, 10000);

// console.log("tres");
// console.log("cinco");

const table = 

async function llamadoAunaApi() {
    const respuesta = await fetch("https://rickandmortyapi.com/api/character")
    const data = await respuesta.json()

    console.log(data);
}

llamadoAunaApi()