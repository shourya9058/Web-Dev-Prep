// One to squillion: Jb ek parent k million billion childs hote history, ab iss case mein hum parent mein child ka reference store krwane se badiya hrr child mein uske parent ka reference store krwate h kyuki wo toh ek hi hoga na

const { Import } = require("lucide-react");
const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then(()=> console.log("Connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);

// const addData = async()=>{
//     let user1 = new User({
//         username: "Shaurya07",
//         email: "imshourya07singh@gmail.com"
//     });

//     let post1 = new Post({
//         content: "Siuuuuu!",
//         likes: 750
//     });
//     post1.user = user1;

//     await user1.save();
//     await post1.save();
// }

// const addData = async()=>{
//     let user = await User.findOne({username: "Shaurya07"});
//     let post2 = new Post({
//         content: "camero wo wo!",
//         likes: 450
//     });
//     post2.user = user;
//     await post2.save();
// }

// addData();

// const del =async ()=>{
//     await User.findByIdAndDelete("67fbb1370406d4dd48187a8d");
// };

// del();

const getData = async ()=>{
    let result = await Post.findOne({}).populate("user","username");
    console.log(result);
};

getData();

// Read the docs named "6 Rules for thumb in MongoDB Schema", it is important, specially Two way referencing wala part

// Handling deletion:

// Basically jb related models hote h kaafi ssare aur hum kuch delete krte h toh usme broadly hum do cases se deal krte h, ex- agr user or post k case mein dekhe toh,
// Case 1:User delete hone pr saari posts aur related info bhi delete ho jae (cascading deletion)
// Case 2: User k delete hone pr sirf user delete ho but posts exist krti rahe (easy and basic)

// Hume acche se seekhna h Case 1, ab isko krne ka ek option yeh ho skte h ki hum posts ko ek ek krke access kre through user aur dusra method ho skta h by using "Mongoose Middleware" hume yhi seekhna h, mongoose ki documentation mein jaake middleware mein jaake query middleware padh liyo uske notes whi se dekhna


// iska implementation is in Customer.js