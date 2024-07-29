const mongoose=require('mongoose')
const schema=mongoose.Schema
const bycrypt =require("bcrypt");
const jwt=require('jsonwebtoken');
const userchema=schema({
    email:{
        type:String,
        require
    },
    password:{
        type:String,
        require
    },
    username:{
        type:String,
        require
    },
    USN:{
        type:String,
        require
    },
    semester:{
        type:Number,
        max:8,
        min:1,
        require
    },
    userRole:{
        type:String,
        require
    }


},{
    timestamps:true,
})

userSchema.pre('save',async function(next){
    const salt=await bycrypt.genSalt();
    this.password=await bycrypt.hash(this.password,salt);
    next();
})

userSchema.methods.generateAuth=async function(){
    try{
        let token=jwt.sign({_id:this._id},"mysecretkey");
        return token;
    }catch(err){
        console.log(err);
    }
}

const user=mongoose.model('user',userchema)
module.exports=user;

