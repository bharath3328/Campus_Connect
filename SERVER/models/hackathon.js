const mongoose=require('mongoose')
const schema=mongoose.Schema
const h_schema=schema({
    name:String,
    data:Date,
    link:String
})
const hackathon=mongoose.model("hackathon",h_schema)
module.exports=hackathon