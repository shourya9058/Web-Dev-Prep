//Fakerjs naam k module ko use krenge to generate random data for working with databases

const { faker } = require('@faker-js/faker');
const mysql = require("mysql2"); //requiring mysql2
//Ab hum chahte h ki humara server humare database se directly interact kr paaye
//Uske liye dusra package install krenge jiska naam h "MySql2"

const express = require("express");
const app = express();
const path = require("path");

app.set("view engine","ejs");
app.use("views",Path2D.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app', //ek database mysql workbench mein create krke rakhna padega
    password: 'singh007'
  });


// let q = "SHOW TABLES";
//   try{ //Method 2 of using sql with node by using SQL2 package**
//     connection.query(q, (err,result)=>{ //iss function k andar jo query run krni hoti h wo likhte h
//         if(err) throw err;  //agr error aaya toh throw krwa denge
//         console.log(result); //result->array
//         console.log(result.length);
//         console.log(result[0]);
//         console.log(result[1]);
//       })
//   } catch(err){
//     console.log(`Error: ${err}`);
//   }
  
//   connection.end();  //query run hone k baad bhi connection chlta rehta h isiliye yeh line add krte h

//Sample function to generate random data using fakerjs

// let getRandomUser = ()  => {
//     return {
//       id: faker.string.uuid(),
//       username: faker.internet.username(), // before version 9.1.0, use userName()
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     };
//   }

  //Third method - MySQl ko CLI/Terminal p access krenge uske liye ek naya terminal bnake usme "mysql -u root -p" command enter krke password dalenge isse sql access kr paenge terminal se

  //Fourth method hota h by creating a file (apne case mein schema.sql h) yeh method bade data ya files k cases mein use kiya jaata h agr workbench nhi h toh

  //iske liye pehle apne sql mein login krte using CLI and password then use database and uske baad likhte h "source file_name.sql" mtlb hum iss file ki commands run krwana chahte h


  //Hum "placeholders" ka use krte h to excute the query even if we don't have the data to enter right now

  //ex- Isme hum manually data create krke insert kr rhe h

//   let q = "INSERT INTO user(id,username,email,password) VALUES ?"; // ? -> placeholder
// let users = [["125","123_newuserb","abc1@gmail.com","abc"],["124","124_newuser2","abcde@gmail.com","absec"],]; //placeholder ko user array se liya jaega ab

// try{ 
//         connection.query(q, [users], (err,result)=>{ 
//             if(err) throw err;  
//             console.log(result); 
//             console.log(result.length);
//             console.log(result[0]);
//             console.log(result[1]);
//           })
//   } catch(err){
//     console.log(`Error: ${err}`);
//   }
  
//   connection.end();

//Now we'll use Faker to create data in bulk and insert all of it into the database

let getRandomUser = ()  => {
    return [  //ab object ki jgh array return krenge
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
     faker.internet.email(),
      faker.internet.password(),
    ];
  };


let q = "INSERT INTO user(id,username,email,password) VALUES ?"; // ? -> placeholder
let data = [];

for(let i = 0;i<100;i++){
    data.push(getRandomUser());
    console.log(getRandomUser());
}

  try{ //Method 2 of using sql with node by using SQL2 package**
    connection.query(q, [data], (err,result)=>{ //iss function k andar jo query run krni hoti h wo likhte h
        if(err) throw err;  //agr error aaya toh throw krwa denge
        console.log(result); //result->array
        console.log(result.length);
        console.log(result[0]);
        console.log(result[1]);
      })
  } catch(err){
    console.log(`Error: ${err}`);
  }
  
  connection.end();  //query run hone k baad bhi connection chlta rehta h isiliye yeh line add krte h

//AB Routing krenge(alg alg pages aur routes ko use krenge just like quora wale project mein kiya tha)

// GET/ - show Node. of users in DB
// GET/user - show users(email,id,username) [password sensitive cheez h wo show nhi krna]
// PATCH/user/:id - username edit
// POST/user - new user
// DELETE/user/:id - user delete