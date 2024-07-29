const answer=require('../models/answers.js')
const express=require('express')
const routes=express.Router()
const question=require('../models/questions.js')
const user = require('../models/userInfo.js')
routes.post('/new',async(req,res)=>{
    
      
    const result=new answer(req.body)
    
     result.save()
     const ans=answer.find({q_id:req.body.q_id})
    const newq=await question.findByIdAndUpdate(req.body.q_id,{
        answer:ans._id
    })
    console.log(newq)
    res.status(200).send(newq)
    
})
module.exports=routes