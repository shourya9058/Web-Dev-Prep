//-------------------------------------------------- This file is exlusively for mischellenous notes of this project -------------------------------------------------

// Form validations:
// when we enter the data in the form, the browser and/or the web server will check to see the that the data is in the correct format and within the constraints set by the applications

// Now they are of two types:
// -> client side : Jb user incomplete ya incorrect data enter krde
// -> server side : Jb data in the database is not according to the schema set by the DB or when there occurs an error while editing or updating the data in the DB

// Ab hum yeh incomplete data by the user/client wali cheez apne input field mein "required" keyword add krke bhi bhi kr skte h but wo firr browser to browser alg way mein message show krega and we want to make our project standardised toh isiliye hum bootstrap styling apply krenge

// Now to handle schema validation like agr user jo data enter kr rha h wo sahi bhi h ya NavigationHistoryEntry,
// the first method is to do this,
// f(!newListing.title){
//         throw new ExpressError(400,"Title is missing!");
//     }
//     yeh line hume hrr input field k likhna padega like title,description,etc so ofc it will be a tedious job when dealing with multiple models, isiliye we will use the second method i.e., "JOI" iska kaam hota h schema ko validate krna

//     isko use krne k liye pehle isse require krna h then require(go tot he official website if you forget how to use this)

// client side validation -> form mein kiya
// server side validation -> using JOI (schema.js)

