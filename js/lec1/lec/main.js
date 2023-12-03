
//!var global
// var x = 10

// console.log("x--> ", x, typeof(x))

// var a 
// var a = true  //redecclearable
// a = 25 //init

// console.log("a--> ", a, typeof a)


//?#########block Scope######//

//! let and const 

// let z = 10 //decleration

// let z = 15 //cannot be re declerated  ---> Error

// z = 50  // can be re init
// console.log("z--> ", z, typeof z)


//const  cannot reinit only first decleared

// const static = 35

// console.log(static)
// const static = 35 --> error
// static = 20  --> error

//!#########block Scope######//

//?######creation####

//!letieral for small usage

// var n = 10

//!constractor for wide usage

// var m = new String('hello')

//######## creation######

//!######## Comp ######

// check for dt and val 

// console.log("2 === '2'")
// console.log(2 === '2')

// console.log(2 == '2')

//##########

//^ && return first false or the last true like and in python
//^ || return first true or last false like or in python

//!######### if ######//

// 1 = user
//2 = admin
//3 = strange

// var flag 
// flag = 4
// if (flag === 1){
//     console.log("user logged");

// if(flag === 2){
//     console.log("admin logged");
// }}
// else{
//     console.log("starnge person");
// }

//!######### Switch ######//
//^ cant take [> , < ,  &&, ||] only ===
// var num 
// num = 25
// switch(num){
//     case 25:
//         console.log('its ==>',num);
//         break;
//     case 50:
//         console.log('its==> ',num);
//         break;
//     default:
//         console.log('its not 25 or 50 its ==> ',num);
// }

//&#########Loops#########
//!######### for('var'; con; var++){action} ######//

// for(let i =0 ; i<10 ; i++){
//     console.log(i)
// }

//!######### while ######//
//var out side x
//while(con){action, increment}

// let w =0; //^ declared out side 
// while(w<=10){
//     console.log("wfrom while",w)
//     w++;
// }

//!######### do while ######//

// let i = 1;
// do{
//     console.log("from do while", i)
//     i++;
// }while(i<5)

//! ######## pars int and float#####
//* return Nan if length 0
//* trminate spaces from left and right and chars from beg

// var pr = parseInt(prompt("enter your number"))

// console.log("from porm=> ",pr)

//! ######## Number and + #####
//* return 0 if length 0
//* trminate spaces only spaces
//* return Nan if string
// var pr = Number(prompt("enter your number"))

// console.log("from porm=> ",pr)
// let n1 = 3
// let n2 = '4'
// console.log(n1+(+n2))


//! ######## Functions #####

// function name(args){
//     return val
// }


//& more solid than the sec one
// function sum(x,y){
//     return x+y
// }
// function sum(x,y){
//     return (+x)+(+y)
// }

// console.log(sum(3,4))










