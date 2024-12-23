// let btn = document.querySelector("button");

// btn.addEventListener("click",async function(){
//     let fact = await getFacts();
//     console.log(fact);
//     let result = document.querySelector("#output");
//     result.innerText = fact;
// })

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch(e) {
//         console.log("Error -",e);
//         return "No Fact Found!";
//     }
// }


// Getting some random dog images
// btn.addEventListener("click",async () => {
//     let link = await getImages();
//     let img = document.querySelector("img");
//     // console.log(link);
//     img.setAttribute("src",link);
// })



// let url = "https://dog.ceo/api/breeds/image/random";

// async function getImages() {
//     try {
//         let res = await axios.get(url);
//         return res.data.message;
//     } catch(e) {
//         console.log("Error - ",e);
//         return "No Image Found!";
//     }
// }


// Sending header with requests with axios
// const url = "https://icanhazdadjoke.com/";

// async function getjokes() {
//     try{
//         const config = {headers:{Accept:"Application/json"}};''
//         let res = await axios.get(url,config);
//         console.log(res.data.joke);
//     } catch(e) {
//         console.log("Error - ",e);
//     }
   
// }

// getjokes();


// Update Query Strings 

let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async function(){
    let country = document.querySelector("input").value;
    console.log(country);
    let colleges = await getCollege(country);
    // console.log(colleges);
    show(colleges);
})

function show(colleges) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(let i=0;i<colleges.length;i++){
        let li = document.createElement("li");
        li.innerText = colleges[i].name;
        list.appendChild(li);
    }
}

async function getCollege(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
    } catch(e) {
        console.log("Error - ",e);
        return [];
    }
}