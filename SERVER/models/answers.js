const mongoose=require("mongoose")
const schema=mongoose.Schema
const questions=require("./questions.js")
const userInfo=require("./userInfo.js")
const imageschema=schema({
    filename:String,
    url:String
})
const ans_schema=schema({
    isverified:{
        type:Boolean,
        default:false,
    },
    answer:{
        type:String,
        require
    },
    image:{
        type:imageschema
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
