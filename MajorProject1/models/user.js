const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },  //username aur password isme define nhi krte cause wo passport local mongoose automatically kredega/store krwa deta h chahe hum yha likhe ya nhi
    image: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_1280.png",
        set: (v) =>
          v === ""
            ? "https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_1280.png"
            : v,
      },
});

userSchema.plugin(passportLocalMongoose);  //username, hashing, salting  and hashed password + some useful methods (read docs) inn sbko automatically implement krdega 

module.exports = mongoose.model("User",userSchema);