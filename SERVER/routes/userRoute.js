const express = require("express");
const router = express.Router();
const user = require('../models/userModel');
const bycrypt = require("bcrypt");

router.post('/signup', async (req, res) => {
    const { username, email, password ,USN,semester,userRole} = req.body;
    const newUser = new user({ username, email, password ,USN,semester,userRole});
    try {
        const new2 = await newUser.save();
        res.send("user registered successfully");
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post('/login', async (req, res) => {
    let token;
    const { username, password } = req.body;
    const dbuser = await user.findOne({ username: username });
    if (dbuser) {
        const result = await bycrypt.compare(password, dbuser.password);
        if (result) {
            token = await dbuser.generateAuth();
            res.cookie("jwtToken", token, {
                expires: new Date(Date.now() + 28980000),
                httpOnly: true,
            });
            const user={
                _id:dbuser._id,
                name:dbuser.username,
                role:dbuser.role,
            }
            res.send(user);
        } else {
            res.status(400).send("incorrect password");
        }
    } else {
        res.status(400).send("user not found");
    }
})


router.get('/logout',(req,res)=>{
    res.cookie("jwtToken", "", {
        expires: new Date(Date.now() + 5),
    });
    res.send("logout successful");
})



module.exports = router