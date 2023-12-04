//? fun types
//^ fun declaration or fun statement
function sum(a,b){
    return a+b;
}
// console.log(sum(2,3));

//^ fun expression
let sub = function(x,y){
    return x-y
}
// console.log(sub(4,1));

//^ Arrow fun
let mul = (x,y) => {
    // if(){

    // }
  return  x*y
};
let subb = (z,l) => z-l;
// console.log(mul(3,2));

//^ IIFI --> immediately invoked fun expression
// (function(){
//     console.log("IFII V1")
// })()

// (function(){
//     for(let i=0;i<10;i++){
//         console.log(i)
//     }
//     console.log("IFII V2")
// }())

// !function(){
//     console.log("IFII V3")
// }()

// void function(){
//     console.log("IFII V4")
// }()

//^ anymonous ==> fun without name
//^ callback fun ==> fun pass as a parameter to another fun
//* ///////////////////////////////////////////

// //& Arrays
// //~ Dense Array 
// let arr1 = [1,2,"a",true];
// // console.log(arr1.length);
// // console.log(arr1[2]);
// for(let i =0;i<arr1.length;i++){
//     // console.log(arr1[i])
// }

// // arr1[5]=6;
// // console.log(arr1)
// let arr2 = new Array(20,30,40);
// // console.log(arr2);

// //~ Associative Array
// let arr3 =[];
// arr3["id"]=1;
// arr3["name"]="ali";
// // console.log(arr3);

// for(let i in arr3){
//     // console.log(i, arr3[i])
// }

// //* Array Methods
// //~ Adding Methods
// //? push ==> add elem from end in original data
// let arr = [1,2,3,4,5];
// console.log(arr.push(10)); //~ new length
// console.log(arr);
// //? unshift ==> add elem at start in original data
// console.log(arr.unshift(100)); //~ new length
// console.log(arr);
// //? splice ==> add or delete in original data
// console.log(arr.splice(2,2)); //~ empty array in case of adding but array of element
// // console.log(arr.splice(1,0));
// console.log(arr);

// //~ delete
// //? pop ==> delete from end  in original array
// console.log(arr.pop()); //~ return deleted elem
// console.log(arr);
// //? shift ==> delete from start in original array
// console.log(arr.shift()); //~ return deleted elem
// console.log(arr);
// //? slice ==> copy
let arr = [2,3,4]
console.log(arr.slice(0,arr.length).reverse()); //? end not included
console.log(arr);
// //? reverse
// // console.log(arr.reverse());
// // console.log(arr)
// //? toReversed
console.log(arr.toReversed());
console.log(arr);

// //? sort --> string // num xxx
// let arr4 = [1,-125,5,220];
// console.log(arr4.sort(function(a,b){return b-a}));
// console.log(arr4)

// //* a>b  --> positive num if(a>b) return a-b "swap"
// //* a<b  --> positive num if(a>b) return b-a "swap"

// let arr5 =[1,2,3,4,5,6];
// let res = []
// for(let i =0 ; i<arr5.length;i++){
// if(arr5[i]%2 === 0){
//     res.push(arr5[i]);
// }
// }
// console.log(res)
// // let filt = []
// let filt = arr5.filter((i)=>i%2 === 0);
// let filtt = arr5.filter(function(val){
//     return val%2 === 0
// });

// console.log(filt,filtt);
// //? reduce 
//  sum = 0;
// for(let i=0;i<arr5.length;i++){
//     sum+=arr5[i];
// }
// console.log(sum)

// let summ = arr5.reduce((s,elem)=>{
//  return s+=elem
// });
// console.log(summ)

// //? concat 
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = arr2.concat(arr1);
// console.log(arr3)
// //? toString
// let strArr = arr3.toString();
// console.log(strArr);
// //? join => convert array to string 
// let joinArr = arr3.join(" : ")
// console.log(joinArr)
// let fruits = ["mango","banana","mango"];
// console.log(fruits.indexOf("mango"));
// console.log(fruits.lastIndexOf("mango"));
// console.log(fruits.includes("mango",3));

//^ some , every , flat , flatMap , map "search"

//& ////////////////////////////////////////////////////
//~ regular expressions  ==> regexr.com
//^modifiers
//? i --> case insensitive  , g --> global , m --> multiplelines
//? . -> any character , ^ -> start , $ -> end , | -> or , [] -> match any one char , [^ ] -> match any one char not btn the bracket 
//? * --> zero or more , + --> one or more , ? --> zero or one 
//? {min , max} -->> range / {val} -->> exact value 

//~ literal 
//? /pattern/modifiers
// var nameFormat = /^[A-Za-z]+$/
// do{
// var name = prompt("enter your name");
// }while(! name.match(nameFormat));
// document.write(name);

//~ ctor
var x = new RegExp("^[a-z]{5}$","ig");
var name = "RYHAb";
// console.log(x.test(name)); //? return true or false
// console.log(x.exec(name)); //? return array with matched elem or null
// console.log(name.match(x)); //? return array with matched elem or null

//& String ==> Array Type 
let str = "iti";
console.log(str , typeof str);
let strr = new String("beni suif");
console.log(strr[0] , typeof strr , strr.constructor.name , strr.length);
let num = new Number(22);
console.log(typeof num , num.constructor.name);

var title = "iti@gmaIlg.com rhjfjhfj";
console.log(title.charAt(3));
console.log(title.indexOf("g"));
console.log(title.lastIndexOf("g"));
console.log(title.slice(-7)); 
console.log(title.substring(7,1));
console.log(title)
console.log(title.split("f"))
console.log(title.replace(/i/gi,"R"));







