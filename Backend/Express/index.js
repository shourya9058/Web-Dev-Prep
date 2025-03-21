const express = require("express");

const app = express();

let port = 3000;

app.listen(port,()=>{                           /* Listen creates a web server that will listen for the incoming requests*/ 
    console.log(`listening on port ${port}`);
})

// app.use((req,res)=>{           //use sb request k liye same hi response deta h but if we need different responses for different requests then we will use app.get*

//     console.log("request received");

//     res.send({
//     name: "response",
//     status: "send successfully"
// });

// });


// Routing: Different Urls p different cheeze show krna

// app.get("/",(req,res)=>{                 //provies different responses for different requests, ek request k liye ya toh get ya fir use method use krna dono nhi*
//     res.send("You contacted root path via get request!");
// });
// app.get("/search",(req,res)=>{
//     res.send("You contacted search path!");
// });
// app.get("/home",(req,res)=>{
//     res.send("You contacted home path!");
// });

// app.get("*",(req,res)=>{     //Glt request k liye else ka case
//     res.send("This page does not exist!");
// })

// app.post("/",(req,res)=>{                 //provies different responses for different requests, ek request k liye ya toh get ya fir use method use krna dono nhi*
//     res.send("You contacted root path via post request!");
// });


// Request Parameters: Request k saath additional data/variables bhejte h taaki baar baar get/post wala function na likhna padhe

app.get("/:username/:id",(req,res)=>{  
    let{username, id} = req.params;     //req.params mein wo value aaegi jo hum url mein as a parameter daal rhe h, unko hum username aur id name k variable mein save kr rhe h        
    res.send(`welcome to the page of @${username}`)
});

//for query strings:

app.get("/search",(req,res)=>{  
    let{q} = req.query;  
    res.send(`search results for query: ${q}`)
});