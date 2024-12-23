// Activity 1
// let btn = document.querySelector("button");
// let h2 = document.querySelector("h2");
// btn.addEventListener("click",function(){
//     let randomColor = getRandomColor();
//     h2.innerText = randomColor;
//     let div = document.querySelector(".innerdiv");
//     div.style.backgroundColor = randomColor;
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

// Activity 2
let inp = document.querySelector("#text");
let p = document.querySelector("p");
inp.addEventListener('input',function(){
    console.log(this.value);
    p.innerText = this.value;
});
