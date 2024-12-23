let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function() {
    if(started == false) {
        console.log("Game Started");
        started = true;
        levelUp();
    } 
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },100);
}


function levelUp() {
    userSeq = [];

    level++;
    h2.innerText = `Level ${level}`;

    //random button choose
    let randomIdx = Math.floor(Math.random()*3)+1;
    let randColor = btns[randomIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    btnFlash(randBtn);
}

function checkBtn(idx) {
    // console.log(`current level: ${level}`); printing level of game
    
    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b><br>Press any key to Start`;
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector("body").style.color = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },100);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    // console.log(userColor); checking color of user
    userSeq.push(userColor);
    // console.log(userSeq);   printing the sequence of user array 
    checkBtn(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0; 
}

// Develop a function which shows highest score of all time