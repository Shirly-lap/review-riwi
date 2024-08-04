
const products = 'http://localhost:3000/products'
const tbody = document.getElementById('table-body')

// registration form data
const productForm = document.getElementById('product-form')
const name = document.getElementById('name')
const image = document.getElementById('image')
const description = document.getElementById('description')
const price = document.getElementById('price')
const typeProduct = document.getElementById('type-product')
const stock = document.getElementById('stock');

let id;

const logout = document.getElementById('logout')

logout.addEventListener('click', () =>{
    alert('chao')
    localStorage.removeItem(password)
    window.location.href='/'
})
async function loadProducts() {
    const requests = await fetch(products);
    const data = await requests.json();

    tbody.innerHTML = "";

    data.forEach(product => {
        const totalValue = (product.price * product.stock)
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${product.name}</td>
            <td><img src="${product.image}" alt="imgProduct" width="100px"></td>
            <td>$${product.price}</td>
            <td>${product.stock}</td>
            <td>$${totalValue}</td>

            <td>
            <button type="button" data-id=${product.id} class="btn btn-warning">Editar</button>
            <button type="button" data-id=${product.id} class="btn btn-danger">Borrar</button>
            
            </td>
        ` ;
        tbody.appendChild(row)
    });

    
}

loadProducts()


//Funcion de crear productos
async function createProduct(name, image, description, price, typeProduct, stock) {
    const newProduct = {
        name: name.value,
        image: image.value,
        description: description.value,
        price: price.value,
        typeProduct: typeProduct.value,
        stock: stock.value
    }

    const requests = await fetch(products, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct),
    });
    if (!requests.ok) {
        alert('error ala guardar')
    }
}

// Detectando el evento submit
productForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "successfully registered product",
        showConfirmButton: false,
        timer: 1500
    });

    await createProduct(name, image, description, price, typeProduct, stock)
    productForm.reset()

})

tbody.addEventListener('click', async function (event) {
    if (event.target.classList.contains("btn-danger")) {
        const id = event.target.getAttribute("data-id");

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

        await deleteProduct(id)
        await loadProducts()
    }

    //
    if (event.target.classList.contains("btn-warning")) {
        id = event.target.getAttribute("data-id");
        const productFound = await findProduct(id);
        name.value = productFound.name;
        image.value = productFound.image; 
        description.value = productFound.description;
        price.value = productFound.price;
        typeProduct.value = productFound.typeProduct;
        stock.value = productFound.stock
    }


})

async function findProduct(id){
    const requests = await fetch(`${products}/${id}`)
    const data = await requests.json()
    return data;
}

// funcion de eliminar
async  function deleteProduct(id) {
    const  respuesta = await fetch (`${products}/${id}`, {
        method: 'DELETE'
    });

    if (respuesta.ok) {
        alert('eliminaste lo deseado');
    }else{
        alert('error al eliminar')
    }
}


//funcion editar
async function editProduct(id, name, image, description, price, typeProduct, stock) {
    const updateProduct = {
        name: name.value,
        image: image.value,
        description : description.value,
        price: price.value,
        typeProduct :typeProduct.value,
        stock: stock.value
    }
    const requests = await fetch(`${products}/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateProduct)
    })
    if(!requests.ok){
        alert("error al editar")
    }
    
}




