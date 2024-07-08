import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import { coders } from "../../public/data/database.js"
import { create, index } from './operations.js'
import { showSmallAlertSuccess } from './alerts.js'


const tbody = document.querySelector("tbody")
const table = document.querySelector("table")
const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const form = document.querySelector("form")
let idParaActualizar

index(coders, tbody)


form.addEventListener("submit", function (event) {
    if (idParaActualizar === undefined) {
        create(name, lastName, email, coders)
        showSmallAlertSuccess("saved")
    }else{
        for(const coder of coders){
            if (coder.id == idParaActualizar) {
                coder.name = name.value
                coder.lastName = lastName.value
                coder.email = email.value

            }
        }
        showSmallAlertSuccess("Estamos listos para actualizar")
    } 

    form.reset()
    index(coders, tbody)
    event.preventDefault()
})

table.addEventListener("click", (event) =>{
    if (event.target.classList.contains("btn-danger")) {
        const idParaEliminar =event.target.getAttribute("data-id")
        console.log(idParaEliminar);

        const idToDelete = event.target.parentElement.parentElement.firstElementChild.textContent
        console.log(idToDelete);

        coders.forEach( (coder,index) =>{

            if(coder.id == idParaEliminar){
                coders.splice(index, 1)
                console.log("el coder fue encontrado y esta listo para eliminar");
            }
        })
        showSmallAlertSuccess("coder deleted")
        index(coders,tbody)
    } 

    if(event.target.classList.contains("btn-warning")){
        idParaActualizar = event.target.getAttribute("data-id")
        const userFound = coders.find(coder => coder.id == idParaActualizar)
        name.value = userFound.name
        lastName.value = userFound.lastName
        email.value = userFound.email
    }
    
})
 













