const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const {ListingSchema, reviewSchema} = require("./schema.js");


module.exports.isLoggedIn = (req,res,next) =>{
    if(!req.isAuthenticated()){
        //redirect url save - agr koi user edit krne gya aur humne usse login krne ko bola toh log in k baad he should be redirected to the edit page and to the All listings page

        //Iske liye hum uski requested path ko phele store krwa from "req.originalUrl" aur firr agr login ho jaata h toh user ko redirect krwa denge

        req.session.redirectUrl = req.originalUrl;
        req.flash("error","You must be LoggedIn to add a listing!"); 
        return res.redirect("/login");
    }
    next();
};

//hum apne redirectUrl ko locals mein save krenge kyuki by default passport session se isko delete krdeta h after every login but locals ka access nhi hota uspe 

module.exports.saveRedirectUrl = (req,res,next) =>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

//Middleware for authorization
module.exports.isOwner = async(req,res,next)=>{
    let {id} = req.params;
    //Authorization for editing
    let listing = await Listing.findById(id);
    if(!res.locals.currUser || !listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error", "Only owners can edit a listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}


function convertStringBooleans(listing) {
  const booleanFields = [
    'immediateAvailability',
    'amenities.attachedBathroom',
    'amenities.kitchenAccess',
    'amenities.wifi',
    'amenities.ac',
    'amenities.laundry',
    'amenities.parking',
    'rules.smoking',
    'rules.pets',
    'rules.guests',
    'rules.curfew',
    'bills.included',
  ];

  for (const field of booleanFields) {
    const keys = field.split('.');
    let obj = listing;

    for (let i = 0; i < keys.length - 1; i++) {
      if (!obj[keys[i]]) obj[keys[i]] = {}; // safely build nested object if not exists
      obj = obj[keys[i]];
    }

    const key = keys[keys.length - 1];

    if (obj[key] === 'on') obj[key] = true;
    else if (obj[key] === 'off') obj[key] = false;
  }

  return listing;
}

module.exports.validateListing = (req, res, next) => {
  if (req.body.listing) {
    req.body.listing = convertStringBooleans(req.body.listing); // ✅ fix checkbox values
  }

  const { error } = ListingSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};


module.exports.validateReview = (req,res,next) =>{ //Joi wali functionality ko middle ware bnane k liye ek function kein daal diya
    let {error} = reviewSchema.validate(req.body); //JOI will now validate the request body by itself   
     if(error){
        let errMsg = error.details.map((el)=> el.message).join(","); //error ki individual details ko map krenge with it's message and will separate them with ",";
        throw new ExpressError(400, errMsg);
     }else{
        next();
     }
}


module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;

    // Fetch the review from the Review model
    const review = await Review.findById(reviewId);

    if (!review || !review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "Only the author of this review can delete it");
        return res.redirect(`/listings/${id}`);
    }

    next();
};