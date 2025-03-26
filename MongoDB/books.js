// Schema Validations: Basically they are the rules for Schema

// Suppose amamzon jaisi website bna rhe h aur usme bhut alg lag services ya products sell kr rhe h toh waisa hi ek books ka alg product section le liya h ab isme books se related saara data store krenge

const mongoose = require('mongoose');

main()
.then(()=>{ 
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon'); //new DB i.e., "amazon"
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 200 //maximum character length
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        // min: 1 //(1 se choti value nhi add kr skte (mininum value))
        min: [1, "Price is too low to be listed"] //allows custom error message
    },
    discount:{
        type: Number,
        default:0 //Schema Validation option: agr ab discount ki value pass bhi nhi krenge tb bhi 0 automatically add kredega
    },
    category: {
        type: String,
        enum: ["fiction","non-fiction"] ,//enum sirf array mein pass ki gyi values ko hi allow krta h toh be inserted uske alawa kuch try kroge toh error aaega
        genre: [String] //allows to pass the array of string 
    }
});

const Book = mongoose.model("Book", bookSchema);

// Book.insertMany([
//     {
//         title: "Harry potter",
//         author: "JK rowling",
//         price: 350
//     },
//     {
//         title: "Three mistakes of my life",
//         author: "Chetan Bhagat",
//         price: 250
//     },
//     {
//         title: "Belated bachelors party",
//         author: "Ravindra",
//         price: 300
//     },
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// Book.deleteMany({title:"Harry potter"}).then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
//     });

// const book1 = new Book({
//     title: "Mein kampf",
//     author: "Adolf hitler",
//     price: 399
// })

// book1.save();  //most of the cheeze documentation se padhna ya refer krna h

// const book2 = new Book({
//     title: "Our impossible love story",
//     author: "Durjoy Datta",
//     price: 299,
//     category: "non-fiction",
// })

// book2.save();

// yeh saare rules insertion p valid honge but updation p work nhi krenge mtlb update krte time koi rules follow ho rhe h ya nhi yeh check nhi hoga

// but if we have ki update krte time p rules ka dhyaan rakha h jae toh we have to set the value of the option "runValidators" to "true"

// Book.findByIdAndUpdate('67e45771855e61154a6c5233', {price:150},{runValidators:true}, {new:true})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// to check custom error:

Book.findByIdAndUpdate('67e45771855e61154a6c5233', {price:-150},{runValidators:true}, {new:true})
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
})