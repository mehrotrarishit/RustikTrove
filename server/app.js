require("dotenv").config()
const express = require ("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const Products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");
// const Productsmen = require("./models/productsmenSchema");
// const DefaultDataMen = require("./defaultdatamen");
const cors =require("cors");
const router = require("./routes/router");
const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);

const port=8005;

app.listen(port,()=>{
    console.log(`server is running on port number ${port}`);
})

DefaultData();
// DefaultDataMen();
