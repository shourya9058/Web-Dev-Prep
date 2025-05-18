const express = require("express");
const app = express();
// const users = require("./routes/user.js");
// const posts = require("./routes/post.js");
const session = require("express-session");
//install express-session
const path = require("path");

const flash = require("connect-flash");

app.set("view engine", "ejs"); //connect flash ko use krne k liye views ko use krna padhta h
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {secret: "mysupersecretstring", resave: false, saveUninitialized: true}; //yeh dono k baare mein thode padh liyo docs se
app.use(session(sessionOptions)); 

app.use(flash());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
})

app.get("/register",(req,res)=>{
    let {name = "anonymous"} = req.query;
    // console.log(req.session); //hrr request ya session k saath yeh req.session jarur hota aur hum isme apne according variables bhi add krwa skte h, ex:
    req.session.name = name; //yeh name new variable create hua h
    console.log(req.session.name);
    // res.send(name); //ab ek session k liye hum iss name variable ko dusre routes p bhi access kr skte h
    if(name==="anonymous"){
        req.flash("error", "user not registered");
    }else{
        req.flash("success", "user registered successfully"); //key-message pair dena hota h
    }
    
    res.redirect("/hello");
});

app.get("/hello",(req,res)=>{
    //res.send(`Hello ${req.session.name}`); //yha use kr rhe h
    // console.log(req.flash("success")); //isko comment nhi krega toh yeh message ko render krne se pehele hi consume krlega

    // let msg = req.flash("success");
    // res.render("page.ejs",{name: req.session.name, msg: msg });

    //Ab res.locals ek property hoti h jo ki hum use kr skte h agr hume kuch variables page k saath render krane h toh unn variables ko store krwane k liye we can use this

    // res.locals.messages = req.flash("success"); //messages k name se save ho jaega
    
    res.render("page.ejs",{name: req.session.name}); 

    
});

// Flash messages: Wo messages jo ek baar pop-up hote h aur jb hum refresh krlete firr gayab ho jaate wo flash messages hote h, they are used to show various things like error, success, etc. These messages are stores in the sessions only.

// "connect-flash" is a middleware that will help us in displaying these messages
//npm i connect-flash










//counting number of requests:

// app.get("/reqcount",(req,res)=>{
//     if(req.session.count){ //agr session h toh number badha do 
//         req.session.count++;
//     }
//     else{
//         req.session.count = 1; //werna initialize krdo
//     }
    
//     res.send(`You sent a request ${req.session.count} times`);
// });

//Abhi development phase mein storage k liye hum memory store (simple js base temporary memory storage provide krta h) ko use krlenge but production k time p we have to some external and relianle data stores or session stores

//alg tabs p same website open krne se bhi session ek hi mana jaega

// app.get("/test",(req,res)=>{ //ab hrr request k liye browser p nayi connection id automatically add ho jaegi
//     res.send("test successful");
// });




app.listen(3000,()=>{
    console.log("server is listening to port 3000");
});