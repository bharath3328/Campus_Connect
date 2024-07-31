const answer=require('../models/answers.js')
const express=require('express')
const routes=express.Router()
const question=require('../models/questions.js')
const user = require('../models/userModel.js')
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
//delete answer
routes.delete('/delete',async (req,res)=>{
    
    let {q_id,ans_id}=req.body
    // await question.findByIdAndUpdate(q_id,{
    //     answer:
    // })
    await answer.findByIdAndDelete(ans_id)
    res.status(200).send("deletion successful")

})
module.exports=routes