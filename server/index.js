
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:false}));
app.use("/",express.static("Uploads"))

const product = require('./Routes/product');
app.use("/product/api/",product);

const payment = require('./Routes/payment');
app.use("/api",payment);

const PORT = 5000;
const server = app.listen(PORT,()=>{
    console.log("server running on PORT ", PORT)
})

