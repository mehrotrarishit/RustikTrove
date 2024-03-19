const mongoose = require("mongoose");

const productsSchema=new mongoose.Schema(
    {
        product_name:String,
        image_url:String,
        price:String,
        details:String,
        id:String
    }
);

const Products = new mongoose.model("products",productsSchema);

module.exports = Products;