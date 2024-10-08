const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const auth = require("./middleware/auth");


const admin = require('./router/adminRouter');
const booking=require("./router/tblBookingRouter");
const brand = require("./router/tblBrandRouter");
const contactus=require("./router/tblContactusRouter");
const pages = require("./router/tblPagesRouter");
const users = require("./router/tblUsersRouter");
const vehicle = require("./router/tblVehicleRouter");
const login = require("./router/login");
const auth = require('./middleware/auth');
const adminauth = require("./middleware/adminauth");

const app = express();
app.use(cors(
  {
    origin:"http://localhost:3000",
    credentials: true
  }
));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
  

mongoose.connect('mongodb+srv://Dhruvvyas:Dhruvvyas@cluster0.nadlysq.mongodb.net/bikerental').then(() => {
  console.log("::::: DB connect successful :::::");

  app.use("/admin", admin);
  app.use("/booking", booking);
  app.use("/brand",brand);
  app.use("/contactus",contactus);
  app.use("/page",pages);
  app.use("/vehicle",vehicle);
  app.use("/user",users);
  app.use('/login',login)

  
  app.get("/adminhome",adminauth,(req,res)=>{
    if(req.userInfo==null)
      res.status(401).json({msg:"incorrect"})
    else
       res.json(req.userInfo)
  })
  app.get('/home',auth,(req,res)=>{
    if(req.userInfo==null)
      res.status(401).json({msg:"incorrect"})
    else
       res.json(req.userInfo)
  })

}).catch((err) => {
  console.log(`### DB connection error: ${err} ###`);
});

// Start the server 
app.listen(4000, () => {
  console.log(`::::: server running on port 4000 :::::`);
});
