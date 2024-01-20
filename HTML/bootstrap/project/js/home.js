$(document).ready(function () {
    const logoutbtn = $('#logoutfun');
    


    logoutbtn.click(function () {
        document.cookie = "useremail=";
        window.location.href = "index.html";
    }
    );
    
    const useremail = getCookie('useremail');
    if (!useremail) {
        window.location.href = "index.html";
    }
})




function getCookie(cookieName) {
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');

        if (name === cookieName) {
            return decodeURIComponent(value);
        }
    }

    return null; 
}


