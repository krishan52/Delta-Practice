// let fruits = ["mango","apple","banana","litchi","orange"];
// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }

// for odd numbers

// let fruits = ["mango","apple","banana","litchi","orange"];
// for(let i=1;i<fruits.length;i=i+2){
//     console.log(i,fruits[i]);
// }

// for even numbers

// let fruits = ["mango","apple","banana","litchi","orange"];
// for(let i=0;i<fruits.length;i=i+2){
//     console.log(i,fruits[i]);
// }

// for reverse

// let fruits = ["mango","apple","banana","litchi","orange"];
// for(let i=fruits.length-1;i>=0;i--){
//     console.log(i,fruits[i]);
// }

// Nested loops with nested arrays

// let heroes = [["ironman","spipderman","thor"],["superman","wonder woman","flash"]];
// for(let i=0;i<heroes.length;i++){
//     for(let j=0;j<heroes[i].length;j++){
//         console.log(i,j,heroes[i][j]);
//     }
// }

// Student information

// let student = [["aman",95],["krishan",94.4],["karan",100]];
// for(let i=0;i<student.length;i++){
//     console.log(`info of student ${i+1}`)
//     for(let j=0;j<student[i].length;j++){
//         console.log([i],[j],student[i][j]);
//     }
// }

// for of loop

// let fruits = [["mango","apple","banana","litchi","orange"]];
// for(hlo of fruits){
//     console.log(hlo);
// }

// for(char of "apnacollege"){
//     console.log(char);
// }

// for(num of [1,2,3,4,5,6,7,8]){
//     console.log(num);
// }

// for(name of "Krishan Kaushik"){
//     console.log(name);
// }

// Nested for of loops

let heroes = [["superman","batsman","wonder woman"],["spiderman","ironman","thor"]];
for(hero of heroes){
    for(name of hero){
        console.log(name);
    } 
    
}

