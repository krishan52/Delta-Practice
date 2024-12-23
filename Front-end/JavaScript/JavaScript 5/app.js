// const student = {
//     name: "krishan",
//     age: 21,
//     marks:98.6,
//     city: "Faridabad"
// };

// const obj = {
//     1: "a",
//     2:"b",
//     true:"c",
//     null:"d",
//     undefined:"e"
// }

// Thread/Twitter Post
// const post = {
//     username:"Krishan",
//     content:"related",
//     likes: 13123,
//     reposts:23,
//     tags: ["@delta","@google"]
// };
// console.log(post);


// Add/Update Values
// const student={
//     name:"Krishan",
//     age:23,
//     marks:98.6,
//     city:"Delhi"
// };
// student.city = "Mumbai";
// console.log(student.city);
// student.gender = "female";
// console.log(student.gender);
// console.log(student);
// student["grade"] = "O";
// console.log(student);
// delete student["marks"];
// console.log(student);

//Nested Objects or Object of Objects
// const classinfo = {
//     aman:{
//         grade:"A+",
//         city:"Delhi"
//     },
//     krishan:{
//         grade:"A",
//         city:"Pune"
//     },
//     karan:{
//         grade:"O",
//         city:"Mumbai"
//     }
// };

// console.log(classinfo.aman.grade);
// classinfo.krishan.city = "Faridabad";
// console.log(classinfo.krishan.city);

// Array of Objects

// const classinfo = [
//     {
//         name:"Krishan",
//         grade:"A+",
//         city:"Faridabad"
//     },
//     {
//         name:"Aman",
//         grade:"A",
//         city:"Delhi"
//     }
// ];
// // console.log(classinfo);
// console.log(classinfo[0]);
// console.log(classinfo[0]["grade"]);
// classinfo[0].grade = "O";
// console.log(classinfo[0].grade);

// Math Object Random Integers

// let num = Math.random();
// num = num*100;
// num = Math.floor(num);
// num = num + 1;
// console.log(num);

// Practice Question
// Question 1
// let num = Math.random();
// num = num*100;
// num = Math.floor(num);
// num = num + 1;
// console.log(num);

// Question 2
// let num = Math.random();
// num = num*5;
// num = Math.floor(num);
// num = num + 1;
// console.log(num);

// Guessing Game bu me
// let num = Math.random();
// num = num*10;
// num = Math.floor(num);
// num = num + 1;
// let yournum = prompt("Guess your number and Enter -1 to quit:");
// yournum = parseInt(yournum);
// while(yournum!=-1){
//     if(yournum==num){
//         console.log("your are right.");
//         break;
//     }
//     else if(yournum<num){
//         console.log("Slightly increase your number");
//     }
//     else if(yournum>num){
//         console.log("Slightly decrease your number");
//     }
//     yournum = prompt("Guess your number and Enter -1 to quit");
// }

// // OR by didi
// const max = prompt("Enter your max number:");
// console.log(max);

// const random = Math.floor(Math.random() * max) + 1;
// let guess = prompt("Guess the number:");

// while(true){
//     if(guess == "quit") {
//         console.log('user quit');
//         break;
//     }
//     if(guess == random) {
//         console.log("your are right: congrats!! random number was",random);
//         break;
//     } else if(guess < random){
//         guess = prompt("Hint : your guess was too small, please try again");
//     }
//     else if(guess > random){
//         guess = prompt("yHint : our guess was too large, please try again");
//     }
// }


// Assignment Questions

// Question 1
// let num = Math.floor(Math.random() * 6) + 1;
// let guess = prompt("Guess your number:");
// while(true){
//         if(guess == "quit") {
//             console.log('user quit');
//             break;
//         }
//         if(guess == random) {
//             console.log("your are right: congrats!! random number was",random);
//             break;
//         } else if(guess < random){
//             guess = prompt("Hint : your guess was too small, please try again");
//         }
//         else if(guess > random){
//             guess = prompt("yHint : our guess was too large, please try again");
//         }
        
//     }

// Question 2
// const car = {
//     name: "Ferrari",
//     model: "top",
//     color:"red"
// };
// console.log(car.name);

// Question 3
const person = {
    name: "krishan",
    age: 20,
    city: "Faridabad"
};
console.log(person.city);
person.city = "New York";
console.log(person.city);
person.country = "United States";
console.log(person);