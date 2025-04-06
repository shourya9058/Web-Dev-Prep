const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path"); //views se ejs pages render krwane k liye
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate"); //basically bhut saare templates/layouts create krne mein help krte h jo hrr page mein same rehte h like navBar ya footer
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {ListingSchema} = require("./schema.js");


port = 8080;

let mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("DB working fine")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongo_url);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/",(req,res)=>{
    res.send("App is live!");
});

const validateListing = (req,res,next) =>{ //Joi wali functionality ko middle ware bnane k liye ek function kein daal diya
    let {error} = ListingSchema.validate(req.body); //JOI will now validate the request body by itself   
     if(error){
        let errMsg = error.details.map((el)=> el.message).join(","); //error ki individual details ko map krenge with it's message and will separate them with ",";
        throw new ExpressError(400, errMsg);
     }else{
        next();
     }
}

// Model: Listing -> Places (apartment, villas, flat, house, etc)
// --> title - String
// --> description - String
// --> image (url, for beginner level) - String
// --> price - Number
// --> location - String
// --> country - String

// app.get("/testListing", async (req,res)=>{
//     let sampleListing = new Listing({
//         title: "my new villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India",
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });

//Index route

app.get("/listings",validateListing,wrapAsync(async (req,res)=>{ //passing validateListing as a middleware so that pehle yeh call ho
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs",{allListings});
    })
);

    
//new route

app.get("/listings/new",(req,res)=>{
    res.render("./listings/new.ejs");
})

//Show route

app.get("/listings/:id",wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
})
);

//create route
// app.post("/listings",async (req,res,next)=>{
    // try{
    //     // let {title, description, image, price, location, country} = req.body;
    // // let listing = req.body.listing;
    // const newListing = new Listing(req.body.listing);
    // await newListing.save();
    // res.redirect("/listings");
    // } catch(err){
    //     next(err);
    // }
    
    app.post("/listings",wrapAsync(async (req,res,next)=>{
     
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");  //wrapAsync function basically try catch block ka kaam krta h bss yeh usse jyada efficeint hota h
    })
);

//edit route

app.get("/listings/:id/edit",wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
})
);

//update route

app.put("/listings/:id",validateListing,wrapAsync(async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing}); //deconstruction the paramaters present in the req.body.listing object
    res.redirect(`/listings/${id}`);
})
);



//Delete route

app.delete("/listings/:id",wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
})
);


app.all("*",(req,res,next)=>{ //agr upr kisi bhi listing se match nhi hua toh yha hoga (jo create hi nhi kiye unhe access krte time yeh kaam krega)
    next(new ExpressError(404,"Page not found!"));
})


// middleware to handle server side errors
app.use((err,req,res,next)=>{
    //res.send("Something went wrong!"); //normal way
    let {statusCode=500, message='Something went wrong!'} = err;
    // res.status(statusCode).send(message);  //using ExpressError class (custom error)

    res.status(statusCode).render("error.ejs", {message});
});



app.listen(port, ()=>{
    console.log(`Listening at port:  ${port}`);
});