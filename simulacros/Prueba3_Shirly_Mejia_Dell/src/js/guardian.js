function checkAuthentication() {
    const isAuthenticated  = localStorage.getItem('aut');

    if (isAuthenticated !== 'true') {

        window.location.href = '/'
    }
}


document.addEventListener('DOMContentLoaded', checkAuthentication);