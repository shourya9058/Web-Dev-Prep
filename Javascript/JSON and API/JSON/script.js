// --> JSON and Js Objects are not Smartphone
// --> JB APIs se data return hota h toh wo JSON format mein hota h
// --> There are two main fucntions that are used with JSON:
    
//      1) JSON.parse(Your JSON element here): Used to convert JSON data into Object (Jb external API se data fetch krenge tb)
//      1) JSON.stringify(Your JSON element here): Used to convert string data into JSON format (Jb apni API bnaenge tb)


// example of JSON:

let ex = '{"fact":"The first formal cat show was held in England in 1871; in America, in 1895.","length":75}';
console.log(`Orignal data: ${ex}`);
let newEx = JSON.parse(ex);
console.log("Converted data:",newEx)
console.log(newEx.fact);