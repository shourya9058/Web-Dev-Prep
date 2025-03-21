// EJS = Emdedded Javascript BookTemplate.

// --> Template mtlb agr multiple pages ya components h jo baar baar use honge like insta ka account page toh hrr baar new page nhi bnaenge instead we will make a template and whi template mein changes krke multiple pages create kiye jaenge.

// Now EJS is a simple templating language that allows us to generate simple html markup using plain Javascript.

const express = require("express");
const path = require("path");  //path ek package h toh isko bhi require krna padega, yeh server iss directory se bhr run krne pr bhi ejs ko views wala folder dhundne mein help krega

const app = express();

app.use(express.static("public")); //used to render additional files like css files, iske liye ek public folder hona zaruri h cause yeh public folder hi access krega

app.set("view engine","ejs")     //yeh app engine ko  ejs set krdeta h....App engine template render krne k liye use hota h
app.set("veiws", path.join(__dirname, "/veiws")); //iss line se server bhr start krne pr bhi ejs will be able to find veiws

app.get('/',(req,res)=>{
    res.render("home.ejs")  //ejs k through hum send nhi render krte h, render means ki badi badi files bhejna where send k through sirf strings, html, boolean, objects jaisi cheeze bheji jaa rha thi
})
const port = 8080;

app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
})

//veiws name k ek folder bnaenge cause render krne k liye files k liye ejs issi folder ko dhundega.
//views k andar home.ejs bnaenge jisme html+js ka ek mix code hoga jo hum firr render krwaenge


// Interpolation in EJS - Interpolation ka matlab hota hai dynamic values ko HTML me inject karna. EJS me interpolation ke liye 3 tarike hote hain:

// <%= %> → Secure render ke liye
// <%- %> → Raw HTML ke liye
// <% %> → JS logic ke liye

app.get("/dice",(req,res)=>{
    let num = Math.floor(Math.random()*10)+1; //suppose this value is coming from the database
    res.render("roll.ejs", {num}); //toh isko as an object pass krdenge aur firr isko hum roll.ejs mein bhi use kr paenge display krne k liye
})


// Insta like ejs activity:

// app.get("/ig/:username", (req,res)=>{
//     const followers = ["adam","steve","bob","jake","mike"];
//     let {username} = req.params;
//     res.render("insta.ejs",{username, followers});
// })

// Handling data like instagram for practice:

app.get("/ig/:username", (req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
        if(data){
            res.render("insta.ejs",{ data });
        }else{
            res.render("error.ejs",{ username });
        }
    }) 