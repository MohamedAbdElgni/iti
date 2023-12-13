// // "use strict";




// // function test() {
// //     console.log(this);
// // }

// // test()

// // document.body.addEventListener("click",  () => {
// //     console.log(this);
// // })


//  // // // const x = {a:10}

// // // // x.a = 30;


// // // // console.log(x);


// // // // //                          var                                let                         const
// // // // // scope        global m3da l func                  block scope             blok scope
// // // // // hoisting             yes                                 yes                             yes
// // // // // redec                yes                                 no                              no
// // // // // reassign             yes                                 yes                         3la 7asb
// // // // let tmp = true;
// // // // if (true) {
// // // // //   console.log(tmp);

// // // //   let tmp;
// // // //   console.log(tmp);

// // // //   tmp = 123;
// // // //   console.log(tmp);
// // // // }
// // // // console.log(tmp);


// // // // reset params
// // // function sum(x,y,...myArr) {
// // //     console.log(myArr); // [[]]
// // //     let sumRes = 0;
// // //     for (let numb of myArr) {
// // //          sumRes += numb;
// // //     }
// // //     // for (let i = 0; i < myArr.length; i++) {
// // //     //     sumRes += myArr[i];
// // //     // }
// // //     // let res = x + y;
// // //     console.log(sumRes);
// // // }

// // // // let ages = [10, 20, 30, 40, 50, 60]; // []
// // // // sum(...ages);
// // // // spread op
// // // // let ages = [10, 20, 30, 15, 13];

// // // // // let res = Math.min(10, 20, 5);
// // // // let res = Math.min(...ages);

// // // // console.log(res);



// // // // let person = {
// // // //     isLive: true,
// // // //     age: 33
// // // // }


// // // // let user = {
// // // //     name: "nour",
// // // //     salary: 1231
// // // // }

// // // // let res = {...person, ...user}
// // // //     console.log(res);


// // // let friends1 = ["ahmed", "ali"];
// // // let friends2 = [...friends1];

// // // friends2[0] = "nour"
// // // console.log("friends1 =>", friends1);
// // // console.log("friends2 =>", friends2);

// // // let person = {
// // //     name: "ahmed",
// // //     age: 30,
// // //     b: {
// // //         c: 1
// // //     }
// // // }


// // // let { name } = person;

// // // console.log(name);

// // // let person2 = JSON.parse(JSON.stringify(person))

// // // person2.name = "nour"
// // // person2.b.c = "treka"
// // // console.log("person =>", person);
// // // console.log("person2 =>", person2);

// // // // let ages = [10, 20, 30];
// // // // let ages2 = [50, 60, 70];
// // // // let res = [...ages, ...ages2];

// // // // console.log(res);


// // // // function myFun(a, b, ...manyMoreArgs) {
// // // //   console.log("a", a);
// // // //   console.log("b", b);
// // // //   console.log("manyMoreArgs", manyMoreArgs);
// // // // }

// // // // myFun("one");

// // // // destruct
// // // let person = {
// // //     name: "ahmed",
// // //     age: 33,
// // //     salary: 44444,
// // //     wife: {
// // //         name: "aya",
// // //         age: 30,
// // //         salary: 1000,
// // //         son: {
// // //             name: "abdo",
// // //             age: 3
// // //         }
// // //     }
// // // }

// // // // let salay = person.salary
// // // // let age = person.age;

// // // let { salary, age } = person;



// // // let a = 1;
// // // let b = 3;


// // // [a, b] = [b, a];
// // // console.log(a);
// // // console.log(b);







// // // let arr = [1, 2, 3, 4, 5, 6, 7, 8];


// // // let [a, , , b, ...c] = arr;


// // // console.log(a);
// // // console.log(b);
// // // console.log(c);

// // // template literal
// // // default params

// // // function sayHi(userName = "ahmed", age=40, salary) {
// // //     console.log(`hello my name is ${userName}, my age is ${age} and my salary is ${salary}`);
// // // }


// // // sayHi()

// // // sayHi("nour",30)

// // // declaration



// // // expression

// // // arrow function

// // // let test = function () {
// // //     // console.log("hiii");
// // //     return "bteee5"
// // // }


