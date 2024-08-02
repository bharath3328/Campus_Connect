const mongoose=require('mongoose')
const schema=mongoose.Schema
const h_schema=schema({
    name:String,
    date:String,
    link:String
})
const hackathon=mongoose.model("hackathon",h_schema)
module.exports=hackathon