const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then(()=> console.log("Connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    addresses: [ {
        _id: false, //_id attribute add nhi krega mongoDB isse
        location: String,
        city: String
    },
],
})

User = mongoose.model("User", userSchema);

const addUsers = async()=>{
    let user1 = new User({   
        username: "Shaurya",
        addresses: [{
            location: "kanth road",
            city: "Moradabad"
        }]
    });
    user1.addresses.push(
            {
                location: "prabhat market",
                city: "Moradabad"
            }
        )

    let result = await user1.save();
    console.log(result);
}

addUsers();

