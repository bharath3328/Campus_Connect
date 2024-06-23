const mongoose=require("mongoose")
const schema=mongoose.Schema
const questions=require("./questions.js")
const ans_schema=schema({
    isverified:{
        type:Boolean,
        default:false,
    },
    answer:{
        type:String,
        require
    },
    user_id:{
        type:schema.Types.ObjectId,
        ref:"questions",
        require
    }

},{
    timestamp:true
})
const answers=mongoose.model("answer",ans_schema)
module.exports=answers
