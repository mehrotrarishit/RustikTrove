const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
// const Productsmen = require("../models/productsmenSchema");
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

// get productsmen api
// router.get("/getproductsmen",async(req,res) => {
//     try {
//         const productsmen = await Productsmen.find();
//         console.log("men data received");
//         res.status(201).json(productsmen);
//     } catch (error) {
//         console.log("error" + error.message);
//     }
// })


// get single product api
router.get("/product/:id", async (req, res) => {

    try {
        const { id } = req.params;
        // console.log(_id);

        const individual = await Products.findOne({ id: id });
        // console.log(individual + "ind mila hai");

        res.status(201).json(individual);
    } catch (error) {
        res.status(400).json(error);
        console.log("error" + error.message)
    }
});
// get single men product api
// router.get("/productmen/:_id", async (req, res) => {

//     try {
//         const { id } = req.params;
//         // console.log(_id);

//         const individualmen = await Productsmen.findOne({ _id: _id });
//         // console.log(individual + "ind mila hai");

//         res.status(201).json(individualmen);
//     } catch (error) {
//         res.status(400).json(error);
//         console.log("error" + error.message)
//     }
// });
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


            // token generation
            const token = await finalUser.generateAuthtoken();
            // console.log(token);
         
            res.cookie("RustikTroveWeb", token, {
            expires: new Date(Date.now() + 900000),
            httpOnly: true
            });
            // console.log(storedata + "user successfully added");
            res.status(201).json(storedata);
        }

    } catch (error) {
        console.log("error: " + error.message);
        res.status(422).send(error);
    }

});
// edit the data
// router.post("/register", async (req, res) => {
//     // console.log(req.body);
//     const { fname, email, countryCode, mobile, password, cpassword } = req.body;

//     if (!fname || !email || !countryCode || !mobile || !password || !cpassword) {
//         res.status(422).json({ error: "fill the all details" });
//     };

//     try {

//         const preuser = await USER.findOne({ email: email });

//         if (preuser) {
//             res.status(422).json({ error: "This email already exist" });
//         } else if (password !== cpassword) {
//             res.status(422).json({ error: "password are not matching" });;
//         } else {

//             const finalUser = new USER({
//                 fname, email, countryCode, mobile, password, cpassword
//             });

//             // password hasing process


//             const storedata = await finalUser.save();


//             // token generation
//             const token = await finalUser.generateAuthtoken();
//             // console.log(token);
         
//             res.cookie("RustikTroveWeb", token, {
//             expires: new Date(Date.now() + 900000),
//             httpOnly: true
//             });
//             // console.log(storedata + "user successfully added");
//             res.status(201).json(storedata);
//         }

//     } catch (error) {
//         console.log("error: " + error.message);
//         res.status(422).send(error);
//     }

// });
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
                // token generation
            }
        } else {
            res.status(400).json({ error: "invalid details" })
        }


    } catch (error) {
        res.status(400).json({ error: "invalid details" })
    }
})

//adding data to cart
router.post("/addcart/:id", authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await Products.findOne({ id: id });
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

//add most loved product to cart
router.post("/addcartmlp", authenticate, async (req, res) => {
    try {
        const { product_name } = req.body;
        const cart = await Products.findOne({ product_name:product_name });
        console.log(cart + "mlp cart value");

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

router.delete("/remove/:id", authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);

        const indexToRemove = req.rootUser.carts.findIndex(cruval => cruval.id == id);

        if (indexToRemove !== -1) {
            // If the product with the specified id is found, remove it
            req.rootUser.carts.splice(indexToRemove, 1);
            await req.rootUser.save();
            res.status(201).json(req.rootUser);
            console.log("Item removed");
        } else {
            // If the product with the specified id is not found, send a 404 response
            res.status(404).json({ error: "Product not found" });
        }
    } catch (error) {
        console.log("Error: " + error);
        res.status(400).json({ error: "Error removing item" });
    }
});



//for user logout

router.get("/logout", authenticate, async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
            return curelem.token !== req.token
        });

        res.clearCookie("RustikTroveWeb", { path: "/" });
        res.status(201).json(req.rootUser.tokens);
        console.log("user logout")
    } catch (error) {
        console.log("error for user logout")
    }
})

module.exports = router;
