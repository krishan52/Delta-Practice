let inp = document.querySelector("#task");
let list = document.querySelector("ul");
let add = document.querySelector("#add");
add.addEventListener("click",function(event){
    let item = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.innerText = inp.value;
    list.appendChild(item);
    item.appendChild(delBtn);
    inp.value = "";
});

list.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        event.target.parentElement.remove();
    }
    // console.log("button clicked");
})

// let delBtns = document.querySelectorAll(".delete");
// for(delbtn of delBtns){
//     let para = delbtn.parentElement;
//     delbtn.addEventListener("click",function(){
//         para.remove();
//     });
// }