const express=require("express")
const app=express()
const cors=require("cors")
app.use(express.urlencoded())
 app.use(cors())
app.use(express.json())
app.listen(8080,()=>{
    console.log('listening to port 8080')
})
