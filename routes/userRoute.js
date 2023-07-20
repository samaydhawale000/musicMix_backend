const registerMiddle = require("../middlewares/registerMiddleware");
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

const userRoute = require("express").Router();

userRoute.post("/register", registerMiddle, async (req, res) => {
  const { name, email, password, admin } = req.body;
  try {
    let findUser = await userModel.findOne({ email });

    if (findUser.email) {
      res.json({ msg: "User has already registered please login" });
    }

    bcrypt.hash(password, 5, async (err, hash) => {
      if (hash) {
        const data = await userModel.create({
          name,
          email,
          password: hash,
          admin,
        });
        res.json({ msg: "User register successfully", user: data });
      }
    });
  } catch (err) {
    console.log(err);
  }
});


userRoute.post("/login", async (req, res) => {
    const { email, password} = req.body;
    try {
      let findUser = await userModel.findOne({ email });
      
      if (findUser) {
        bcrypt.compare(password, findUser.password, function(err, result) {
            if(result){
                var token = jwt.sign({userId:findUser._id}, 'music');
                res.json({msg:"User login succesfully",token})
            }
            else{
                res.json({msg:"Wrong password please enter valid password to login"})
            }
        });
      }
      else{
        res.json({msg:"Wrong email and password !"})
      }
  
    } catch (err) {
      console.log(err);
    }
  });

module.exports = userRoute;
