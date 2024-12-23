// let btns = document.querySelectorAll("button");
// // console.dir(btns);
// // btn.onclick = function () {
// //     console.log("button was clicked");
// // }

// function sayHello() {
//     alert("Hello");
// }
// for(like of btns){
//     like.onclick = sayHello;
//     like.onmouseenter = () => {
//         console.log("you entered a button");
//     }
// }

// Event Listener

// for(btn of btns){
//     btn.addEventListener("click",()=>{console.log("button clicked")});
//     btn.addEventListener("dblclick",()=>{console.log("button clicked 2 times")});
//     btn.addEventListener("mouseenter",()=>{console.log("you entered the area")});
//     btn.addEventListener("mouseleave",()=>{console.log("you leave the area")});
// }


// Event Listeners for paragraphs
// let p = document.querySelector("p");
// p.addEventListener('click',()=>{console.log("paragraph clicked")});
// let div = document.querySelector(".box");
// div.addEventListener('mouseenter',()=>console.log("mouse inside div"));

// this in Event Handler
// let div = document.querySelector(".box");
// div.addEventListener('mouseenter',this);

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");
// function changeColor(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "orange";
// };
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// });
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);

// let btn = document.querySelector("button");
// btn.addEventListener("click",()=>{console.log(this)});

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// Keyboard Events
// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(event) {
//     // console.log(event);
//     console.log(event.key);
//     console.log(event.code);
//     console.log("you just pressed a key.");
// });
// inp.addEventListener("keydown",function(event){ 
//     if(event.key=='w'){
//         console.log("Character moves forward");
//     } else if(event.key=='s'){
//         console.log("Character moves backward");
//     } else if(event.key=='a') {
//         console.log("Character moves left");
//     }
//     else if(event.key=='d'){
//         console.log("Character moves right");
//     } else if(event.key=='ArrowUp'){
//         console.log("Character moves forward");
//     } else if(event.key=='ArrowDown'){
//         console.log("Character moves backward");
//     } else if(event.key=='ArrowLeft') {
//         console.log("Character moves left");
//     } else if(event.key=='ArrowRight'){
//         console.log("Character moves right");
//     } 
// });


// Form Events

let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
//     let inp = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     console.log(inp.value);
//     console.log(pass.value);
//     console.log(`${inp.value} has a password = ${pass.value}`);
});
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let inp = this.elements[0];
//     let pass = this.elements[1];
//     console.log(inp.value);
//     console.log(pass.value);
//     console.log(`${inp.value} has a password = ${pass.value}`);
// });

let user = document.querySelector("#user");
user.addEventListener('change',function(event){
    event.preventDefault();
    console.log(user.value);
});
user.addEventListener('input',function(event){
    event.preventDefault();
    console.log(user.value);
});