alert("BIENVENIDO A TU APP DE CLASIFICACCIÓN DE FRUTAS")

const frutas={
    manzana:"no cítricas",
    pera:"no cítricas" ,
    naranja:"Cítrica",
    limon: "Cítrica"
}

console.log(frutas);
// console.log(frutas[0]);
let listCitricas =[]
let listNoCitricas=[]

for (const key in frutas) {
    if (frutas[key] === "Cítricas") {
        listNoCitricas.push(key)
    }

    else{
        listCitricas.push(key)
    }
}

console.table(listCitricas);

console.table(listNoCitricas);
