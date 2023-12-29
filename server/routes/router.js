const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

// get products api
router.get("/getproducts", async (req, res) => {
    try {
        const allproducts = await Products.find();
        // console.log("console the data"+ allproducts);
        res.status(201).json(allproducts);
    } catch (error) {
        console.log("error" + error.message);
    }
})

router.get("/product/:_id", async (req, res) => {

    try {
        const { _id } = req.params;
        // console.log(_id);

        const individual = await Products.findOne({ _id: _id });
        // console.log(individual + "ind mila hai");

        res.status(201).json(individual);
    } catch (error) {
        res.status(400).json(error);
        console.log("error" + error.message)
    }
});

// register the data
router.post("/register", async (req, res) => {
    // console.log(req.body);
    const { fname, email, countryCode, mobile, password, cpassword } = req.body;

    if (!fname || !email || !countryCode || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "fill the all details" });
    };

    try {

        const preuser = await USER.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This email already exist" });
        } else if (password !== cpassword) {
            res.status(422).json({ error: "password are not matching" });;
        } else {

            const finalUser = new USER({
                fname, email, countryCode, mobile, password, cpassword
            });

            // password hasing process


            const storedata = await finalUser.save();
            // console.log(storedata + "user successfully added");
            res.status(201).json(storedata);
        }

    } catch (error) {
        console.log("error: " + error.message);
        res.status(422).send(error);
    }

});

//login data
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "fill all the data" })
    };
    try {
        const userlogin = await USER.findOne({ email: email });
        console.log(userlogin + "user value: ");

        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);


            // token generation
            const token = await userlogin.generateAuthtoken();
            // console.log(token);

            res.cookie("RustikTroveWeb", token, {
                expires: new Date(Date.now() + 900000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "password does not match" })
            } else {
                res.status(201).json(userlogin)
            }
        } else {
            res.status(400).json({ error: "invalid details" })
        }


    } catch (error) {
        res.status(400).json({ error: "invalid details" })
    }
})

//adding data to cart
router.post("/addcart/:_id", authenticate, async (req, res) => {
    try {
        const { _id } = req.params;
        const cart = await Products.findOne({ _id: _id });
        console.log(cart + " cart value");

        const UserContact = await USER.findOne({ _id: req.userID });
        console.log(UserContact);

        if (UserContact) {
            const cartData = await UserContact.addcartdata(cart);
            await UserContact.save();
            console.log(cartData);
            res.status(201).json(UserContact);
        } else {
            res.status(401).json({ error: "invalid user" });
        }

    } catch (error) {
        res.status(401).json({ error: "invalid user" });
    }
});


//get cart details

router.get("/cartdetails", authenticate, async (req, res) => {
    try {
        const buyuser = await USER.findOne({ _id: req.userID });
        res.status(201).json(buyuser);
    } catch (error) {
        console.log("error: " + error)
    }
})


//get valid user

router.get("/validuser", authenticate, async (req, res) => {
    try {
        const validuserone = await USER.findOne({ _id: req.userID });
        res.status(201).json(validuserone);
    } catch (error) {
        console.log("error: " + error)
    }
})


//remove item from cart

router.delete("/remove/:_id",authenticate,async(req,res)=>{
    try {
        const {_id} = req.params;
        req.rootUser.carts = req.rootUser.carts.filter((cruval)=>{
            return cruval._id != _id;
        })
        req.rootUser.save();
        res.status(201).json(req.rootUser);
        console.log("item remove");
    } catch (error) {
        console.log("error"+error);
        res.status(400).json(req.rootUser);
    }
})
module.exports = router;