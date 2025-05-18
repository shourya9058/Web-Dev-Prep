const User = require("../models/user.js");


module.exports.renderSignupform = (req,res)=>{
    res.render("users/signup.ejs");
}


module.exports.renderLoginform = (req,res)=>{
    res.render("users/login.ejs");
}


module.exports.signup = async(req,res)=>{
    try{
        let {username,email,password, image} = req.body;
    const newUser = new User({email,username, image});
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err)=>{ //will automatically log in the user after successful signup
        if(err){
            return next(err);
         }
         req.flash("success","Welcome back to Wanderlust!");
    res.redirect("/listings");
    })
    } catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.login = async (req,res)=>{
    req.flash("success","Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
           return next(err);
        }
        req.flash('success',"You have been successfully logged out!");
        res.redirect("/listings");
    })
}