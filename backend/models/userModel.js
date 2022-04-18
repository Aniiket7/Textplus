const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const userModel = mongoose.Schema(
    {
        name : { type:String , required:true},
        email : { type:String , required:true, unique:true},
        password : { type:String , required:true},
        pic : { type:String ,default:"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"}
    }
    ,
    {
        timestamps:true,
    }
);
userModel.pre('save',async function (next) {
    if (!this.isModified) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
})

userModel.methods.matchPass = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password)
}
const User = mongoose.model("User", userModel);
module.exports = User;