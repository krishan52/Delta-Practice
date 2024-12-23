// Question 1
// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// console.log(arr.slice(num).slice(num));


// Question 2
// let number=287152;
// let count = 0;
// let copy = number;
// for(let i=number;i>0;){
//     count++;
//     i = Math.floor(i/10);
// }
// console.log(count);

// // OR
// let number=287152;
// let count = 0;
// let copy = number;
// while(copy > 0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);

// Question 3
// let num = 287152;
// let copy = num;
// let sum = 0;
// for(let i=0;i<(copy.length);i++){
//     let rem =  copy%10;
//     sum = sum + rem;
//     num = Math.floor(copy/10);
// }
// console.log(sum);

// Question 4
// let num = prompt("Enter your number:");
// num = parseInt(num);
// let fact = 1;
// for(let i=1;i<=num;i++){
//     fact = fact * i;
// }
// console.log(fact);

// Question 5
let num = [2,4,5,5,6,62,1,2];
let largest = -Infinity;
for(let i=0;i<num.length;i++){
    if(num[i]>largest){
        largest = num[i];
    }
}
console.log(largest);
