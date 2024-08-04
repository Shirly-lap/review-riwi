
const products = 'http://localhost:3000/products'
const container = document.getElementById('container')

// Funcion mostrar productos
async function viewProducts() {
    const requests = await fetch(products);
    const data = await requests.json();

    data.forEach(element => {
        const card = `
        <div class="card text-light col-2 card-custom">
            <img src="${element.image}" class="card-img h-100 object-fit-cover" alt="example">
            <div class="card-body bg-light text-dark">
                <h5 class="card-title">${element.name}</h5>
                <p>${element.description}</p>
                <ul>
                    <li>Precio:$${element.price}</li>
                    <li>Tipo:${element.typeProduct}</li>
                    <li>Cantidad:${element.stock}</li>
                </ul>
        </div>
    </div>
        `;
        container.insertAdjacentHTML('beforeend', card);
    });
}

viewProducts()