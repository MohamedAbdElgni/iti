//^1.1

function task1(){
    let arr= [60,100,10,15,85]
    console.log(arr + "%c ==> Original Array",'color:aqua')

    let sarr=arr.slice(0).sort(function(a, b){return b-a})
    console.log(sarr + "%c ==> sorted Array",'color:yellow')

    function get_max(deg) {
        return deg <= 100;
    }
    let hdeg = sarr.find(get_max)
    console.log(hdeg + "%c ==> highest student degree",'color:yellow')

    let grades = sarr.filter((a)=>a<60)
    console.log(grades + "%c ==> student degree > 60",'color:yellow')
}

//^ 1.2

function task2(){
    alert("Welcome to my site")
    let uname;
    do{
        uname = prompt("Enter Your Name Please:- ")
    }while (!uname);

    document.write("<h1>" + "Welcome to my page " + uname + "</h1>");
}

//^ 1.3
function task3(){
    let uemail;
    do{
        uemail = prompt("Please Enter Your Email:- ")
    }while(!uemail || (!uemail.includes("@")|| uemail.indexOf('@')===0 || uemail.lastIndexOf('@')===uemail.length-1 
    || uemail.indexOf('@')===uemail.length-1))

    document.write("<h1>" + "Your email ==> " + uemail + "</h1>");
}

//^ 1.4
function task4(){
    let uname
    let ubirth
    
    do{
        uname = prompt("Enter Your Name Please:- ");
        if ((/^[A-Za-z]{3,}(\s[A-Za-z]{3,})*$/.test(uname))) {
            break;
        }else{
        alert("Invalid name.");}
        
    }while(true);

    do{
        ubirth = parseInt(prompt("Enter Your Birth Year:- "));
        if ((/^[1-9]\d{3}$/.test(ubirth)) && (ubirth < 2010 )) {
            break;
        }else{
            alert("Invalid birth year.");}
    }while(true);
    dateNow = new Date().getFullYear()
    document.write(`<p><b><u>Name</u></b>: ${uname}</p>
    <p><b><u>Birth year</u></b>: 
    ${ubirth}</p><p><b><u>Age</u></b>: ${dateNow-ubirth}</p>`);
}

//^ 1.5
function task5(){
    
    let mailVal = new RegExp(/^([A-Za-z]\w*(?:_[A-Za-z0-9.]+)*)@[A-Za-z0-9]+\.[a-z]{3}\.eg$/i);
    let naVal = new RegExp(/^[A-Za-z]{3,}( [A-Za-z]{3,})*$/i);
    let uemail
    let uname

    while (!(naVal.test(uname = prompt("Enter your full name:")))){
        alert("Enter a valid full Name separated by space");
    };
    
    while (!(mailVal.test(uemail = prompt("Enter your Email:")))){
        alert(`${uemail} is not a valid Email Ex:- example@mail.net.eg`);
    };

    document.write(`<p style="text-transform:capitalize;"><b><u>First Name</u></b>: ${uname.split(' ')[0]}
    </p><p style="text-transform:capitalize;"><b><u>Last Name</u></b>: 
    ${uname.split(' ').length > 1 ? uname.split(' ').slice(1).join(' '):''}</p>
    <p><b><u>Email</u></b>: ${uemail}</p>`);
}



//^ 1.6
function palindrome(){
    let wordVal = new RegExp(/^[A-Za-z]+$/)
    let askVal = new RegExp(/^(yes|no|y|n)$/i)
    let word
    let ask
    while (!(wordVal.test(word = prompt("Enter a Word")))){
        alert("Enter a valid word!!");
    };

    while (!(askVal.test(ask = prompt("Consider cases?! yes(y) or no (n):-").toLowerCase()))){
        alert("Enter a valid answer yes(y) or no (n)");

    };

    if(ask==='n'||ask=='no'){
        word = word.toLocaleLowerCase()
    }
    let wordChk = word.split('').reverse().join('')
    if(word===wordChk){
        alert(`${word} is palindrome`)
    }else{
        alert(`${word} is not palindrome`)
    }
    let con
    while (!(askVal.test(con = prompt("you want to continue?! yes(y) or no (n):-").toLowerCase()))){
        alert("Enter a valid answer yes(y) or no (n)");
    };

    if(con==='n'||con=='no'){
        alert('Thank you!!!')
    }else{
        palindrome()
    }


}
//^ 1.7
function getStr(){
    let strVal = new RegExp(/^[A-Za-z]+( [A-Za-z]+)*$/i);
    let str 
    let charVal = new RegExp(/^[A-Za-z]{1}$/i)
    let char
    let askVal = new RegExp(/^(yes|no|y|n)$/i)
    let ask
    while (!(strVal.test(str = prompt("Enter a valied String:- ")))){
        alert("Enter a valid String separated by space");
    };
    while (!(charVal.test(char = prompt("Enter a char to count:- ")))){
        alert("Enter a valid String separated by space");
    };
    while (!(askVal.test(ask = prompt("Consider cases?! yes(y) or no (n):-").toLowerCase()))){
        alert("Enter a valid answer yes(y) or no (n)");
    };
    if(ask==='n'||ask=='no'){
        str = str.toLocaleLowerCase()
        char = char.toLocaleLowerCase()
    }
    str = str.split('')
    
    var counter = 0
    for(let i = 0;i<str.length-1;i++){
        if(str[i]===char){
            counter+=1
        }
    }
    alert(`Letter \'${char}\' Appeared ${counter} Times!!!`)
    let con
    while (!(askVal.test(con = prompt("you want to continue?! yes(y) or no (n):-").toLowerCase()))){
        alert("Enter a valid answer yes(y) or no (n) to leave or continue");
    };
    if(con==='n'||con=='no'){
        alert('Thank you!!!')
    }else{
        getStr()
    }
}

function getlgSTR(){
    let lgstr = prompt("Enter any Sentence ")

    let bwo = lgstr.split(' ').reduce((a,b) => {
        return b.length > a.length ? b  : a; 
    })
    
    console.log(lgstr)
    console.log("longest word is:- " + bwo + "with Length of --> " + bwo.length)
}

//^1.1
// task1()
//^1.2
// task2()
//^1.3
// task3()
//^1.4
// task4()
//^1.5
// task5()

//^1.6
// palindrome()
//^ 1.7
getStr()

//^1.8
// getlgSTR()





