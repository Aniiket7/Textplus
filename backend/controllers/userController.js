const expressAsyncHandler = require("express-async-handler");
const genrateToken = require("../config/genrateToken");
const User = require("../models/userModel")
const signup = expressAsyncHandler(async (req,res) => {
    const { name, email, password, pic } = req.body; // destrucuring from req.body

    if(!name || !email || !password){ 
        res.status(400);
        throw new error("please fill all the details");
    }
    
    const userExists = await User.findOne({email})
    
    if(userExists){
        res.status(400);
        throw new error("User alreay exists");
    }
    const user = await User.create({ // craeting user in db
        name,email,password,pic 
    });
    
    if (user) {
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email : user.email,
            pic : user.ic,
            token:genrateToken(user._id)
        })
        
    }
    else{
        res.status(400);
        throw new error("failed to create user");

    }
});


const login = expressAsyncHandler(async(req,res) =>{
    const{email,password} = req.body;
    const user = await User.findOne({email})
    
    if (user && (await user.matchPass(password))){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email : user.email,
            pic : user.ic,
            token:genrateToken(user._id)
        })
        
    }
    else{
        res.status(400);
        throw new error("invalid email or password");
    
    }
})

const allUsers = expressAsyncHandler(async (req, res) => {
    const keyword = req.query.search
    // console.log(keyword)  // we will get keyword 
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },  // option i is for case sensitive
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
  
    const users = await User.find(keyword).find(); // id for to not find currently logged in user $ne meams not equal
    res.send(users);
  });
  

module.exports = {signup , login , allUsers}