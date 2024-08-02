const answer=require('../models/answers.js')
const express=require('express')
const routes=express.Router()
const question=require('../models/questions.js')
const user = require('../models/userModel.js')
const multer=require('multer')

 routes.post('/new',async(req,res)=>{
    
    
    const result= new answer(req.body)
     result.save()
     
     const ans=answer.find({q_id:req.body.q_id})
    
    const newq=await question.findByIdAndUpdate(req.body.q_id,{
        answer:ans._id,
        isanswered:true
    })
    console.log(newq)
    res.status(200).send(newq)
})
//view route
routes.get('/getAns/:id',async (req,res)=>{
    let {id}=req.params
    await answer.findOne({q_id:id}).then((result)=>{
        
        res.status(200).send(result)
    })
})
//delete answer
routes.delete('/delete',async (req,res)=>{
    
    let {q_id,ans_id}=req.body
    // await question.findByIdAndUpdate(q_id,{
    //     answer:
    // })
    await answer.findByIdAndDelete(ans_id)
    res.status(200).send("deletion successful")

})
routes.post('/isVerified/:id',async (req,res)=>{
    let {id}=req.params
    await answer.findByIdAndUpdate(id,{
        isVerified:true
    })
    res.status(200)
})

  
module.exports=routes