const btn = document.getElementById("btn-hola");
const main = document.querySelector("main")

btn.addEventListener("click", () =>{

    //AGREGAR
    // const btnResponse = crearBtn()
    // btnResponse.innerHTML += `
    // <button id="btn-hola" type="button" class="btn btn-succes text-center"> Button ejemplo </button>
    // main.appendChild(btnResponse);


    //ELIMINAR
    // const btnForDelete = selectBtn();
    // main.removeChild(btnForDelete)

    // REMPLAZAR
    // const newButton = crearBtn();
    // const buttonExist = selectBtn();
    // main.replaceChild(newButton,buttonExist)

    //INSERT BEFORE ingresar antes de otro elemento
    const newButton = crearBtn();
    const btnRefence = selectBtn();

    main.insertBefore(newButton,btnRefence)
})

function crearBtn() {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("btn","btn-success");
    button.textContent ="Hola con función";
    console.log(button);

    return button;
}

function selectBtn() {
    const btnEncontrado = document.querySelector(".btn-info")
    return btnEncontrado;
}


