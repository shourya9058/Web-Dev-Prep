const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js");
const { request } = require("http");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));


main()
.then(()=>{
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let chat1 = new Chat({
//     from: "shourya",
//     to: "paras",
//     msg: "padhne p dhyaan dele",
//     created_at: new Date() //will automatically generate the date
// });

// chat1.save().then((res)=>{
//     console.log(res);
// });


// Ab hum database ko kuch sample data se initiaize krenge so that kbhi kuch testing krni h ya database agr khali aur aur kuch function perfrom krna h toh wo uss data se ho jae iske liye we will create chat.init.js, isse hum baar baar nhi sb starting me ek baar initialize krne k liye hi run krenge

// index route

app.get("/chats", async (req,res)=>{
    let chats = await Chat.find(); //bina condition k Chat.find() krenge so that saara data return krde, ab kyuki yeh database se data laa rha h isiliye yeh ek asynchornous function hoga isiliye callback ko async bnake iske aage await lgana hoga


    res.render("index.ejs",{chats});
})

//new route 

app.get("/chats/new", (req,res)=>{
    res.render("new.ejs");
})

// create route
app.post("/chats",(req,res)=>{
    let {from ,to ,msg} = req.body;
    let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date() //will automatically generate the date
        });

        newChat.save()  //yeh bhi ek asynchronous work h but yha await nhi lga rhe kyuki jha then lgate h wha awaut nhi lgate js usse automatically await krwa deta h

        // DB mein kuch bhi add, delete, update ya fetch krna sb asynchronous kaam h
        .then(res => {
            console.log("Your Chat is saved!");
        })
        .catch(err=>{
            console.log(err);
        });

        res.redirect("/chats");
});

// edit route
app.get("/chats/:id/edit",async (req,res)=>{
    let {id} = req.params;
   let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

// update route for changed message

app.put("/chats/:id", async (req,res)=>{
    let updatedTime = new Date();
    console.log(updatedTime);
    let {id} = req.params;
    let {newMsg} = req.body;
    let updatedChat =await Chat.findByIdAndUpdate(id, {msg:newMsg},{runvalidators:true, new:true});
    // let newtime = await Chat.findByIdAndUpdate(id, {created_at:updatedTime},{runvalidators:true, new:true}).toString().split(" ")[4];
    // console.log(updatedChat);
    res.redirect("/chats");
})

// destroy route 
app.delete("/chats/:id", async(req,res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})


port = 8080;

app.get("/", (req,res)=>{
    res.send("Working page");
})


//realLife projects mein hum index.js mein nhi balki alg ek file mein schemas bnate h cause wha p bhut saare schemas hote h that's why we will use the folder "models" here for the same

// Basically the chat app sort of project will have: (_id,from,to,message,create_at)


app.listen(port, ()=>{
    console.log(`Listening at port ${port}`);
})