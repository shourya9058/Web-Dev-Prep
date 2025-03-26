// first open the terminal/cmd in administrator mode
//  ** To start mongoDB: net start MongoDB
//  ** To stop mongoDB: net stop MongoDB 

// Mongoose:

// A library that creates a connection between MongoDB & Node.js javascript runtime environment

// It is a an ODM (Object Data Modeling) library


// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test'); //test is the database iksijgh jis bhi database se connect krna hota h usse likh sskte h

// yeh connect ek asynchromous function hota h aur yeh databse se ek promise expect krta h execution h baad apne

// yeh step krna hi h mongoose connect krne k liye but isse pehle ek baar manually apna terminal se server start krna padega
const mongoose = require('mongoose');

main()
.then(()=>{ //whi promise wala concept ki agr resolve ho gya toh tehn wala block chalega werna catch wale block mein issue ko catch krlenge
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

// Schema: It defines the shape of the documents within that collection
const userSchema = new mongoose.Schema({ //using schema class
    name: String,
    email: String,
    age: Number,
});

// Model: In mongoose they are a class with which we construct documents
const User = mongoose.model("User",userSchema); //yeh User is the collection name(singlular name hona chahiye aur capital letter se start hona chahiye})
//Yeh User is the model name
// usually model aur collection ka name same hi rakhte h hum

// agr User pass kiya h toh mongoDB collection bnaega "users" name ki

const Employee = mongoose.model("Employee",userSchema);

// Insert:
// Inserting One:

// const user1 = new User({
//     name:"Shourya",
//     email:"shourya@gmail.com",
//     age:21
// });
// const user2 = new User({
//     name:"Paras",
//     email:"paras@gmail.com",
//     age:7
// });

// user1.save(); //save krna zaroori h werna collection update nhi hogi
// user2.save().then((res)=>{
//     console.log(`Result returned = ${res}`)
// })//also an asynchronous function that returns a promise
// .catch((err)=>{
//     console.log(`rror returned = ${err}`);
// })

// Insert Many:

// User.insertMany([
//     {
//         name:"Cristiano",
//         email:"cristiano@gmail.com",
//         age:40
//     },
//     {
//         name:"Messi",
//         email:"messi@gmail.com",
//         age:37
//     },
//     {
//         name:"Neymar",
//         email:"neymar@gmail.com",
//         age:34
//     },
// ]).then((data)=>{
//     console.log(data);
// });

// Mongoose uses Operation Buffering: Mongoose lets you start your models immediately, without waiting for mongoose to establish a connection to MongoDB

// find:

// User.find({})
// .then((res)=>{
//     console.log(`Findings = ${res}`);
// }).catch((err)=>{
//     console.log(`Error = ${err}`);
// })

// User.find({age:{$gt:7}})
// .then((res)=>{
//     console.log(`Findings = ${res}`);
// }).catch((err)=>{
//     console.log(`Error = ${err}`);
// })

// User.findOne({age:{$gt:7}})
// .then((res)=>{
//     console.log(`Findings = ${res.name}`);
// }).catch((err)=>{
//     console.log(`Error = ${err}`);
// });

// User.findById("67e4307584ae1d5bdf6a475f")
// .then((res)=>{
//     console.log(`Findings = ${res.name}`);
// }).catch((err)=>{
//     console.log(`Error = ${err}`);
// });

// Update:

// User.updateOne({name:"Shourya"}, {age: 22})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.updateMany({age:{$gt:7}}, {age: 22})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
//  yeh upr wale methods returns a meta data or query object but if we want the actual value after updation we use the below mentioned methods:

// User.findOneAndUpdate({name:"Shourya"}, {age: 22})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
//yeh purani value ko print krwata h cause yeh pehle find krta h firr update krta h

//To get the updated value, we use new option jiski value by default false set hoti h:

// User.findOneAndUpdate({name:"Shourya"}, {age: 24}, {new:true})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// same way mein findOneByIdAndUpdate() bhi kaam krega

// Delete:

// User.deleteOne({name:"Neymar"})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// }); //same way mein deleteMany() bhi work krega

// same manner mein findByIdAndDelete aur findOneAndDelete bhi work krenge

// User.findByIdAndDelete("67e432528cdf9bbfd56a0059")
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// Schema Validations: Basically they are the rules for Schema