// // // let test = () => "bteee5";


// // // let x = "bteee5";
// // // console.log(x);



// // // const sum = function (a, b) {
// // //     return a + b;
// // // }

// // // const sum =  (a, b) => a + b;


// // // const res = sum(10, 20);
// // // console.log(res);
// // // console.log(this); //window


// // // this
// // let user = {
// //     name: "ahmed",
// //     age: 30,
// //     salary:4000,
// //     course: "ES6",
// //     sayHi() {
// //         return function () {
// //           console.log(this); //window
// //           return `hello ${this.age}`;
// //         }.bind(this);
// //     }
// //     // sayHi: function () {
// //     //     console.log(this);
// //     //     return `Hello from the other side, my name is ${this.name}`
// //     // },
// //     // calcSalary: function () {
        
// //     //     const  calcVat =  () =>this.salary * 0.2
// //     //     return this.salary - calcVat();
// //     // }
// // }

// // let x = user.sayHi()()
// // console.log(x);
// // // .bind()
// // // console.log(user.sayHi());
// // // console.log(user.calcSalary());
// // // const calcVat = () => this.salary * 0.2;
 
// // // const calcVat = () =>   this.salary * 0.2;



// // let str = "welcome ro EcmaScript 2015 ";
// // console.log("str ===>", str.trim());
// // console.log("str ===>", str.trimStart());

// // console.log("str ===>", new String().);
// // console.log("str ===>", new String().codePointAt("C"));

// // let x = new String("nour")

// // // .repeat()
// // console.log( x);
// // console.log("str ===>",str);




// // let user = {
// //     userName: "Ahmed",
// //     cource: "ES6",
// //     age: 20,
// //     address:"Alex"
// // }


// // // let newUser = { ...user }
// // let newUser = Object.assign(user)

// // newUser.userName = "treka";

// // console.log("new user =>", newUser);
// // console.log(" user =>", user);




// // let newUser = Object.assign(user);



// // console.log(Object.keys(user));

// // console.log(Object.values(user));
// // console.log(Object.entries(user));





// // let ages = [10, 20, 15, 18, 16, 33, 27];

// // let sum = ages.reduce(function (acc, age,index) {
// //     return acc + age;
// // }, 20);

// // console.log(sum);
// // let sum = 0;

// // for (let i = 0; i < ages.length; i++) {
// //     sum +=ages[i]
// // }

// // console.log(sum);

// // let els = document.querySelectorAll("p");
// // els = Array.from(els)
// // console.log(els);



// // let myObj = { a: 1, b: 2, c: 3 };
// // console.log(myObj);
// // for (const ele of ages) {
// //   console.log(`${ele} `);
// // }

// // let res = ages.map( (age,index) => age *2)
// // let res = ages.every((age,index) => age > 3);
// // let res = ages.some((age,index) => age > 3);



// // console.log(res);
// // let res = [];

// // for (let i = 0; i < ages.length; i++) {
// //     res.push(ages[i] * 2)
// // }
// // console.log(res);



// // let res = [];

// // for (let i = 0; i < ages.length; i++) {
// //     if (ages[i] > 18) {
// //         res.push(ages[i])
// //     }
// // }

// // let res = ages.filter( (age) =>  age > 10)

// // console.log(res);

// // Set ..
// // Promise
// // Modules
// // class


// // let ages = [10, 20, 30, 10, 20];

// // console.log("ages =>", ages);
// // let res =Array.from( new Set(ages))
// // console.log("res =>", res);


// // res.push


// // let x = new Set();

// // x.add(10)
// // x.add(20);
// // x.add(30);
// // x.add(10);

// // console.log(x);


// // let res = x.delete(10)
// // console.log(  x  );


// // let user = {
// //     userName: "ahmed",
// //     3: "treka",
// //     null: "asda",
// //     []:[123]
// // }

// // let user = {
// //     userName: "ahmed",
// //     age : 30
// // }
// // let x = new Map(Object.entries(user));




// // console.log(x);
// // x.set([1, 2], [10, 20])
// // x.set("userName", "nour");
// // x.set("age",30)
// // x.set("userName", "nour");


// // console.log(x);


// // for (const [key,value] of x) {
// //     console.log("key =>", key);
// //     console.log("value =>", value);

