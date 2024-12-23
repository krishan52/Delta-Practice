// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// Callback Hell

// h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange) {
//     setTimeout( () => {
//         h1.style.color = color;
//         nextColorChange();
//     },delay);   
// };

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=> {
//         changeColor("green",1000,() => {
//             changeColor("blue",1000,() => {
//                 changeColor("pink",1000,() => {
//                     changeColor("violet",1000);
//                 });
//             });
//         });
//     });
// });



// Promises

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
    
// };

// savetoDb("Hello",()=>{
//     console.log("Success 1:your data was saved");
//     savetoDb("hello world",()=>{
//         console.log("Success 2:your data was saved");
//         savetoDb("Krishan Kaushik",() => {
//             console.log("Success 3:your data was saved");
//         },() => {
//             console.log("failure 3:weak connection,failure your data was not saved");
//         })
//         },()=> { 
//             console.log("failure 2:weak connection,your data was not saved")}
//         );
// },()=>{
//     console.log("failure 1:weak connection,your data was not saved");
// });


// function savetoDb(data) {
//     return new Promise((resolve,reject) =>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4) {
//             resolve("success: data was saved");
//         } else {
//             reject("weak connection,data was not saved");
//         }
//     });
// };

// let request = savetoDb("apna College."); // req = promise object

// request 
// .then(()=>{
//     console.log("success");
// })
// .catch(()=>{
//     console.log("failure");
// })


// Improved Version

// savetoDb("apna College")
// .then((result)=>{
//     console.log("Data1 saved,promise was resolved",result);
//     return savetoDb("hello world");
// })
// .then((result)=>{
//     console.log("Data2 saved,promise was resolved",result);
//     return savetoDb("krishan kaushik");
// })
// .then((result)=>{
//     console.log("Data3 saved,promise was resolved",result);
// })
// .catch((error)=>{
//     console.log("failure",error);
// })

// Color Code Optmised Version

// let h1 = document.querySelector("h1");

// function changeColor(color,delay) {
//     return new Promise((resolve,reject) => {
//         setTimeout( () => {
//             h1.style.color = color;
//             resolve("color changed");
//         },delay);
//     })
//     };
    
// changeColor("red",1000).then(() => {
//     console.log("red completed");
//     return changeColor("blue",1000);
// })
// .then( () =>{
//     console.log("blue completed");
//     return changeColor("green",1000);
// }) 
// .then( () => {
//     console.log("green completed");
//     return changeColor("orange",1000);
// })
// .then( () => {
//     console.log("orange completed");
// })
// .catch( (error) => {
//     console.log("promise rejected");
//     console.log(error);
// });

// Async Functions

// async function greet() {
//     // throw "some random errorr";
//     return "hello world";
// };

// greet()
// .then( (result) => {
//     console.log("promise was successful",result);
// })
// .catch( (err) => {
//     console.log("failure occur",err);
// });

// let demo = async () => {return "Hi"};

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             let num = Math.floor(Math.random() * 10) +1;
//             console.log(num);
//             resolve();
//         },1000);
        
//     });
// };

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }

// Color Change by await keyword
let h1 = document.querySelector("h1");

async function changeColor(color,delay) {
        return new Promise((resolve,reject) => {
            setTimeout( () => {
                let num = Math.floor(Math.random() * 10) + 1;
                if(num > 3) {
                    reject("404 PAGE NOT FOUND");
                }
                h1.style.color = color;
                console.log(`color changed to ${color}`);
                resolve("color changed");
            },delay);
        })
        };
        
async function demo() {
    try{
        await changeColor("red",1000);
        await changeColor("blue",1000);
        await changeColor("green",1000);
        await changeColor("yellow",1000);
        changeColor("orange",1000);
        let a = 5;
        console.log(a);
    }
    catch(err){
        console.log("error is:",err);
    }

};