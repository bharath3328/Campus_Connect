express=require('express')
const router=express.Router()
const user=require('../models/userModel.js')
const job=require('../models/jobsModel.js')
//view 
router.get('/getJobs',async (req,res)=>{
    
   const result= await job.find()
   res.status(200).send(result)
    
})
//add 
router.post('/new',async (req,res)=>{
    let result=new job(req.body)
     result.save()
     res.status(200).send('job info added successfully')
})
//delete
router.delete('/delete',async (req,res)=>{
    await job.findByIdAndDelete(req.body.job_id)
    res.status(200).send('job info deleted successfully')
})
module.exports=router