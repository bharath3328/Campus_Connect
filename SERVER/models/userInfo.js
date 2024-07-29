const mongoose=require('mongoose')
const schema=mongoose.Schema
const uschema=schema({
    email:{
        type:String,

    },
    password:{
        type:String,

    },
    username:{
        type:String,
    },
    USN:{
        type:String
    },
    Semester:{
        type:Number,
        max:8,
        min:1
    },
    userType:{
        
    }


})
const user=mongoose.model('user',uschema)
module.exports=user