$(document).ready(function () {
   
     // show pass radio btn
     showpass = $('#showpass');
     const passwordlog = $('#passlogin');
     showpass.click(function () {
         if (passwordlog.attr('type') === 'password') {
            passwordlog.attr('type', 'text');
         } else {
            passwordlog.attr('type', 'password');
         }
     });

    // signup logic
    $('#signupform').submit(function (e) {
        e.preventDefault();
        // helper funcsss
        // emty val
        function isEmpty(value) {
            return value.trim() === '';
        }

        // email val
        function isValidEmail(email) {
            const emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return emailreg.test(email);
        }
        // name val
        function isValidName(name) {
            const usernameRegex = /^[a-zA-Z_]+$/
            return usernameRegex.test(name);
        }



        // function isValidPassword(password) {

        //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        //     return passwordRegex.test(password);
        // }

        // signup inputs
        const sform = document.getElementById('signupform');
        const firstName = $('#firstname');
        const lastName = $('#lastname');
        const email = $('#signupemail');
        const password = $('#signuppass');
        const dob = $('#bod');
        const gender = $('#signupform input[name="gender"]:checked');
        const agreeTerms = $('#termssignup');
        // errors msgs
        const errfname = $('#err-fname')
        const errlname = $('#err-lname')
        const errmail = $('#err-mail')
        const errdob = $('#err-dob')
        const termserr = $('#err-terms')
        // Validation checks

        // birth val
        const selectedDOB = new Date(dob.val());
        const currentDate = new Date();
        const ageDifferenceInMilliseconds = currentDate - selectedDOB;
        const ageDifferenceInYears = ageDifferenceInMilliseconds / (365 * 24 * 60 * 60 * 1000);

        if (ageDifferenceInYears < 18) {
            errdob.text('You must be above 18 years old.');
            dob.addClass('is-invalid');
            return;
        } else {
            errdob.text('');
            dob.removeClass('is-invalid');
        }



        if (!isValidEmail(email.val())) {
            email.addClass('is-invalid')
            errmail.text('invalied email')

            return;
        } else {
            email.removeClass('is-invalid')
            email.addClass('is-valid')
        }

        if (!isValidName(firstName.val())) {
            firstName.addClass('is-invalid')
            errfname.text('Invalid first name');

            return;
        } else {
            firstName.removeClass('is-invalid')
            firstName.addClass('is-valid')
        }


        if (!isValidName(lastName.val())) {
            lastName.addClass('is-invalid')
            lastName.text('Invalid last name');

            return;
        } else {
            lastName.removeClass('is-invalid')
            lastName.addClass('is-valid')
        }

        if (!agreeTerms.prop('checked')) {
            termserr.text('You must agree before submitting.');
            agreeTerms.addClass('is-invalid');
            return;
        } else {
            termserr.text('');
            agreeTerms.removeClass('is-invalid');
        }

        

        reg(sform,firstName,lastName,email,password,dob,gender);

        
        

        
    });

    // login funcss

    $('#loginform').submit(function (e) {
        e.preventDefault();

        login();
    });
});




const signuser = {
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",

}

function reg(sform,fname, lname, email, password, dob, gender) {

    
    const users = JSON.parse(localStorage.getItem('users')) || [];

    

    const user = users.find(user => user.email === email.val());

    if (user) {
        sform.reset();
        fname.removeClass('is-valid');
        lname.removeClass('is-valid');
        email.removeClass('is-valid');
        password.removeClass('is-valid');
        return alert('email already exist please login or use another email');
        
    }

    

    currentuser = signuser;

    currentuser.name = fname.val() + " " + lname.val();
    currentuser.email = email.val();
    currentuser.password = password.val();
    currentuser.dob = dob.val();
    currentuser.gender = gender.val()
    users.push(currentuser);
    alert('you have successfully registered')
    sform.reset();
    $('#signupmodal').modal('hide');
    console.log(users);
    
    localStorage.setItem('users', JSON.stringify(users));

    //remove valid class to be refactored
    fname.removeClass('is-valid');
    lname.removeClass('is-valid');
    email.removeClass('is-valid');
    password.removeClass('is-valid');

    return true;



}


function login() {
    const email = $('#emaillogin');
    console.log(email.val());
    const password = $('#passlogin');
    const users = JSON.parse(localStorage.getItem('users')) || alert('email not found please signup');
    console.log(users);
    const user = users.find(user => user.email === email.val());

    if (!user) {
        email.addClass('is-invalid');
        return false;
    }else{
        password.removeClass('is-invalid')
    }

    if (user.password !== password.val()) {
        password.addClass('is-invalid');
        return false;
    }else{
        password.removeClass('is-invalid');
    }

    alert('login successful');
    //add user mail to cookies
    document.cookie = "useremail=" + user.email;
    $('#loginform')[0].reset();

    
    return true;
}


