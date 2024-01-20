const Products = require("./models/productsSchema");
const allproducts = require("./constant/AllProduct");


const DefaultData = async()=>{
    try{
        await Products.deleteMany({})
        
        const storeData = await Products.insertMany(allproducts);
        // console.log(storeData);
        
    }catch(error){

        console.log("error"+error.message);
    }
};

module.exports = DefaultData;