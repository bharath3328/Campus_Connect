const express=require("express")
const blog=require('../models/blogModel')
const router=express.Router()
//index route
router.get('/',async (req,res)=>{
    let result=await blog.find()
    res.status(200).send(result)
})
//show route
router.get('/view',async(req,res)=>{
    let {user_id}=req.body
    let result=await blog.findOne({user_id:user_id})
    res.status(200).send(result)

})
//new route
router.post('/',(req,res)=>{
    const newblog=new blog(req.body)
    newblog.save()
    res.status(200).send('blog added successfully')
})
//delete route
router.delete('/delete',async (req,res)=>{
    
    await blog.findByIdAndDelete(req.body._id)
    res.status(200).send('blog deleted successfully')
})
module.exports=router