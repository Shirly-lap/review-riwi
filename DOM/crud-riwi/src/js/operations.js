
export function index(coders, tbody) {

    tbody.innerHTML = ""

    for (const coder of coders) {
        tbody.innerHTML += `
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase">${coder.email}</td>
            <td>
                <button type="button" id="detail" data-id=${coder.id} class="btn btn-primary">
                    details
                </button>
                <button type="button" data-id=${coder.id} class="btn btn-warning">
                    edit
                </button>
                <button type="button" data-id=${coder.id} class="btn btn-danger">
                delete
            </button>

        </td>
        </tr>
        `

    }
}


export function create(name, lastName, email, coders) {
    const newCoder = {
        id: Date.now(),
        name: name.value,
        lastName: lastName.value,
        email: email.value
    }
    coders.push(newCoder)
}

// export function deleteItem(coders,idParaEliminar){
//     coders.forEach((coder, index) => {
//         if (coder.id == idParaEliminar) {
//             coders
//         }
//     });
// }





