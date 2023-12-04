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

//! dont use associative array 

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

//? splice take three params  first--> the start to delet sec-->how much to delete the rest is to add

console.log(arr.splice(0,2,-40,'hh',500,900,600)) //~return deleted elements or empty if not
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
console.log(fil)

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