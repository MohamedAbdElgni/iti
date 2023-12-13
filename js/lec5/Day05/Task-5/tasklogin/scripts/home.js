var welcome = document.querySelector('main')
var h2Element = document.createElement('h2');
h2Element.style.textTransform = 'capitalize';

var products = document.querySelector('.con')
function getUser() {
    if (sessionStorage.getItem('isAuthenticated')) {
        document.getElementById('loginButton').style.display = 'none'
        h2Element.innerText = `Hello ${sessionStorage.getItem('currUserName')}`;
        welcome.insertBefore(h2Element, welcome.children[0])
        products.style.display = 'flex'
    } else {

        document.getElementById('logoutButton').style.display = 'none';
        h2Element.innerHTML = `Welcome to our site please <a href='login.html'> Login </a> Or <a href='reg.html'> signUp </a> `
        welcome.insertBefore(h2Element, welcome.children[0])
    };
}

function logout() {
    sessionStorage.clear();
    window.location = 'home.html'
}






