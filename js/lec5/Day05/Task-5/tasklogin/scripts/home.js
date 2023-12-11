function getUser() {
    if (sessionStorage.getItem('isAuthenticated')) {
        document.getElementById('loginButton').style.display = 'none'
        let welcome = document.querySelector('main')
        welcome.innerHTML = `
            <h2>Hello ${sessionStorage.getItem('currUserName')}</h2>
        `
    } else {

        document.getElementById('logoutButton').style.display = 'none';
        let welcome = document.querySelector('main')
        welcome.innerHTML = `
            <h2>Welcome to our site please <a href='login.html'> Login </a> Or <a href='reg.html'> signUp </a> </h2>
        `

    };
}

function logout() {
    sessionStorage.clear();
    window.location = 'home.html'
}