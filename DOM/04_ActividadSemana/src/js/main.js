const dataBase = [
    {
        nombre: "Manchas",
        edad: "4",
        raza: "Dálmata",
        especie: "Perro",
        peso: "20 kg",
        estado: "Estable",
        url: "https://img.freepik.com/fotos-premium/retrato-perro_1048944-20099007.jpg?w=360",
        datosPropietario: {
          nombre: "Sofía",
          documento: "78945",
          telefono: "31789",
          correo: "sofia@ejemplo.com"
        }
      },
      {
        nombre: "Bella",
        edad: "2",
        raza: "Persa",
        especie: "Tortuga",
        peso: "5 kg",
        estado: "Estable",
        url: "https://img.freepik.com/foto-gratis/tortugas-nadando-oceano_23-2150537271.jpg?t=st=1714793951~exp=1714797551~hmac=8acf0b9ae5161af607ba25670a36a2846aa70b7cce830b9282bdd5ecad1fe710&w=360",
        datosPropietario: {
          nombre: "Pedro",
          documento: "12345",
          telefono: "312345",
          correo: "pedro@ejemplo.com"
        }
      },
    {
        nombre:'Paco',
        edad:'4',
        raza:'Criollo',
        especie:'gato ',
        peso:'33kg',
        estado:"Estable",
        url:'https://img.freepik.com/foto-gratis/retrato-hermosa-vaca-marron_268835-4039.jpg?t=st=1714608441~exp=1714612041~hmac=0b0c89b59728218d8b895439ad75df9915a5c3a3c80a8a3ba67925c6efa3d111&w=740',
        datosPropietario :{
            nombre: 'camilo',
            documento: '12345',
            telefono:'32442',
            correo:'codeartjc@gamil.com'
        }
    },
    {
        nombre:'Firu',
        edad:'6',
        raza:'Criollo',
        especie:'gato ',
        peso:'33kg',
        estado:"Crítico",
        url:'https://img.freepik.com/foto-gratis/hermoso-guepardo-mirada-enojada-dia_181624-26177.jpg?t=st=1714797753~exp=1714801353~hmac=855d3a951a243cbb2637c2ce306bc74f7352d1e90971c26efafa0348102c8d92&w=360',
        datosPropietario :{
            nombre: 'camilo',
            documento: '12345',
            telefono:'32442',
            correo:'codeartjc@gamil.com'
        }
    },
    {
        nombre: "Nala",
        edad: "6",
        raza: "Pug",
        especie: "Perro",
        peso: "22 kg",
        estado: "Estable",
        url: "https://img.freepik.com/foto-gratis/disparo-vertical-lindo-pug-sobre-superficie-gris_181624-43437.jpg?t=st=1714793352~exp=1714796952~hmac=cfc507eb03f8299116e3afbe9870641f018efe7afa3e4d74154592caea8fb365&w=360",
        datosPropietario: {
          nombre: "Isabella",
          documento: "98765",
          telefono: "31987",
          correo: "isabella@ejemplo.com"
        }
      },
      {
        nombre: "Lorenzo",
        edad: "1",
        raza: "Loro",
        especie: "Gato",
        peso: "3 kg",
        estado: "Crítico",
        url: "https://img.freepik.com/foto-gratis/loro-colorido-pluma-verde-roja-cabeza_1340-38606.jpg?t=st=1714793469~exp=1714797069~hmac=ec1245f65fa230f498c838c4cdaf46ddec19a32fab21bdc7e7cbd0070ac91ec2&w=360",
        datosPropietario: {
          nombre: "Camila",
          documento: "12345",
          telefono: "312345",
          correo: "camila@ejemplo.com"
        }
      },

    {
        nombre: 'Luna',
        edad: '2',
        raza: 'Siamés',
        especie: 'Gato',
        peso: '5 kg',
        estado: 'Estable',
        url: 'https://img.freepik.com/foto-gratis/gatito-pared-monocromatica-detras-ella_23-2148955134.jpg?t=st=1714792122~exp=1714795722~hmac=a4ce0e7f37d5226f9417935c19b112c1b32bcecd2e7dd99894af9524e71d4552&w=360',
        datosPropietario: {
          nombre: 'Valentina',
          documento: '10234',
          telefono: '310234',
          correo: 'valentina@ejemplo.com'
        }
      },
      {
        nombre: 'Toby',
        edad: '3',
        raza: 'Golden',
        especie: 'Perro',
        peso: '25 kg',
        estado: 'Estable',
        url: 'https://img.freepik.com/fotos-premium/pequeno-perro-cocker-spaniel-hermoso-cabello-rubio-sobre-hierba-verde_58409-24608.jpg?w=360',
        datosPropietario: {
          nombre: 'Alejandro',
          documento: '123456',
          telefono: '312345',
          correo: 'alejandro@ejemplo.com'
        }
      },
      {
        nombre: 'Lola',
        edad: '1',
        raza: 'Mestiza',
        especie: 'Gata',
        peso: '4 kg',
        estado: 'Crítico',
        url: 'https://img.freepik.com/foto-gratis/cerrar-lindo-gato-interior_23-2148882585.jpg?t=st=1714790834~exp=1714794434~hmac=632c2152ca5b7939827780ef759e32e89f725ffbfceda59bc08bef9dd441bbc2&w=360',
        datosPropietario: {
          nombre: 'Mariana',
          documento: '456789',
          telefono: '314567',
          correo: 'mariana@ejemplo.com'
        }
      },
      {
        nombre: 'Max',
        edad: '5',
        raza: 'Pastor Alemán',
        especie: 'Perro',
        peso: '30 kg',
        estado: 'Estable',
        url: 'https://img.freepik.com/foto-gratis/imagen-vertical-pastor-aleman-rodeado-vegetacion-fondo-borroso_181624-9782.jpg?t=st=1714790775~exp=1714794375~hmac=b3139b836a67ccb8532d248db5b8278f2287ac77c7d15de5eb1d25a646bca887&w=360',
        datosPropietario: {
            nombre: 'Mariana',
            documento: '45678',
            telefono: '314567',
            correo: 'mariana@ejemplo.com'
          }
        },
        {
            nombre: "Manchas",
            edad: "4",
            raza: "Dálmata",
            especie: "Perro",
            peso: "20 kg",
            estado: "Estable",
            url: "https://img.freepik.com/fotos-premium/retrato-perro_1048944-20099007.jpg?w=360",
            datosPropietario: {
              nombre: "Sofía",
              documento: "78945",
              telefono: "31789",
              correo: "sofia@ejemplo.com"
            }
          },
          {
            nombre: "Bella",
            edad: "2",
            raza: "Persa",
            especie: "Tortuga",
            peso: "5 kg",
            estado: "Estable",
            url: "https://img.freepik.com/foto-gratis/tortugas-nadando-oceano_23-2150537271.jpg?t=st=1714793951~exp=1714797551~hmac=8acf0b9ae5161af607ba25670a36a2846aa70b7cce830b9282bdd5ecad1fe710&w=360",
            datosPropietario: {
              nombre: "Pedro",
              documento: "12345",
              telefono: "312345",
              correo: "pedro@ejemplo.com"
            }
          },
]


