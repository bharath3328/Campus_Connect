const mongoose=require("mongoose")
const schema=mongoose.Schema
const questions=require("./questions.js")
const userInfo=require("./userModel.js")
const ans_schema=schema({
    isVerified:{
        type:Boolean,
        default:false,
    },
    answer:{
        type:String,
        require
    },
    image:{
        type:String
    },
    user_id:{
        type:schema.Types.ObjectId,
        ref:"userInfo",
        
    },
    q_id:{
        type:schema.Types.ObjectId,
        ref:"questions"
    }
    
},{
    timestamp:true
})
const answers=mongoose.model("answer",ans_schema)
module.exports=answers
