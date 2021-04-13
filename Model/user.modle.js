const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

// Schema
// object ,
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String
    }
})
// "kughbdsifkugbifudhgboerurhbgoewriuhgori"
// access -> a.id

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("superuser",userSchema);
