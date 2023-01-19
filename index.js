const express = require("express");
const dotenv = require("dotenv");
const mongo = require("./connect");
const EmployeeRouter = require("./router/EmployeeRouter");
const ProductRouter = require("./router/ProductRouter");
dotenv.config();
mongo.connect();
require("./connect").connectMongoose();



const app = express();
app.use(express.json());




app.use("/",(req,res,next)=>{
    console.log("authetication");
    next()
});
app.use("/employee",EmployeeRouter);
app.use("/product",ProductRouter);









app.listen(PROCESS.ENV.PORT);