const mongoose=require("mongoose")
const user = require('../models/userModel.js')

const schema=mongoose.Schema

const b_schema=schema({
    user_id:{
        type:schema.Types.ObjectId,
        ref:"user"
    },
    yearOfPass:{
        type:Number,
        
    },
    company:{
        type:String,
    },
    salary:{
        type:String
    },
    image:String,
    experience:{
        type:String,
        
    }

})
module.exports=mongoose.model('blog',b_schema)