// // Fetching the data from an API using JAvascript

// // fetch(url) -->SyntaxError
// // -->fetch() returns a Promise, that means we can use the promise functions on it i.e., then(executed when promise is fulfilled) and catch(executed when promise is not fulfilled)

// // let url = "https://catfact.ninja/fact";

// // fetch(url)
// // .then((res)=>{
// //     console.log(res); //sirf header bhi mil jae tbh bhi promkse ko fulfilled consider krta h, zaroori nhi hrr baar data ho hi
// //     return res.json(); //converts into readble format, yeh bhi promise return krta h
// // })
// // .then((data)=>{  //res,json wale promise k fulfil hone p chlega yeh
// //     console.log(data);
// //     console.log(data.fact); //ab particular entry/key inside the data bhi print krwa skte h
// // })
// // .catch((err)=>{
// //     console.log("Error -",err);
// // });
// // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // Same Code using async Function:

// // let url = "https://catfact.ninja/fact";

// // async function getFact() {
// //    try{
// //     let res = await fetch(url);
// //     let data = await res.json();
// //     console.log(data.fact);
// //    }
// //    catch(e){
// //     console.log("Error: ",e);
// //    }

// //    console.log("Aage ka kuch bhi kaam upr wale promise fail hone p unaffected rahega!");
// // }
// // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------Random Cat Fact Generating code using the above logic-----------------------------------------------------------



// Old/Lengthy Version:
// let url = "https://catfact.ninja/fact";
// function req(){
//     return fetch(url) //yeh ni likhenge toh pure function ki return value null jaegi aur promise return nhi hoga due to which eventListener bhi nhi chalega
// .then((res)=>{
//     console.log(res); 
//     return res.json(); //yeh sirf then() k andar chl rha h isiliye iske likhe k baad bhi fucntion null return krega agr fetch(url) return nhi krenge
// })
// .then((data)=>{  //res,json wale promise k fulfil hone p chlega yeh
//     console.log(data);
//     return data.fact; //ab particular entry/key inside the data bhi print krwa skte h
// })
// .catch((err)=>{
//     console.log("Error -",err);
// });
// }

// // New/Smart Version:
// let url = "https://catfact.ninja/fact";
// function req(){
//     return getFact();
//     async function getFact(){
//         try{
//             let res = await axios.get(url);
//            return res.data.fact;
//         }
//         catch(e){
//                 console.log("Error: ",e);
//                 return "No fact found!"
//                }
//     }
// }

// let buttn = document.getElementById("btn");
// let text = document.getElementById("text");
// buttn.addEventListener("click",async ()=>{  //async callback cause we are calling an asynchronous function
//     let fact = await req();
//     text.innerText = fact;
// });

// //---------------------------------------------------------------------------------------------------------------------------------------------------------------------


// // Same getFact Function using Axios:
// // let url = "https://catfact.ninja/fact";
// // async function getFact(){
// //     try{
// //         let res = await axios.get(url);
// //        console.log(res.data.fact);
// //     }
// //     catch(e){
// //             console.log("Error: ",e);
// //            }
// // }
// // --------------------------------------------------Random Dog Images Generating code using the above logic---------------------------------------------------------

// let url2 = "https://dog.ceo/api/breeds/image/random";

// async function req2() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;  // This contains the image URL
//     } catch (e) {
//         console.log("Error: ", e);
//         return "/"; // Default image in case of an error
//     }
// }

// let buttn2 = document.getElementById("btn2");
// let dis = document.getElementsByClassName("dis")[0]; // Select the first element with class "dis"

// buttn2.addEventListener("click", async () => {
//     let link = await req2(); // Wait for the image URL

//         dis.style.backgroundImage = `url('${link}')`; // Set background image
// });

// //-------------------------------------------------------------Passing Header in Axios-------------------------------------------------------------------------------


// let url3 = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try{
//         const config = {headers: {Accept: "application/json"}}  //pehle data html code ki format mein aa rha tha isiliye yeh header add kiya ab data readable json format mein aa rha h
//         let data = await axios.get(url3,config); //header wala element as a second argument yha pass krna hoga
//         console.log(data.data.joke);
//     }
//     catch(e){
//         console.log("Error - ",e);
//     }
// }

let newUrl = "http://universities.hipolabs.com/search?name=";

let btn = document.getElementById("country");

btn.addEventListener("click",async () => {
    let list = document.getElementById("result");
    list.innerHTML = "";
    let country = document.querySelector("input").value;
    let colleges = await getCollege(country);
    show(colleges);
})

function show(colleges){
    let list = document.getElementById("result");
    for(col of colleges){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }

}

async function getCollege(country){
    try{
        let res = await axios.get(newUrl+country);
        return res.data;
    }
    catch(e){
        console.log("Error: ",e);
        return [];
    }
}
