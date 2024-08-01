const mongoose=require('mongoose')
const schema=mongoose.Schema
const notesSchema=schema({
    subject:{
        type:String
    },
    chapter:{
        type:String
    },
    link:{
        type:String
    },
    type:{
        type:String
    },
    sem:{
        type:Number
    }
},
{
    timestamp:true
})
const notes=mongoose.model('note',notesSchema)
module.exports=notes