// Extracción de header, main, footer
const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");

//inyectamos el Navbar
header.innerHTML = `

            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
                <span class="fs-4">Veterinaria</span>
            </a>

            <ul class="nav nav-pills">
                <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                <li class="nav-item"><a href="#sectionRegistrar" class="nav-link">Register</a></li>
                <li class="nav-item"><a href="#sectionConsultar" class="nav-link">Search</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Edit</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Delete</a></li>
            </ul>

           
`

main.innerHTML = `
    <div class="container col-xxl-8 px-4 py-5" id="containerBanner">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
                <img src="https://img.freepik.com/foto-gratis/veterinario-cuidando-perro-mascota_23-2149198682.jpg?t=st=1714738780~exp=1714742380~hmac=487f288efe7c48c8bd7450f7d584635377f3e5a2e88546bd3d924ee5721cee15&w=1060" class="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="350"  loading="lazy" >
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Your Pet's Health is Our Priority</h1>
                <p class="lead">Our team of experienced veterinarians and veterinary technicians is committed to providing your pet with the highest quality care</p>
            </div>
        </div>
    </div>

    <section id="sectionConsultar"> 
 
        <div class="b-example-divider"></div>
   
        <div class="container px-4 py-5" id="custom-cards">
            <h2 class="pb-2 border-bottom">Macostas registradas</h2>
            <div class="input-group mt-5">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-primary" data-mdb-ripple-init>search</button>
            </div>
            <div id="contenedorCards" class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            </div>
        </div>
    </section>
    
`

