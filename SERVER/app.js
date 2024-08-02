const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require('mongoose')
const answers=require('./models/answers.js')
const question=require('./models/questions.js')
const questionsRoute=require('./routes/qRoute.js')
const ansroute=require('./routes/ansroute.js')
const notesRoute=require('./routes/notesRoute')
const jobroute=require('./routes/jobroute.js')
const blogroute=require('./routes/blogroute.js')
const hackathonRoute=require('./routes/hackathonRoute')
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

app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));



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
//questions qoute
app.use('/api/questions',questionsRoute)

//answers route
app.use('/api/answers',ansroute)


app.use('/api/blogs',blogroute)
//job route
app.use('/api/jobs',jobroute)
app.use('/api/notes',notesRoute)
app.use('/api/hackathons',hackathonRoute)
const userRoute = require('./routes/userRoute');
app.use('/api/user', userRoute);


app.listen(8085, () => {
    console.log(`listening on port 8085`);
});




//changes done in node modules