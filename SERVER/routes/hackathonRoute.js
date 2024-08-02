const express=require('express')
const routes=express.Router()
const hackathon=require('../models/hackathon')
//get hackathon
routes.get('/getHackathons',async (req,res)=>{
    const result=hackathon.find()
    res.status(200).send(result)
})
//add hackathon
routes.post('/addHackathon',async (req,res)=>{
    const result=new hackathon(req.body)
    result.save()
    res.status(200).send('hackathon added successfully')
})
module.exports=routes