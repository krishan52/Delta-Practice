// function sum(a=5){
//     console.log(a+b);
// }
// sum(4,b=6);

// let name = [..."Krishan"];
// console.log(name);

// let even = [2,4,6,8,10];
// let odd = [1,3,5,7,9];
// let newarr = [...even,...odd];
// console.log(newarr);

// Spread with objects
// let data = {
//     email: "kk792102@gmail.com",
//     password: "abcd"
// };
// let dataCopy = {...data,id:123};
// console.log(dataCopy);

// Rest
// function sum(...args){
//     console.log(arguments);
//     return args.reduce((add,el)=> add+el);

// }

// Destructuring
// let arr = ["kk","neil","sonu","monu"];
// let [first,second,third] = arr;
// console.log(first,second,third);

let obj = {
    boy: {
        name: "Krishan",
        age: 21
    },
    girl: {
        name: "Monika",
        age: 23
    }
};
let {boy:man,girl:woman} = obj;
console.log(man);