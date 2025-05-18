const Listing = require("../models/listing.js");

module.exports.index = async (req,res)=>{ //passing validateListing as a middleware so that pehle yeh call ho
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs",{allListings});
    }

    module.exports.renderNewForm = (req,res)=>{
        console.log(req.user);
        res.render("./listings/new.ejs");
    }

    module.exports.showListing = async (req,res)=>{
        let {id} = req.params;
        const listing = await Listing.findById(id).populate({
            path: 'reviews',
            populate: {
              path: 'author'  // This populates the author field in each review
            }
          })
          .populate("owner");
        if(!listing){
            req.flash("error", "Requested listing does not exist!");
            res.redirect("/listings");
        }
        console.log(listing)
        res.render("listings/show.ejs", {listing});
    };

    module.exports.createListing = async (req,res,next)=>{
         let url = req.file.path;
         let filename =req.file.filename;
        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = {url, filename};
        await newListing.save();
        req.flash("success", "New Listing Created!");
        res.redirect("/listings");  //wrapAsync function basically try catch block ka kaam krta h bss yeh usse jyada efficeint hota h
        };

        module.exports.renderEditForm = async (req,res)=>{
            let {id} = req.params;
            const listing = await Listing.findById(id);
            if(!listing){
                req.flash("error", "Requested listing does not exist!");
                res.redirect("/listings");
            }
            let originalImageUrl = listing.image.url;
            originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250")
            res.render("listings/edit.ejs", {listing, originalImageUrl});
        };

        module.exports.updateListing = async (req, res) => {
            let { id } = req.params;
            let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });
        
            if (!listing) {
                req.flash("error", "Requested listing does not exist!");
                return res.redirect("/listings");
            }
        
            if (req.file) {
                let url = req.file.path;
                let filename = req.file.filename;
                listing.image = { url, filename };
                await listing.save();
            }
        
            req.flash("success", "Listing Updated!");
            res.redirect(`/listings/${id}`);
        };
        
        module.exports.deleteListing = async (req,res)=>{
            let {id} = req.params;
            const deletedListing = await Listing.findByIdAndDelete(id);
            console.log(deletedListing);
            req.flash("success", "Listing Deleted!");
            res.redirect("/listings");
        };