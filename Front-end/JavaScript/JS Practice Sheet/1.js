// function oddOrEvenFactory(request){
//     if(request ==" odd"){
//         return function(n){
//             console.log(!(n%2 == 0));
//         }
//     }
//     else if(request== "even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }
//     else{
//         console.log("Wrong Request.");
//     }
// }
// let request = "even";

let isEven = n => n%2 == 0;
isEven(5);
