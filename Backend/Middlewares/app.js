// <--- In this doc we will learn how to createown own error handlers and other advanced stuff  --->

const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");


const checkToken = (req,res,next)=>{
    let {token} = req.query; 
    if(token === "giveaccess"){ 
        next();
    }
        throw new ExpressError(401,"Access Denied"); 
       
}
app.get("/api",checkToken,(req,res)=>{ 
    res.send("data");
});


app.get("/",(req,res)=>{
    res.send("Hi I'm root!");
});
app.get("/random",(req,res)=>{
    res.send("this is a random page");
});

app.get("/err",(req,res)=>{
    abcd = abcd;
})

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access is forbidden");
});

app.use((err,req,res,next)=>{ //error handler mein ek extra argument 'err' add ho jaata h
    let {status=500,message="Some error occurred"} = err; //default values di h incase kuch aisa error occur ho jo ki defined hi na ho upr
    res.status(status).send(message); //front end p custom error show krne k liye
});

// Ab to present the error in a good way or return custom messages and code, we use Error classes


app.listen(8080,()=>{
    console.log("server is listening to port 8080");
})



