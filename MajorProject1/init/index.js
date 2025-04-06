//yeh folder se hum database ko initialize krenge aur even aage agr kbhi hume databse khali krke dobara data se reinitialize krna hua tb bhi hum issi se hi krenge

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

let mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("DB working fine");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongo_url);
}


const initDB = async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data); 
    console.log("data was iniialized")
};

initDB();