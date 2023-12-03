// // alert("hello")
// //& global scope
// var x = 10;
// console.log(x , typeof x);
// document.write("the num is "+x);
// var a ; //? declaration
// a="ali"; //? initialization
// console.log(typeof a);
// var a = true;
// console.log(typeof a);
// //~ block scope  ==> accessbility of var 
// {
//     var b=25;
// }
// console.log(b)
// //? let ==> reinitialization
// //? let and const ==>  block scope
// let y =1;
// console.log(y);
//  y = "hassan";

//  {
//     let c = " ahmed";
// }
// // console.log(c)
// {

//     const xx = 1;
//     console.log(xx);
// }
// // xx="omar"
// var m = new String( "user-name");
// console.log(20+10);
// console.log(10 +n );
// var n = 10; //^ literal creation 
// console.log(n++);
// console.log(n++); //? postfix
// var k = 30;
// console.log(++k); //? prefix

// //? loose comparison
// console.log(2 != '2');
// //? strict comparison  "best practice"
// console.log(2 !== '2');

// //* 5 ==> 0101  , 1 ==> 0001
// //^ 0001
// console.log(5&1);
// //^ 0101
// console.log(1|5);

// //~ falsy values ==> " " , NaN , false , 0 , null , undefined , -0
// //^ || ==> return first true value Or the last false
// console.log(''||'hdhh'||78776);
// console.log(0||''||NaN);
// //^ && ==> return first false or the last true
// console.log('' && 'jjjj');
// console.log('jhgvfh'&&'fd'&& true);
// console.log(!true)
// //hhh
// console.log(''||'hhh'&&true&&'jjj')

// var flag = 20;
// if(flag >= 3 && flag <=15){
// console.log("true")
// document.write("in range 3 -15")
// } else if(flag === 20){
//     console.log("false")
// }else{
//     console.log("not true or false")
// }

// //? ternary operatory
// var flagg = false;
// flagg===true ? console.log("true") : console.log("false");
// if(flagg===true){
//     document.write("true")
// }else{
//     document.write("false")
// }


// var num = 50;
// switch(num){
//     case 25:
//         console.log("25");
//         break;
//     case 50:
//         console.log("50");
//         break;
//     default:
//         console.log("not in range");
// }
// for(let i = 1 ;i<=100;i++){
// console.log(i)
// }

// let i = 1;
// while (i<=10) {
//     console.log(i)
//     ++i;
// }

// let i = 1;
// do{
// console.log(i);
// i++;
// }while(i<5)

// var alt = alert("hello");
// console.log(alt)

// var conf = confirm("you wanna leave ? ");
// console.log(conf);

// var promp = ( prompt("enter you num"));
// console.log(promp*10 , typeof promp);

//* convert string to num
//? Explicit == conversion 

//? parseInt , parseFloat
//~ if(promp.length === 0) ==> NaN "Toxic value"
//~  > 0 ==> trminnat string ==> "   76 " ==> "76"
//~ num+char ==> num /// char+num ===> NaN 

//? Number , +
//~ if length===0 ==> 0
//~ length > 0 ==> trimminat spaces 
 //~ any char ==> NaN

 //? Implicit == coercion 
 //& + ==> convert num to string 
 //& -,*,/ ==> convert string to num
// console.log(2 *'3');
// let n1 = 3;
// let n2 = '6';
// console.log(n2 / n1);
// if(isNaN(promp)){

// }

function sum(x,y){
    return x+y
}
// let a = +prompt("first num");
// let b = +prompt("second num");
// console.log(sum(4,3))
// console.log(sum(2,1))
// console.log(sum(a,b))

//! NaN toxic value not equal anything 
console.log(NaN === NaN)
console.log(1 === 1)

// var p = parseInt( prompt("age") );
// console.log(p)
var i=1;
document.write("<h"+i+">" + "hgjgfj")
document.write("<h1>hello</h1>")
document.write("<h2>hello</h2>")

//? 5 , 10 , even ==> 6 8 10
//? 5 , 10 , odd ==> 5,7,9
//? 10 ,5 ,odd ==> 9,7,5 "descending"
//? 5,10,no ==> 5,6,7,8,9,10

//* bonus "colored result in console"