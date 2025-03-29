const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}



let newChats = [
    {
        from: "ronaldo",
        to: "messi",
        msg: "siuuuuu!",
        created_at: new Date() //will automatically generate the date
    },
    {
        from: "neymar",
        to: "mbappe",
        msg: "gook luck kiddo",
        created_at: new Date() //will automatically generate the date
    },
    {
        from: "brahim",
        to: "simmone",
        msg: "speak now!",
        created_at: new Date() //will automatically generate the date
    },
    {
        from: "anceloti",
        to: "press",
        msg: "hala madrid!!!",
        created_at: new Date() //will automatically generate the date
    },
]

Chat.insertMany(newChats)
.then((res)=>{
    console.log(res);
});

// now run nodemon init.js

//Ab jb bhi khali database mein hume sample data dalna hoga toh hum bs yha aake isko run krwa denge 

