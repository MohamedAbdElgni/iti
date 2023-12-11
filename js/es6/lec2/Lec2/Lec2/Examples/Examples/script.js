// ES6 - 1

// var num = 5;

// console.log(num);

// num = 6;

// console.log(num);

// var num = 8;

// console.log(num);

// -----------------

// function displayNum() {
//     var num = 10; // Function Scope
//     return num;
// }

// console.log(num);

// console.log(displayNum());

// displayNum(); // 10

// console.log(num);

// if (true) {
//     var num = 15;
// }

// console.log(num);

// -------------------
// x = 6;

// console.log(x);

// var x;

// console.log(x);

// console.log(sayHello());

// function sayHello() {
//     return `Welcome to ES6`;
// }

//--------------------- var summary:

/*
    1- Stored in global scope unless it's defined within a function ( function scope )
    2- Some problems:
        - Can be used more than one time ( Redeclare )
        - Can be hoisted
*/

// ---------------------------------------------------------------------

// let n = 3;

// console.log(n);

// n = 5;

// console.log(n);

// let n = 6;

// if (true) {
//     let n = 3;
//     console.log(n); //3
// }

// console.log(n); //5

// function testing() {
//     let n = 10;
//     return n;
// }
// console.log(n);

// --------------------

// let x = 10;

// if (true) {
//     x = 20;
// }

// console.log(x);

// for (let x = 0; x < 20; x++) {
//     console.log(x);
// }

// -----------------------

// x = 6;

// if (true) {
//     x = 5;
//     let y = 2;
// }

// console.log(y);

// x = 6; // Initiation

// console.log(x);

// let x; // Declaration

//--------------------- let summary:

/*
    1- Block scope
    2- Can't be redeclared
    3- Can't be hoisted
*/

// ---------------------------------------------------------------------

// const NUM = 5;

// NUM = 6;

// console.log(NUM);

// const obj = { name: "Mohammed" };

// obj.name = "Ahmed";

// console.log(obj);

// const arr = [1, 2, 3];

// arr.push(4);

// console.log(arr);

//--------------------- const summary:

/*
    1- Block scope
    2- Can't be redeclared or reassigned
    3- Can't be hoisted
    4- Can modify the non-primitive data ( Array - Object )
*/

// ---------------------------------------------------------------------

// function sumAllNumbers(num1, num2) {
//     return num1 + num2;
// }

// console.log(sumAllNumbers(6, 8, 7, 5));

// const arr = [1, 2, 3, 4, 5];

// for (let num of arr) {
//     console.log(num);
// }

// function sumAllNumbers(...numbers) {
//     let result = 0;
//     console.log(numbers);

//     for (let num of numbers) {
//         result += num;
//     }
//     //     // OR
//     //     // for (let i = 0; i < numbers.length; i++) {
//     //     //     result += numbers[i];
//     //     // }

//     return result;
// }

// console.log(sumAllNumbers(6, 8, 5, 10, 20, 30));

// ---------------------------------------------------------------------

// let arr1 = [1, 2, 3];

// let arr2 = [4, 5, 6];

// let groupArr = arr1.concat(arr2);

// let groupArr = [...arr1, ...arr2]; // [1,2,3,4,5,6]

// console.log(groupArr);

// let groupArr = [...arr1, ...arr2, 7, 8, 9, ...[10, 11, 12]]; // Deep copy

// console.log(groupArr);

// const arr1 = [1, 2, 3];

// const arr2 = [...arr1];

// const arr1 = [0, [1, 2],
//     [3, 4]
// ];

// const arr2 = [...arr1];

// arr2[1][1] = 5;

// console.log(arr2);
// console.log(arr1);

// const arr2 = JSON.parse(JSON.stringify(arr1));

// arr2.push(4);

// console.log(arr2);
// console.log(arr1);

// arr2.push(4);

// console.log(arr2);

// let user = {
//     id: "#101",
//     username: "Ahmed Adel",
//     course: "ES6",
// };

// let person = {
//     age: 20,
//     address: "Alexandria",
// };

// let groupObj = {...user, ...person };

// console.log(groupObj);

// groupObj.age = 20;

// groupObj['address'] = 'Alexandria';

// console.log(groupObj);

// user = {...user, ...person };

// console.log(user);

// console.log(Math.max(5, 3, 9, 1, 6));
// console.log(Math.max(...[5, 3, 9, 1, 6]));

//---------------------------------------------------------------------------------------

// let a = 2,
//     b = 3;

// console.log("a =", a);
// console.log("b =", b);

// let temp;

// temp = a;

// a = b;

// b = temp;

// console.log("a =", a);
// console.log("b =", b);

// let a = 2,
//     b = 3;

// [a, b] = [b, a];

// console.log("a =", a);
// console.log("b =", b);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let [a, , , b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// let [a, b, c, d, , , e] = arr; //Skip
// console.log(a, b, c, d, e);

// let [a, b, ...c] = arr;

// console.log(a, b, c);

// let user = {
//     id: "#101",
//     username: "Ahmed Adel",
//     course: "ES6",
// };

