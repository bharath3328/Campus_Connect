const question=require('../models/questions')
const user=require('../models/userModel')
const express=require('express')
const routes=express.Router();
//index route
routes.get('/',async (req,res)=>{
    result= await question.find()
    console.log('hello world')
    res.send(result)
})
//new route add a new question
routes.post('/postQn',async (req,res)=>{
    let {username,Question,subject,filename,url}=req.post
    await question.insertOne({
        username:username,
        Question:question,
        image:{
            filename:filename,
            url:url
        }
    })
    console.log('question added successfully')
})
// delete question
routes.delete('/delete/:id',async (req,res)=>{
    let {id}=req.params
    await question.findByIdAndDelete(id)
    console.log("deletion successful")
    
})
module.exports=routes
