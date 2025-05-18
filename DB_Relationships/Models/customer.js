//One to many relation

const { Import } = require("lucide-react");
const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then(()=> console.log("Connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

// reference field use kr rhe h directly Orders ki ID store krenge uss ID k through details use kr paenge
// db.customers.find() krke verify kr skta h sirf IDs store hui hongi
const customerSchema = new Schema({
    name:String,
    orders: [
        {
            type: Schema.Types.ObjectId, //jb objectId store krni ho
            ref: "Order", // kha se aaegi yeh id uske liye
        }
    ]
})

const orderSchema = new Schema({
    item: String,
    price: Number,
});

// customerSchema.pre("findOneAndDelete",async()=>{  //findOneandDelete() automatiaclly findByIDAndDelete() ko trigger krega, usko direct middelwares k through trigger nhi kr skte
//     console.log("Pre Middleware");
// });

customerSchema.post("findOneAndDelete",async(customer)=>{
   if(customer.orders.length){ //agr order ki length 0 se jyada h
    let res = await Order.deleteMany({_id: { $in: customer.orders } }); //jitne bhi orders honge unko by id dhundke delete krega
    console.log(res);
   }
});


const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

// const addCustomer = async ()=>{
//     let cust1 = new Customer({
//         name: "Rahul Kumar",
//     });
// //orders ko fetch krke push kr rhe h
//     let order1 = await Order.findOne({item: "Chips"});
//     let order2 = await Order.findOne({item: "Chocolate"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result = await cust1.save();
//     console.log(result);
// }

// Very Important and useful 
// On the other hand agr populate method use kr skte h agr hum id ki jgh pura object hi ek particular reference se utha kr paste krna chahte h toh,
// ex- let result = await Customer.find({}).populate("orders")

// addCustomer();

// const addOrder = async ()=>{
//     let res = await Order.insertMany([
//         {item: "Samosa", price: 12},
//         {item: "Chips", price: 10},
//         {item: "Chocolate", price: 40},
//     ]);
//     console.log(res);
// }

// addOrder();

// Handling Deletion:
const addCust = async() => {
    let newCust = new Customer({
        name: "karan Arjun"
    });

    let newOrder = new Order({
        item: "Chole bhature",
        price: 250
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("Added new customer");
};

const delCust = async() =>{
    let data = await Customer.findByIdAndDelete('68022899d812cea822a4ef7f');
    console.log(data);
};

// addCust();
delCust();

// Ab agr hum deletion query chlaenge toh sirf customer delete hoga usse relwted orders delete nhi honge, isko krne k liye hum middleware use krenge

// We can use two middlewares:
// Pre: run before the query is executed
// Post: run after the query is executed

