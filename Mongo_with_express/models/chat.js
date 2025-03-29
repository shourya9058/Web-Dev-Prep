const mongoose = require("mongoose");
// mongoose require krna padega but main function se connection baar baar setup nhi krna cause yeh sirf schemas banane k liye ultimately isko hum indexedDB.js mein hi require kr rhe honge

const chatSchema = new mongoose.Schema({
    from:{
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    },
    msg:{
        type: String,
        maxLength: 50,
    },
    created_at:{
        type: Date, //Date bhi ek datatype hota h isme
        required: true
    },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;