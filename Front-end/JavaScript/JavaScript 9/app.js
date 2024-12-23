// let pic = document.getElementsByClassName("oldImg");
// for(let i=0;i<pic.length;i++){
//     pic[i].src="assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed.`);
// }

// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("#description"));

// console.dir(document.querySelectorAll("div img"));

// let links = document.querySelectorAll(".box a");
// for(let i=0;i<links.length;i++){
//     links[i].style.color = "purple";
// }
// let box = document.querySelector(".box");
// box.classList.add('yellowbg');

// Practice Question Set 1
// let p1 = document.createElement("p");
// let h3 = document.createElement("h3");
// let div = document.createElement("div");
// let p2 = document.createElement("p");    
// p1.innerText = "Hi,I'm red!";
// h3.innerText = "I'm a blue h3!";
// p1.style.color = "red";
// h3.style.color = "blue";
// p2.innerText = "ME TOO!!!";
// let body = document.querySelector("body");
// body.append(p1);
// body.append(h3);
// div.classList.add("box");
// let h1 = document.createElement("h1");
// h1.innerText = "I'm in a div";
// body.append(div);
// div.appendChild(h1);
// div.appendChild(p2);

// Practice Questions Set 2
let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click me";
let body = document.querySelector("body");
body.append(input);
body.insertAdjacentElement("afterend",btn);
btn.classList.add("btn");
