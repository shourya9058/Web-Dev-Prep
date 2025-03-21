const figlet = require("figlet");  // Add this line at the top

figlet("Shourya Singh", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});
