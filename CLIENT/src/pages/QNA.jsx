import { Question } from "../components/question";
import {Button} from "@material-tailwind/react";
import { useNavigate} from 'react-router-dom';
export const QNA=()=>{
    const navigate=useNavigate();
    return(
        <>
        <Button fullWidth onClick={()=>navigate('/postQn')}>Ask a question</Button>
        <div>
        
        <Question/>
        <Question/>
        <Question/>
        <Question/>
        </div>
        </>
    )
}
//after comnnecting the backend we can map the questions 
//filter it according to the date of the question 