const sectionConsultar = document.getElementById("contenedorCards");


for (let mascota = 0; mascota < dataBase.length; mascota++) {
    let nombreMascota = dataBase[mascota]['nombre'];
    let urlMascota = dataBase[mascota]['url'];
    let edadMascota = dataBase[mascota]['edad'];
    let razaMascota = dataBase[mascota]['raza'];
    let especieMascota = dataBase[mascota]['especie'];
    let pesoMascota = dataBase[mascota]['peso'];
    let estadoMascota = dataBase[mascota]['estado'];
    let propietario = dataBase[mascota]['datosPropietario'].nombre;
    let documento = dataBase[mascota]['datosPropietario'].documento;
    let telefono = dataBase[mascota]['datosPropietario'].telefono;
    let correo = dataBase[mascota]['datosPropietario'].correo;

    sectionConsultar.innerHTML +=`
 
        <div class="col">
          <div class="card card-cover h-100 overflow-hidden  rounded-4 shadow-lg" style="background-image: url('${urlMascota}')">
            <div class="d-flex flex-column h-100 p-2 pb-5 text-white ">
            <h3 class="pt-5 pb-5  display-6 text-black fw-bold">${nombreMascota}</h3>

            <ul id="datos" class="d-flex list-unstyled >
                <li class="me-auto">
                    <button type="button" class="btn btn-secondary">
                        <i class="bi bi-clipboard2-pulse">${estadoMascota}</i>
                    </button>
                </li>

                <li class="me-auto">
                    <button type="button" class="btn btn-secondary">
                        <i class="bi bi-bookmark-star"> ${razaMascota}</i>
                    </button>
                </li>

                <li class="me-auto">
                    <button type="button" class="btn btn-secondary">
                        <i class="bi bi-cake2"> ${edadMascota} </i>
                    </button>
                </li>
            </ul>

            <ul id="datos2" class="d-flex list-unstyled ">
                <li class="me-auto">
                    <button type="button" class="btn btn-secondary">
                        <i class="bi bi-person-circle"> ${propietario}</i>
                    </button>
                </li>

                <li class="me-auto">
                    <button type="button" class="btn btn-secondary">
                        <i class="bi bi-telephone"> ${telefono}</i>
                    </button>
                </li>

                <li class="me-auto">
                    <button type="button" class="btn btn-secondary" >
                        <i class="bi bi-badge-cc"> ${documento}</i>
                    </button>
                </li>
            </ul>
            </div>
          </div>
        </div>  
`
}

const sectionRegistrar = document.createElement("section")
sectionRegistrar.id = "sectionRegistrar"

main.appendChild(sectionRegistrar)

sectionRegistrar.innerHTML = `
<div class="b-example-divider"></div>
    <h2 class="pb-2 border-bottom text-center">Registrar mascota</h2>
    <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput">
                <label for="floatingInput">Nombre de la mascota</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPassword">
                <label>Raza</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPassword">
                <label>Especie</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPassword">
                <label>Edad</label>
            </div>
            <div class="form-floating mb-3">
                <input type="date" class="form-control" id="floatingPassword">
                <label>Fecha de nacimiento</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPassword">
                <label>Peso</label>
            </div>

            <div class="form-floating mb-3">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Estado estable
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Estado crítico
                    </label>
                </div>
            </div>

            <label>Imagen de perfil de la mascota</label>
            <div class="form-floating mb-3">
                <div class="input-group">
                    <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload">
                </div>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPassword">
                <label>Nombre propietario</label>
            </div>

            <div class="form-floating mb-3">
                <input type="tel" class="form-control" id="floatingPassword">
                <label>Teléfono</label>
            </div>

            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingPassword">
                <label>Correo</label>
            </div>

            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="floatingPassword">
                <label>Documento</label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Registrar</button>
            <hr class="my-4">
            <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
        </div>
    </form>
</div>


`
footer.innerHTML = `
    <p class="col-md-4 mb-0 text-body-secondary">&copy; 2024 Company, Inc</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
    </a>

    <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
`
