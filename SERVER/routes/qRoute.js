const Question=require('../models/questions')
const user=require('../models/userModel')
const express=require('express')

const routes=express.Router();
//index route
routes.get('/viewQns',async (req,res)=>{
    result= await Question.find()
    res.status(200).send(result);
})
//view question
routes.get('/getQn/:id',async (req,res)=>{
    let {id}=req.params
    await Question.findOne({_id:id}).then((result)=>{
        res.status(200).send(result)
    })
})

//new route add a new question
routes.post('/postQn',async (req,res)=>{
    let result=new Question(req.body)
    result.save()
    res.status(200).send('Question added successfully')
})
// delete question
routes.delete('/delete/:id',async (req,res)=>{
    let {id}=req.params
    await Question.findByIdAndDelete(id)
    res.status(200).send('Question deleted successfully')
    
})
module.exports=routes
