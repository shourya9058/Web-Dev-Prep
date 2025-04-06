// Middlewares: Middlewares in express are functions that come into play after the server receives the request and before the resonse is sent to the client

const { Code } = require("lucide-react")

// ex: methodOverride, bodyparser, express.static, express.urlencoded

// What do middlewares do?
// -> Execute any Code
// -> Make changes to the request and the response objects (req,res objects ko access kr skte h)
// -> End the request-response cycle (can also send a response to stop chaining)
// -> Call the next middleware function in the stack (chaining kr skte h)

const express = require("express");
const app = express();

// Our first Middleware:
// syntax: application.use(Middleware)

// app.use((req,res)=>{ //yeh middleware hrr request k saath work krega isiliye hrr request p "middlware finsihed" hi aaega kyuki aage wali request run hi nhi hongi
//     let {query} = req.query;
//     console.log(query);
//     console.log("hi I'm a middleware"); //middleware ya toh khud response send kr skta h ya firr apna kaam krne k baad yeh apna control kisi aur function ko de skta h ya aage forward kr skta h
//     res.send("Middleware finished") //isne yhi se response bhej diya
// })


//generally middlewares response nhi bhejte instead wo next execution p flow tranfer krte h

// next() in middlewares: 
// The next middleware function is commonly denoted by a variable named next

// if the current middleware function does not end the request response CSSCounterStyleRule, it must call next() to pass control to the next middleware function

// ex: app.use((req,res,next)=>{
    // next();
//     console.log('This is next');
// });  yeh hrr request p chalega aur just beacuse it is not ending the req-res cycle it will be sending the control to the next function or route


// Creating an Utility Middleware:
// (will work as logger -> helps in logging/showing useful info on console )

//logger
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path,req.time);
//     next();
// });

// Creating a middleware that will check if the access token is passed with all the "/api" calls

// app.use("/api",(req,res,next)=>{
//     let {token} = req.query; // /api?token=giveaccess use kr rhe h i.e., query string
//     if(token === "giveaccess"){ //random token liye h
//         next();
//     }
//     else{
//         res.send("access denied!");
//     }
// })

// app.get("/api",(req,res)=>{
//     res.send("data");
// });

// Creating mutliple middleware, hum middle ware ko function bnake direct apni get/post type requests mein pass kr skte h jisse pehle wo yeh condition check krenge uske baad hi access denge:

const checkToken = (req,res,next)=>{
    let {token} = req.query; // /api?token=giveaccess use kr rhe h i.e., query string
    if(token === "giveaccess"){ //random token liye h
        next();
    }
    else{
        // res.send("access denied!");
        throw new Error("Access Denied"); //customized error
        
    }
}
app.get("/api",checkToken,(req,res)=>{ //kyuki humne check token sirf iss route min diya h isiliye baaki routes mein yeh kaam nhi krega
    res.send("data");
});


// app.use mein hum do type k argument pass krte h, i.e, path and method (req,res,next,etc), agr hum koi bhi path nhi dete toh yeh middleware saare routes/requests k liye work krega

app.use("/random", (req,res,next)=>{
    console.log("this is for random only"); //sirf "/random" p request aane p hi yeh work krega
    next();
})

// iss manner mein practically use yeh hota h middleware ka ki if we want ki ek particular page k baad user kuch bhi access krne k liye login kre ya authencicate kre toh hum usske middleware mein authencicatification ka code likh skte h

app.get("/",(req,res)=>{
    res.send("Hi I'm root!");
});
app.get("/random",(req,res)=>{
    res.send("this is a random page");
});

app.listen(8080,()=>{
    console.log("server is listening to port 8080");
})

// middlewares ko hamesha response sned krne se pehle rakhna h werna chalenge hi nhi

// upr wale kisi middleware se agr request match nhi hui toh yeh chalega
app.use((req,res,next)=>{ //no path given isiliye saari req except the ones mentioned above k liye chalega
    res.send("404 error! page not found");
})

// Read about middlewares like morgan, etc from the offical doc

// Handling errors:
// Express comes with a built in error handler
// yeh ek middleare hota h jo express humare code k end mein lga deta h automatically

// This handler returns the following info:
// res.statuscode -> status code of the request
// res.statusmessage -> status message
// The body of the status code mesaage
// Any headers specified in an err.headers object

// apart from this we can also create or thow customized errors, for example see the checkToken wala route