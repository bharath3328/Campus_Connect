const mongoose=require("mongoose")
const user = require('../models/userModel.js')

const schema=mongoose.Schema

const b_schema=schema({
    name:String,
    year:String,
    company:String,
    salary:Number,
    content:String,
    image:String,
    headline:String

})
module.exports=mongoose.model('blog',b_schema)