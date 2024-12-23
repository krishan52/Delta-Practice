// const student = {
//     name: "krishan",
//     age: 21,
//     eng :98,
//     math: 97,
//     phy: 99,
//     getAvg() {
//         console.log(this);
//         let avg = (this.eng+this.math+this.phy)/3;
//         console.log(avg);
//         console.log(`${this.name} got avergae marks = ${avg}`);
//     }
// }
// function getAvg() {
//     console.log(this); // Print Window Object and it is on the higher level and all the code are inside it
// }

// Try and Catch block 
// console.log("hello world");
// console.log("hello world");
// try{
//     console.log(a);
// } catch(error) {              // (err) catch error
//     console.log("caught an error variable a doesn't exist");
//     console.log(error);
// }
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");

// Arrow Functions
// const sum = (a,b) => {
//     console.log(a+b);
// }
// sum(5,3);

// Another arrow function
// const cube = (n) => {
//     return n * n * n;
// }
// console.log(cube(6));

// Another arrow function
// const pow = (a,b) => {
//     return a**b;
// }
// console.log(pow(2,4));

// Implicit return in arrow function
// const mul = (a,b) => (
//     a * b
// );
// console.log(mul(3,8));

// const sum = (a,b) => a + b;
// console.log(sum(3,5));

// Set Timeout
// console.log("hi there!");
// setTimeout( () => {
//     console.log("Apna College");
// }, 4000);
// console.log("welcome to");

// Set Interval
// let id = setInterval( () => {
//     console.log("Apna College");
// },2000);
// console.log(id);

// let id2 = setInterval( () => {
//     console.log("Hello World");
// },3000);
// console.log(id2);

// this with Arrow Functions
// const student = {
//     name:"krishan",
//     marks:95,
//     prop: this,
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this);
//         return this.marks;
//     },
//     getInfo1: function(){
//         setTimeout( () => {
//             console.log(this);    //student
//         },2000 );
//     },
//     getInfo2: function(){
//         setTimeout( function() {
//             console.log(this);    //window 
//         },2000 );
//     }
// };

// Practice Question 1
// const square = (n) => {
//     console.log(n * n);
// };
// square(5);

// OR 
// let square = n => n * n;
// console.log(square(4));

// Question 2
// let id = setInterval( () => {
//     console.log("Hello World");
// },2000);

// setTimeout( () => {
//     clearInterval(id);
//     console.log("Clear Interval ran");
// },10000);

// Assignment Questions 
// Question 2
// const isEven = (n) => {
//     if(n%2 == 0){
//         return "Even";
//     } else { 
//         return "odd";
//     }
// };
// console.log(isEven(8));

// Question 3
// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,1000);

// Question 4
let length = 4;
function callback() {
    console.log(this.length);
}
