const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({extended : true})); //yeh line hamesha use krte h post method k saath kaam krte time
//Agr urlencoded data hota h toh express usse parse krle isiliye iss lone ko likhte h

app.use(express.json()); //agr json format ko bhi parse krwana h toh, mtlb agr hum data json format mein bhej rhe h toh

app.get("/request",(req,res)=>{
    let {username, password} = req.query;  //GET method mein data query strings ki form mein aata isiliye aise nikal skte h but post mein hume pehle parse krna padega cause usme data request body mein hi aata h.
    res.send(`Standard GET response, Welcome ${username}!`);
})
app.post("/request",(req,res)=>{
    let {username, password} = req.body;
    console.log(req.body);
    res.send(`Standard POST response, Welcome ${username}!`);
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
})