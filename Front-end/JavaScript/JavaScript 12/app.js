// let jsonRes = JSON.parse('{"message":"https:\/\/images.dog.ceo\/breeds\/dane-great\/n02109047_2630.jpg","status":"success"}');
// // console.log(jsonRes);

// console.log(jsonRes.status);

// let student = {
//     name: "krishan",
//     age: 23
// };


let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     console.log(res);
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })

// async and await combination with fetch

async function getFacts(){
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    } catch(err) {
        console.log(err);
    }
    
}

getFacts();