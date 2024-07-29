const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require('mongoose')
const user=require('./models/userInfo.js')
const answers=require('./models/answers.js')
const question=require('./models/questions.js')
const qRoute=require('./routes/qRoute.js')
const ansroute=require('./routes/ansroute.js')
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded())
app.use(cookieParser());
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
app.use(cors({ origin: ["http://localhost:5174"], credentials: true }));



// adduser=async ()=>{
//     question.deleteMany({})
//     question.insertMany({
//         username:'hello bot',
//         Question:'what is a genai?',
        

//     })
// }
//index route
app.get('/',(req,res)=>{
    res.send('index route')
})
//questions route
app.use('/questions',qRoute)
//answers route
app.use('/answers',ansroute)
// adduser()
app.listen(8085, () => {
    console.log(`listening on port 8085`);
});


