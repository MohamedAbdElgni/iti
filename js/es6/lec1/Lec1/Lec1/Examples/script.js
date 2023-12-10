

// const x = {a:10}

// x.a = 30;


// console.log(x);


// //                          var                                let                         const
// // scope        global m3da l func                  block scope             blok scope
// // hoisting             yes                                 yes                             yes
// // redec                yes                                 no                              no
// // reassign             yes                                 yes                         3la 7asb
// let tmp = true;
// if (true) {
// //   console.log(tmp);

//   let tmp;
//   console.log(tmp);

//   tmp = 123;
//   console.log(tmp);
// }
// console.log(tmp);


// reset params
function sum(...myArr) {
    console.log(myArr); // [[]]
    let sumRes = 0;
    for (let numb of myArr) {
         sumRes += numb;
    }
    // for (let i = 0; i < myArr.length; i++) {
    //     sumRes += myArr[i];
    // }
    // let res = x + y;
    console.log(sumRes);
}

// let ages = [10, 20, 30, 40, 50, 60]; // []
// sum(...ages);
// spread op
// let ages = [10, 20, 30, 15, 13];

// // let res = Math.min(10, 20, 5);
// let res = Math.min(...ages);

// console.log(res);



// let person = {
//     isLive: true,
//     age: 33
// }


// let user = {
//     name: "nour",
//     salary: 1231
// }

// let res = {person, user}
//     console.log(res);


// let ages = [10, 20, 30];
// let ages2 = [50, 60, 70];
// let res = [...ages, ...ages2];

// console.log(res);


// function myFun(a, b, ...manyMoreArgs) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("manyMoreArgs", manyMoreArgs);
// }

// myFun("one");

// destruct
let person = {
    name: "ahmed",
    age: 33,
    salary: 44444,
    wife: {
        name: "aya",
        age: 30,
        salary: 1000,
        son: {
            name: "abdo",
            age: 3
        }
    }
}

// let salay = person.salary
// let age = person.age;

let { salary, age } = person;



let a = 1;
let b = 3;


[a, b] = [b, a];
console.log(a);
console.log(b);




