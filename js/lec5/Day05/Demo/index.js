// //~ BOM ==> Browser Object Model 
// //^ Window --> navigator / history / location / document 
// //& Timers  ==> setInterval / setTimeOut 
// // setInterval(function(){
// //     console.log("setInterval")
// // },1000)
// function myTimer(){
//     let date = new Date();
//     document.getElementById("timer").innerText = date.toLocaleTimeString()
// }
// // myTimer()
// var uniqueId;
// // uniqueId=setInterval(myTimer,1000)
// console.log(uniqueId)
// function stopTimer(){
//     clearInterval(uniqueId);
// }
// // setTimeout(()=>{

// //     console.log("kkckldj")
// // },3000);

// console.log(window.innerHeight)
// console.log(window.innerWidth)
// //? methods ==> open / close / focus / moveTo / moveBy / resizeTo / scrollTo
// let win;
// function OpenWin(){
//     win = open("./child.html","","width=100,height=50");
//     win.focus()
// }
// function moveWin(){
//     // win.moveTo(200,200);
//     win.moveBy(200,200);
//     win.focus()
// }

// function closeWin(){
//     win.close()
// }

// //^ Screen 
// console.log(screen)
// console.log(screen.availHeight)
// //^ Location 
// console.log(location)
// function locTest(){
//     // location.assign("https://github.com/")
//     // location.replace("https://github.com/")
//     // location.reload()
//     history.forward()
//     // history.back()
//     // console.log(history.length)
// }
// // setInterval(locTest,3000)
// //^ history
// console.log(history)
// //^ navigator
// console.log(navigator)
// if(navigator.onLine !== true){
//     alert("you should open online")
// }else{
//     // alert("welcome")
// }

function sum(x,y){
    if(arguments.length !==2){
    //    throw new Error("two params only")
        // throw new TypeError("you should enter two nums only")
    }
    return x+y
}
// console.log(sum(2,3,3))
// alert("";  //! syntaxError 

//console.logg("jhjk") //! typeError

//console.log(r)  //! referenceError

//? .then() .catch()
// try{
//     //~ logic that may be cause error
// console.logg("hjdj")
// }catch(err){
//     //~ handle error
// console.error(err)
// }finally{
//     //~ code will execute 
// console.log("finally")
// }

// console.log(sum(4,1))

//~ Web Api --> App Programming Interface 
//^ Open Api ==> public "localStorage/sessionStorage -- navigator"geolocation"
//^ Partener Api ==> not public 
//^ Internal Api ==> backend
//^ composite Api

//* Storage 
let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;
    // console.log(inp1,inp2)
    localStorage.setItem("name",inp1)
    // localStorage.getItem("name").push(inp1)
    sessionStorage.setItem("addr",inp2)
    console.log(localStorage.getItem("name"))
    console.log(sessionStorage.getItem("addr"))

    //? removeItem("key") ==> remove specific key
    //? clear() ==> remove all the keys

    //& JSON ==> js object notation 
    let jsObj = {
        id:1,
        name:'ali'
    }

    localStorage.setItem("data",JSON.stringify(jsObj))
    console.log(JSON.parse(localStorage.getItem("data")).name)
    let jsonObj = {
        'id':1,
        'name':'ahmed'
    }

    //* JSON.stringify ==> js obj to json
    //* JSON.parse ==> json to js obj

})

//?  xmlhttprequest ---> Fetch --> jquery ajax ---> axios 
//& AJAX==> Asynchronous js and xml
//? js --> synchronous
//? var xhr = new XMLHttpRequest()
//? methods ==>open , send ,close
//? attributes
//? readystate --> 0--uninitialized ,1--loading ,2--loaded ,3--interaction ,4--completed
//? status -->1** --inf ,2**--completed,3**--rediraction,4**--error in client,5**--error in server
//? statusText --> "ok --2**" "not found --404"
//? responseText | responseXMl
//? event ==> onreadystatechange
//? crud operation ==> get , post ,delete ,put/patch

function getData(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts")
    xhr.send("")
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr)
            let data =JSON.parse( xhr.responseText)
            // console.log(data)
            for(let i=0;i<data.length;i++){
                // console.log(data[i])
                document.getElementById("h2").innerText += data[i].title
            }
        }
    }
}

function getDataById(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts/"+document.getElementById("dataId").value)
    xhr.send("")
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr)
            let data =JSON.parse( xhr.responseText)
            // console.log(data)
            // for(let i=0;i<data.length;i++){
            //     // console.log(data[i])
            //     document.getElementById("h2").innerText += data[i].title
            // }
            console.log(data)
            document.getElementById("title").innerText = data.title
            document.getElementById("body").innerText = data.body
        }else{
            // alert('Error')
        }
    }
}


//?  login form ==> store user data in localstorage  
//? check user found or not ===> found "appear product page api"
                            //? ==> not found " sign up form " --> "products page "