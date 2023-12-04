//& Arrays

//~ Dense Array

let arr1=[1,2,'a',true]

// console.log(arr1)

// for(let i = 0;i<arr1.length;i++){
//     console.log(arr1[i])
// }

let arr2=new Array(30,50,'a',true)
// for(let i = 0;i<arr2.length;i++){
//     console.log(arr2[i])
// }

//! don't use associative array ==> use objects

let arr3=[]
arr3['id'] = 1;
arr3['name'] = 'ali';
arr3['age'] = 50;

// for(let i in arr3){
//     console.log(i, arr3[i])
// }

//*array methods
//~Adding methods
//? push add ele in the end 
let arr=[1,2,3,5,4];
console.log(arr.push(10)); //~new length
console.log(arr)

//? unshift add to start
console.log(arr.unshift(90)); //~new length
console.log(arr)

//? splice take three params  first--> the start to delet sec-->how much to delete ,the rest is to add

console.log(arr.splice(0,2,-40,'hh',500,330,900,600)) //~return deleted elements or empty if not
console.log(arr)

//~Delete methods
//? pop==> delete last element and return it
console.log(arr.pop());
console.log(arr)

//? shift==>  delete first element and return it
console.log(arr.shift());
console.log(arr)

//?slice==> copy of the array start and end

console.log(arr.slice(0,arr.length))

//?reverse --> change original

console.log(arr.reverse())

//?reverse --> take a copy original
console.log(arr)
console.log(arr.toReversed())

console.log(arr)

//~sort methods if numbers  add call back function
console.log(arr)
console.log(arr.sort())
console.log(arr)
console.log(arr.sort(function(a,b){return a-b}))
console.log(arr)


//~filter methods
let fil = arr.filter((i)=>i%2===0)
console.log(fil+" --> odd filter")
let filt = arr.filter((i)=>typeof i ==="number")
console.log(filt+" --> nums filter")
let filts = arr.filter((i)=>typeof i ==="string")
console.log(filts+" --> string filter")


//~reduce take elements from array and do any thing

//!reduce manual way
console.log(arr)
let sum = 0

for(let i = 0 ;i<arr.length;i++){
    sum+=arr[i]
}
console.log(sum)

//reduce

let summred = arr.reduce((s,z)=>s+=z)
console.log(summred)

//~concat
let arrx = ['a','c','v']
let arrz = [1,2,3,4,5]

let narr = arrx.concat(arrz)

console.log(narr)

//~to string
console.log(narr.toString())

//~join

let jarr = narr.join("-")
console.log(jarr)

//~indexof-->index of element or -1 and lastindexof-->index and includes -->T + F

//!some, some, every , map , search , flat--self S


//~regex

// var nameformate = /^[A-Za-z]+$/
// do{
//     var inp = prompt(' your name')
//     console.log('invaled')
// }while(! inp.match(nameformate))

var x = new RegExp("^[a-z]{5}")
var inp = "aliss"
// console.log(x.test(inp) +" Test") -->tf
console.log(x.exec(inp) +" Test") //--> array with matched else null
console.log(inp.match(x)); //--> array with matched else null

//&String
//?letr
let str = "xmohamed"
console.log(str)
console.log(str[0])
console.log(str.constructor.name)

//?const cr
let strr = new String("zmohamed aj")
console.log(strr)
console.log(strr[0])
console.log(strr.constructor.name)
//?.replace take char or index or regex
let title = "iti&gmail.com"
console.log(title.replace('i',"-"))
console.log(title.replace(/i/gi,"-"))
console.log(title)
//?char at
console.log(title.charAt(3))
//?index of
console.log(title.indexOf('i'))

//?last index of
console.log(title.lastIndexOf("i"))

//?slice

console.log(title.slice(1,7))

//?substring

console.log(title.substring(7,1))

//?split
let kk="mohamed ahmed -abd elg@ni"
console.log(kk.split('-'))


