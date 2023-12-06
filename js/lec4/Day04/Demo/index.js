// //& DOM ==> Document Object Model 
// document.title = "Python Track";
// // document.body.style.background = "gray";
// document.write("<h1>hello</h1>");
// //? Cookie --> store data 
// //~ Nodes ==> represent everything inside html 
// //* childNode --> include comments , text .....
// // console.log(document.childNodes[1].childNodes[2].childNodes[1].style.color="red")
// //* children --> include html tags only
// // console.log(document.children[0].children[1].children[1].style.color="green")
// //* getters
// // document.getElementById() //? return only one elem
// // document.getElementsByClassName()
// // document.getElementsByName()
// // document.getElementsByTagName()
// let head1 = document.getElementById("head1");
// // console.log(head1)
// let c1 = document.getElementsByClassName("c1");
// for(let i=0;i<c1.length;i++){
//     c1[i].style.color="pink";
// }
// // document.querySelector("css selector") //? return first elem that match selector
// // document.querySelectorAll() //? return all the elements that match the selector

// let inp = document.querySelectorAll("[type = 'text']");
// console.log(inp)
// for(let i=0;i<inp.length;i++){
//     inp[i].style.border="2px solid green"
// }

// // document.querySelector(".c1").style.border = "2px solid blue";
// // document.querySelector(".c1").style.color = "green";
// //? dry principle
// let c11 = document.querySelector(".c1").style
// c11.border = "2px solid pink"
// c11.color = "blue"

// document.getElementsByClassName("c1")
// //? collections ==> forms , imgs , links 
// console.log(document.images[0].style.border = "2px solid blue")

// //& //////////////////////////////////////
// //* Maniplation 
// //? innerHtml , innerText , textContent 
// let data = document.getElementById("data");
// console.log(data)
// data.innerText += " hello from js" 
// data.innerText += " welcome" 
// data.innerHTML += " <h1>i'm h1</h1>"
// let body = document.body;
// body.innerHTML += "<h3 class='h3'>i'm h3</h3>"

// //* /////////////////////////////////////////
// let ctraetedp = document.createElement("p");
// //? setAttribute , getAttribute , hasAttribute
// ctraetedp.setAttribute('id','created');
// ctraetedp.setAttribute('type','text');
// ctraetedp.innerText = "i'm created on the fly";
// // body.appendChild(ctraetedp);
// let p1 = document.getElementsByClassName("p1")[0]
// p1.appendChild(ctraetedp)
// function removeElem(){
//     ctraetedp.remove()
// }

// //? remove ==> remove elem with child
// //? removeChild ==> remove child only 
// //~ classList ==> add , remove , toggle
// function DarkMode(){
//     body.classList.add("dark")
// }
// function LightMode(){
//     body.classList.remove("dark") 
// }

// function ToggleMode(){
//     body.classList.toggle("dark")
// }


//& Events  ---> types of event "search"
//? way one
function getVal(){
    let inp = document.getElementById("inp").value;
    console.log(inp)
}
//? way two
let btn = document.getElementById("btn");
btn.onclick = function(){
    alert("hello.....")
}

//? way three
function welcomingFun(){
    alert("welcome...")
}
btn.addEventListener("click",welcomingFun)

//~ Event Propagation ==> 
//? bubbling  ==> from child to parent  "defualt"
//? capture  ==>  from parent to child 
let outer = document.querySelector(".outer")
let inner = document.querySelector(".inner")
//? removeEventListener 
outer.addEventListener("click",(e)=>{
    console.log("outer")
    e.stopPropagation()

},{
    once:true
});

if(balance > 0){
    inner.addEventListener("click",(e)=>{
        console.log("inner")
        e.stopPropagation()
    })
}else{
    inner.removeEventListener("click")
}


//? Cookies 
function getVal(){
    let inp = document.getElementById("inp").value;
    // document.cookie="name="+inp;
    setCookie("username",inp);
}

let dataa = {
    name:"ali"
}
document.write("<h1>the name is "+dataa.name+"</h1>")

//~ https://developer.mozilla.org/en-US/docs/Web/Events
let arr = [3,2,4];
let find = arr.find((obj)=>{
    console.log(obj.degree)
    if(obj.degree> 30 && obj.degree<88){
        return obj.name
    }
//    return obj.degree> 30 && obj.degree<88
}) //? return one elem that match the condition
let filter = arr.filter((i)=>i>3&&i<2) //? return array match the condition