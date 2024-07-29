const mongoose=require("mongoose")
const schema=mongoose.Schema
const ans_schema=require("./answers")
const imageschema=schema({
    filename:String,
    url:String
})
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
    subject:{
        type:String,

    },
    image:{
        type:imageschema
    }
},
    {
        timestamps:true,
    }
)
const q_model=mongoose.model('question',q_schema)
module.exports=q_model