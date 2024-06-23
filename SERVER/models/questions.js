const mongoose=require("mongoose")
const schema=mongoose.Schema
const ans_schema=require("./answers")
const q_schema=schema({
    username:{
        type:String,
        require
    },
    Question:{
        type:String,
        require
    },
    answer:{
        type:schema.Types.ObjectId,
        ref:"answer",
        max:1
    },
},
    {
        timestamps:true,
    }
)
const q_model=mongoose.model('question',q_model)
moduole.exports=q_model