// // }


// let pizza = `https://forkify-api.herokuapp.com/api/search?q=pizza`;
// let pasta = `https://forkify-api.herokuapp.com/api/search?q=pasta`;
// let beef = `https://forkify-api.herokuapp.com/api/search?q=beef`;




// function getPizza() {
//     return new Promise(function (callBack) {
//       let myHTTp = new XMLHttpRequest();
//       myHTTp.open("GET", pizza);
//       myHTTp.send();
//       myHTTp.addEventListener("readystatechange", function () {
//         if (myHTTp.readyState == 4) {
//           console.log(JSON.parse(myHTTp.response), "pizza");
//           //   x()
//           callBack();
//         }
//       });
//     });

// }

// function getPasta() {
//     return new Promise(function (callBack,handleError) {
//       let myHTTp = new XMLHttpRequest();
//       myHTTp.open("GET", pasta);
//       myHTTp.send();
//       myHTTp.addEventListener("readystatechange", function () {
//         if (myHTTp.readyState == 4) {
//           console.log(JSON.parse(myHTTp.response), "pasta");
//           callBack();
//         } else {
//             handleError();
//         }
//       });
//     });
  
// }
// function getBeef() {
//   let myHTTp = new XMLHttpRequest();
//   myHTTp.open("GET", beef);
//   myHTTp.send();
//   myHTTp.addEventListener("readystatechange", function () {
//     if (myHTTp.readyState == 4) {
//       console.log(JSON.parse(myHTTp.response), "beef");
//     }
//   });
// }
// // getPizza(function () {
// //     getPasta(getBeef);
// // })

// function handleEror() {
//     console.log("err")
// }
// getPizza()
//   .then(function () {
//     getPasta().then(getBeef);
//   })
//   .catch(handleEror)
//   .finally();


// // async function fire() {
// //     await getPizza()
// //     await getPasta()
// //     getBeef()
// // }

// // fire()




// // promise
// // getPasta()
// // getBeef()









// let userAge = 20;

// function success() {
//     console.log("success");
// }

// function btee5() {
//     console.log("error");
// }

// let x = new Promise(function (resolve, reject) {
//     if (userAge > 16) {
//         resolve()
//     } else {
//         reject()
//     }
// });

// x.then(success).catch(btee5)

// modules ....


// import btee5 from './calcSalary.js';


// let res = btee5("nour", "Saeed");


// console.log(res);



// let instructor = {
//     name: "ahmed",
//     age: 30,
//     address: "alex",
//     havACar: false,
//     couces: "Frontend",
//     tracks: "Python"
// }
// OOP ....class based
// ...prototypebased


// let User = function (name, age, add, tracks) {
//    name = name;
//     this.age = age;
//     this.add = add;
//     this.tracks = tracks;
// }


// let nour = new User("nour", 30, "alex", "FE");

// console.log(nour);


// class BaseUser {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class User extends BaseUser {
//      y = "ads"
//     constructor (name, age, add, tracks) {
//         super(name,age)
//         if (add) {
//             this.add = add;
//         }
          
//           this.tracks = tracks;
//     }
//       sayHi() {
//         console.log("nour", this.age);
//     }
// }
// class Admin extends BaseUser {

//     count = 0
//     constructor (name, age, add, tracks, role) {
//         super(name, age);
//         this.count += 1;
//         this.role = role

//     }

//   adminRole(role) {
//     this.role = role;
//   }

//   get getAdmin() {
//     return this.role;
//   }
// }

// let x = new User("nour", 30, "alex", "FE");

// x.sayHi()


// let y = new User("nour", 80, "alex", "FE");

// y.sayHi();



// let newAdmin = new Admin("ahmed", 33, "cairo", "python");
// newAdmin.adminRole("newAdmin")

// console.log(newAdmin);



// let newAdmin2 = new Admin("ahmed", 33, "cairo", "python");
// newAdmin2.adminRole("newAdmin");

// console.log(newAdmin2);



let elems = document.getElementsByClassName("test");


for (let i = 0; i < elems.length; i++) {
    elems[i].innerHTML ="Good Bye"
}
let x = document.getElementById("bl7")

console.log(x);