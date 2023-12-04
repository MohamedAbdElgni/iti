//^1.1

function task1(){
    let arr= [60,100,10,15,85]
    console.log(arr + "%c ==> Original Array",'color:aqua')

    let sarr=arr.slice(0).sort(function(a, b){return b-a})
    console.log(sarr + "%c ==> sorted Array",'color:green')

    function get_max(deg) {
        return deg <= 100;
    }
    let hdeg = sarr.find(get_max)
    console.log(hdeg + "%c ==> highest student degree",'color:yellow')

    let grades = sarr.filter((a)=>a<60)
    console.log(grades + "%c ==> highest student degree",'color:yellow')
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

function task3(){
    let uemail;
    do{
        uemail = prompt("Please Enter Your Email:- ")
    }while(!uemail || (!uemail.includes("@")|| uemail.indexOf('@')===0 || uemail.indexOf('@')===uemail.length-1))

    document.write("<h1>" + "Your email ==> " + uname + "</h1>");
}

// task1()

// task2()

task3()