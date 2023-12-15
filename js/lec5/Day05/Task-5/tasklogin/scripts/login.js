class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;

    }
}

$(document).ready(function () {
    $('#firstName').focus()
})

//^ register User
function register() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let name = firstName + " " + lastName;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    if (localStorage.getItem('Users')) {
        let users = JSON.parse(localStorage.getItem('Users') || "[]");
        let existingUser = users.find(user => user.email === email);

        if (existingUser) {
            window.alert("User with this email already exists. Please use another email.");
            return;
        }

        users.push(new User(name, email, password));
        localStorage.setItem('Users', JSON.stringify(users));
    } else {

        localStorage.setItem('Users', JSON.stringify([new User(id, name, email, password)]));
    }
    window.location = 'login.html';
    window.alert("User successfully created. Now login to continue!");
}


$(document).ready(function () {
    $('#loginEmail').focus()
})



//^ login user
function login() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    let users = JSON.parse(localStorage.getItem('Users') || "[]");
    let user;
    let isAuthUser = false;
    var i;


    for (i = 0; i < users.length; i++) {
        user = users[i];
        if (user.email === email && user.password === password) {
            isAuthUser = true;
            sessionStorage.setItem('isAuthenticated', true);
            break;
        }
    }

    if (isAuthUser) {
        sessionStorage.setItem('currUserName', user.name);
        sessionStorage.setItem('currUserId', user.id);
        sessionStorage.setItem('currUserEmail', user.email);
        sessionStorage.setItem('isAuthenticated', true);
        window.location = 'home.html'
    } else {

        $('.log-err').addClass('invaid').hide().text('invalid login').fadeIn(1000)

    }
}

