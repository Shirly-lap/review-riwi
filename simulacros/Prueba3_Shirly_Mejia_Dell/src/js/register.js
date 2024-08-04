const users ='http://localhost:3000/users'
const signupForm = document.getElementById('signup-form')
const fullName = document.getElementById('full-name')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')



//funcion de crear usuario
async function createUser(fullName, username, email, password) {
    const newUser = {
        fullName: fullName.value,
        username: username.value,
        email:email.value,
        password: password.value
    }

    const requests = await fetch(users, {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser),
    });
    if (!requests.ok) {
        alert('error al guardar')
        
    }
    
}
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "successfully registered user",
        showConfirmButton: false,
        timer: 1500
    });

    await createUser(fullName, username, email, password)
    signupForm.reset()
})