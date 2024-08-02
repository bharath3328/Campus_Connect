const express=require('express')
const routes=express.Router()
const notes=require('../models/notesModel')
routes.post('/uploadNotes',async(req,res)=>{
    const result=new notes(req.body)
    result.save()
    res.status(200).send('notes added successfully')
})
routes.get('/getNotes',async (req,res)=>{
    const result=await notes.find()
    res.status(200).send(result)
})
module.exports=routes