// let username = user.username;

// let { username: fullName } = user;

// console.log(user);

// console.log(fullName);

//---------------------------------------------------------------------------------------

// let str = "Welcome to, ";
// let courseName = "ECMAScript 2015";

// console.log(`${str}${courseName}`);

// console.log(`${1 + 2 * 6}`);

// console.log("Line 1 \n", "Line 2");

// console.log(
//     `line 1
//      line 2
//     `
// );

// console.log(`<h1></h1>`);

// function displayMsg(name = "Ali", msg) {
//     console.log(
//         `Hello, my name is ${name}, ${msg}` // Template Literal
//     );
// }

// displayMsg(undefined, "Welcome To ES6");

//---------------------------------------------------------------------------------------

// let sumNums = function(a,b) {
// //     // Expression
//     return a + b;
// }

// const sum = function(a, b) {
//     return a + b;
// };

// const sum = (a, b) => a + b; // Expression
// console.log(sum(5, 6));

// const showMsg = message => message;

// console.log(showMsg("Hello from Arrow function"));

// let user = {
//     username: "Mohammed",
//     age: 20,
//     course: "ES6",
//     sayHello() {
//         // Regular  // sayHello: function() {}
//         console.log(this);
//         return `Hello, My name is ${this.username}`;
//     },
// };

// console.log(user.sayHello());

// let user = {
//     username: "Mohammed",
//     age: 20,
//     course: "ES6",
//     address: "Alexandria",
//     sayHello() {
//         return () => {
//             console.log(this);
//             return `Hello ${this.username}`;
//         };
//     },
// };

// console.log(user.sayHello()());

// call(scope), apply(scope), bind(scope)

// console.log(user.sayHello()());

// let user = {
//     username: 'Mohammed',
//     age: 20,
//     course: 'ES6',
//     address: 'Alexandria',
//     sayHello() {
//         return function() {
//             // Out of scope
//             return `Hello ${this.username}`
//         }.bind(this)
//     }
// }

// console.log(user.sayHello()());

// let user = {
//     username: 'Mohammed',
//     age: 20,
//     course: 'ES6',
//     address: 'Alexandria',
//     sayHello() {
//         let that = this;
//         return function() {
//             // Out of scope
//             return `Hello ${that.username}`
//         }
//     }
// }

// console.log(user.sayHello()());

// let user = {
//     username: 'Mohammed',
//     age: 20,
//     course: 'ES6',
//     address: 'Alexandria',
//     sayHello() {
//         return () => {
//             return `Hello ${this.username}`
//         }
//     }
// }

// console.log(user.sayHello()());

// let User = (name, age) => {
//     this.name = name;
//     this.age = age;
// };

// let p = new User("Mohammed", 20);
// console.log(p);

//---------------------------------------------------------------------------------------

// let str = "Welcome to EcmaScript 2015";

// console.log(str.trim());

// console.log(str.trimEnd());
// console.log(str);
// console.log(str.trimStart());

// console.log(str.startsWith("We"));
// console.log(str.startsWith("m", 5));

// console.log(str.endsWith("2015"));
// console.log(str.endsWith("o", 5));

// console.log(str.indexOf("e"));

// console.log(str.codePointAt("C"));

// console.log(str);
// console.log(str.trim());

// let str = "This is the example of strings, not about match";

// console.log(str.length); //47

// console.log(str.padStart(53, "."));
// console.log(str.padEnd(53, "."));

// console.log(str.includes("about"));

// console.log("*".repeat(6));

//---------------------------------------------------------------------------------------

// let user = {
//     username: "Mohammed",
//     age: 20,
//     course: "ES6",
//     address: "Alexandria",
// };

// let newUser = {...user};

// let newUser = Object.assign(user); // Deep copy

// console.log(newUser);

// console.log(Object.keys(user));

// console.log(Object.values(user));

// console.log(Object.entries(user));

// let user = {
//     username: "Mohammed",
//     age: 20,
//     course: "ES6",
//     address: "Alexandria",
// };

Object.freeze(user);

// user.id = "1";

// delete user.course;

// user.username = "Ahmed";

// console.log(user);

// console.log(Object.isFrozen(user));

// delete user.course

// console.log(user);

// let user = {
//     username: "Mohammed",
//     age: 20,
//     course: "ES6",
//     address: "Alexandria",
// };

// Object.seal(user);

// user.id = 1;

// delete user.course;

// user.username = "Ahmed";

// console.log(user);

// delete user.course;

// console.log(user);

// let newArr = arr.map((num) => num * 2); // New Array with same length
// console.log(newArr);

// let evenNumbers = arr.filter((num) => num % 2 === 0);

// console.log(evenNumbers); // New Array with same or less than length of the original array

// console.log(arr.every((num) => num > 3)); // Boolean &&
// console.log(arr.some((num) => num > 5)); // Boolean ||

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const sum = arr.reduce((acc, num, index) => {
//     if (index !== 3) {
//         return acc + num;
//     }
//     return acc;
// }, 0);

// console.log(sum);