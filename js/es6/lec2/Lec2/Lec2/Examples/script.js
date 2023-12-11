// "use strict";




// function test() {
//     console.log(this);
// }

// test()

// document.body.addEventListener("click",  () => {
//     console.log(this);
// })


 // // // const x = {a:10}

// // // x.a = 30;


// // // console.log(x);


// // // //                          var                                let                         const
// // // // scope        global m3da l func                  block scope             blok scope
// // // // hoisting             yes                                 yes                             yes
// // // // redec                yes                                 no                              no
// // // // reassign             yes                                 yes                         3la 7asb
// // // let tmp = true;
// // // if (true) {
// // // //   console.log(tmp);

// // //   let tmp;
// // //   console.log(tmp);

// // //   tmp = 123;
// // //   console.log(tmp);
// // // }
// // // console.log(tmp);


// // // reset params
// // function sum(x,y,...myArr) {
// //     console.log(myArr); // [[]]
// //     let sumRes = 0;
// //     for (let numb of myArr) {
// //          sumRes += numb;
// //     }
// //     // for (let i = 0; i < myArr.length; i++) {
// //     //     sumRes += myArr[i];
// //     // }
// //     // let res = x + y;
// //     console.log(sumRes);
// // }

// // // let ages = [10, 20, 30, 40, 50, 60]; // []
// // // sum(...ages);
// // // spread op
// // // let ages = [10, 20, 30, 15, 13];

// // // // let res = Math.min(10, 20, 5);
// // // let res = Math.min(...ages);

// // // console.log(res);



// // // let person = {
// // //     isLive: true,
// // //     age: 33
// // // }


// // // let user = {
// // //     name: "nour",
// // //     salary: 1231
// // // }

// // // let res = {...person, ...user}
// // //     console.log(res);


// // let friends1 = ["ahmed", "ali"];
// // let friends2 = [...friends1];

// // friends2[0] = "nour"
// // console.log("friends1 =>", friends1);
// // console.log("friends2 =>", friends2);

// // let person = {
// //     name: "ahmed",
// //     age: 30,
// //     b: {
// //         c: 1
// //     }
// // }


// // let { name } = person;

// // console.log(name);

// // let person2 = JSON.parse(JSON.stringify(person))

// // person2.name = "nour"
// // person2.b.c = "treka"
// // console.log("person =>", person);
// // console.log("person2 =>", person2);

// // // let ages = [10, 20, 30];
// // // let ages2 = [50, 60, 70];
// // // let res = [...ages, ...ages2];

// // // console.log(res);


// // // function myFun(a, b, ...manyMoreArgs) {
// // //   console.log("a", a);
// // //   console.log("b", b);
// // //   console.log("manyMoreArgs", manyMoreArgs);
// // // }

// // // myFun("one");

// // // destruct
// // let person = {
// //     name: "ahmed",
// //     age: 33,
// //     salary: 44444,
// //     wife: {
// //         name: "aya",
// //         age: 30,
// //         salary: 1000,
// //         son: {
// //             name: "abdo",
// //             age: 3
// //         }
// //     }
// // }

// // // let salay = person.salary
// // // let age = person.age;

// // let { salary, age } = person;



// // let a = 1;
// // let b = 3;


// // [a, b] = [b, a];
// // console.log(a);
// // console.log(b);







// // let arr = [1, 2, 3, 4, 5, 6, 7, 8];


// // let [a, , , b, ...c] = arr;


// // console.log(a);
// // console.log(b);
// // console.log(c);

// // template literal
// // default params

// // function sayHi(userName = "ahmed", age=40, salary) {
// //     console.log(`hello my name is ${userName}, my age is ${age} and my salary is ${salary}`);
// // }


// // sayHi()

// // sayHi("nour",30)

// // declaration



// // expression

// // arrow function

// // let test = function () {
// //     // console.log("hiii");
// //     return "bteee5"
// // }


// // let test = () => "bteee5";


// // let x = "bteee5";
// // console.log(x);



// // const sum = function (a, b) {
// //     return a + b;
// // }

// // const sum =  (a, b) => a + b;


// // const res = sum(10, 20);
// // console.log(res);
// // console.log(this); //window


// // this
// let user = {
//     name: "ahmed",
//     age: 30,
//     salary:4000,
//     course: "ES6",
//     sayHi() {
//         return function () {
//           console.log(this); //window
//           return `hello ${this.age}`;
//         }.bind(this);
//     }
//     // sayHi: function () {
//     //     console.log(this);
//     //     return `Hello from the other side, my name is ${this.name}`
//     // },
//     // calcSalary: function () {
        
//     //     const  calcVat =  () =>this.salary * 0.2
//     //     return this.salary - calcVat();
//     // }
// }

// let x = user.sayHi()()
// console.log(x);
// // .bind()
// // console.log(user.sayHi());
// // console.log(user.calcSalary());
// // const calcVat = () => this.salary * 0.2;
 
// // const calcVat = () =>   this.salary * 0.2;



// let str = "welcome ro EcmaScript 2015 ";
// console.log("str ===>", str.trim());
// console.log("str ===>", str.trimStart());

// console.log("str ===>", new String().);
// console.log("str ===>", new String().codePointAt("C"));

// let x = new String("nour")

// // .repeat()
// console.log( x);
// console.log("str ===>",str);




// let user = {
//     userName: "Ahmed",
//     cource: "ES6",
//     age: 20,
//     address:"Alex"
// }


// // let newUser = { ...user }
// let newUser = Object.assign(user)

// newUser.userName = "treka";

// console.log("new user =>", newUser);
// console.log(" user =>", user);




// let newUser = Object.assign(user);



// console.log(Object.keys(user));

// console.log(Object.values(user));
// console.log(Object.entries(user));





let ages = [10, 20, 15, 18, 16, 33, 27];

let sum = ages.reduce(function (acc, age,index) {
    return acc + age;
}, 20);

console.log(sum);
// let sum = 0;

// for (let i = 0; i < ages.length; i++) {
//     sum +=ages[i]
// }

// console.log(sum);

// let els = document.querySelectorAll("p");
// els = Array.from(els)
// console.log(els);



// let myObj = { a: 1, b: 2, c: 3 };
// console.log(myObj);
// for (const ele of ages) {
//   console.log(`${ele} `);
// }

// let res = ages.map( (age,index) => age *2)
// let res = ages.every((age,index) => age > 3);
// let res = ages.some((age,index) => age > 3);



// console.log(res);
// let res = [];

// for (let i = 0; i < ages.length; i++) {
//     res.push(ages[i] * 2)
// }
// console.log(res);



// let res = [];

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] > 18) {
//         res.push(ages[i])
//     }
// }

// let res = ages.filter( (age) =>  age > 10)

// console.log(res);

