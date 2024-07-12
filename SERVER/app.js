const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded())
 app.use(cors())
app.use(express.json())
const mongoUrl='mongodb://127.0.0.1:27017/CollegeConnect'
main().then(() => {
    console.log("connected to DB Successfully");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(mongoUrl);
}
app.listen(8080,()=>{
    console.log('listening to port 8080')
})

