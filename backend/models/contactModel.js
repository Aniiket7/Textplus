const mongoose = require("mongoose")
const contactModel = mongoose.Schema(
    {
    name : { type: String, required: true },
    email : { type: String, required: true},
    message : { type: String, required: true },
    time :{type:Date , default:Date.now()}
    }
);

// creating model

// syntax :  mongoose.model('table name' , schema of that table) // table name means db ma a name nu table create thase..
const Contactform = mongoose.model('contact',contactModel);
module.exports = Contactform;