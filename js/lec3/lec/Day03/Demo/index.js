//? Dates 
//* sec / min ==> 0-59 / hrs ==> 0-23 / day ==> 0 "sunday" - 6 / months ==> 0 -11
let date = new Date();
console.log(date);
//~ get 
console.log(date.getDate());
console.log(date.getMonth()+1);
console.log(date.getFullYear());
console.log(date.getTime());
//~ set
let d = new Date('August 19 , 1999');
d.setDate(14); 
console.log(d)
//~ to 
console.log(d.toLocaleString('ar-EG'));
//& //////////////////////////////////////////////

//? Numbers 
let num1 = 20; //~ literal / primitive
console.log(num1);
let num2 = new Number(30); //~ ctor / object 
console.log(num2 , typeof num2 , num2.constructor.name)
console.log(num2.valueOf())
console.log(num2.valueOf() === 30)
//^ toFixed 
let num = 1;
console.log(typeof +num.toFixed(3));
//^ toprecision
console.log(num.toPrecision(3));
//^ isInteger
console.log(Number.isInteger(num));
//^ isNaN
console.log(NaN === NaN)
console.log( NaN !== NaN)
// if(NaN !== NaN){
//     console.log("jhjhh")
// }
console.log(isNaN(76356))
//^ isFinite
console.log(isFinite('hfjhjk'))
console.log(typeof NaN)
//& ////////////////////////////////////
//? Boolean
let a = true;
console.log(a , typeof a);
let b = new Boolean(false);
console.log(b ,typeof b);
let str = "4333";
let numm = Number(str);
console.log(numm)
console.log(str)
var s = Boolean(str)
console.log(s)
if(typeof s === 'boolean'){
    console.log("true")
}else{
    console.log("false")
}
let n = 0;
console.log(Boolean(n))
console.log(!! n)

//& /////////////////////////////////////
//? Math 
console.log(Math.PI);
let arr = [2,3,8,17]; //~ spread operator "es6"
console.log(Math.max(...arr))
console.log(Math.min(2,4))
console.log(Math.round(Math.random()*100));
console.log(Math.floor(1.544))
console.log(Math.ceil(1.244))

//& ////////////////////////////////////
//? Object 
let obj1 = {
    // ~ key : value
    id:1,
    name:'ali',
    'age year':22
}
console.log(obj1 , typeof obj1 , obj1.constructor.name);
console.log(obj1['age']) //? bracket notation
console.log(obj1.id) //? dot notation
console.log(obj1["age year"]);
var name="alaa"
let obj2 = new Object({
    id:10,
    name:'ahmed',
    skills:['html','css','js'],
    print:function(){
        var name = 'hala'
        console.log(this.name)
        //^ this ==> refer to caller 
    }
});
console.log(obj2)
obj2['address'] = 'cairo';
console.log(obj2)
delete obj2.id;
console.log(obj2)
console.log(Object.keys(obj2))
for(let i in Object.keys(obj2)){
    console.log(Object.keys(obj2)[i])
}
console.log(Object.values(obj2)[1])
console.log(Object.entries(obj2)[0][1])
console.log(obj2.skills)
for(let i=0;i<obj2.skills.length;i++){
    console.log(obj2.skills[i])
}
let ar = [
    {
        id:1,
        name:'ahmed'
    },
    {
        id:2,
        name:'ali'
    }
];
for(let i =0;i<ar.length;i++){
    console.log(ar[i])
}
console.log(ar[0].name)
// print()
obj2.print()

//~ Closure 
var add = "giza"
function outer(){
    var tele = 53265;
    console.log(add)
    function inner(){
        var add = "cairo"
        var tele = 6456
        console.log(tele)

    }
    var tele = 8888
    inner()
    var tele = 11111

}
outer();

//~ scope ==> local "function scope" / global / block / lexical "closure scope"

//~ Hoisting 
console.log(x)
var x = 20;
console.log(sum(2,3))
function sum(x,y){
    return x+y
}

//^ let / const ==> hoisting --> TDZ "temporal dead zone"
let y = 100;
console.log(y);
console.log(sub)
var sub = function(a,b){
    return a-b
}

//* arrow --> has no this / not hoisted / has no arguments

function sum(){
    let sum =0;
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i]
    }
    console.log(sum)
}
sum(1,2,3,4,5)

function mul(a,b){
    if(arguments.length !== 2){
        alert("you must use two nums only")
    }
    return a*b
}
console.log(mul(2,3))

//? symbol / bigint  "ES6" --> primitive 
var s1 = Symbol("123");
var s2 = Symbol("123");
console.log(s1 === s2);
console.log(s1)

console.log(Number.MAX_SAFE_INTEGER);
var bigNum = BigInt(657863589709347059786476589795);
console.log(bigNum , typeof bigNum)
// ?( degree*Math.PI) / 180 .tofixed(4)
console.log(Math.cos(90))


// var format = /^[0-9]{3}$/
// do{
//     var promp = prompt("enter num");

// }while(!promp.match(format))
// console.log(promp)
var promp =parseInt( prompt("enter num"));
if(isNaN(promp)){
    console.log('not number')
}else if(typeof promp === 'number'){
console.log(promp)
}

//~ https://regexr.com/ 

