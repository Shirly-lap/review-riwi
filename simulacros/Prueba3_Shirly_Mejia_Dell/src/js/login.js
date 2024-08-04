const users = 'http://localhost:3000/users'
const loginForm = document.getElementById('login-form');
const inputUser = document.getElementById('username');
const inputPassword = document.getElementById('password');
const btnSubmit = document.getElementById('login-submit')


async function login(username, password) {
    const requests = await fetch(users)
    const data = await requests.json()

    const user = data.find(user => user.username === username && user.password === password)

    if (user) {
        localStorage.setItem('aut', 'true')

        Swal.fire({
            title: "Good job!",
            text: "Bienvenido admin!",
            icon: "success",
            // timer: 15000
        });
        
        window.location.href='/src/pages/dashboard.html';
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Usuario o contraseña incorrecta!",
        });
    }

}

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault()

    const username = inputUser.value
    const password = inputPassword.value
    loginForm.reset()
    login(username, password)
})

