import { Question } from "../components/question";
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
export const QNA = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex items-center justify-center">
                <Button className="bg-cyan-300 my-10 w-2/3" onClick={() => navigate('/postQn')}>Ask a question</Button>
            </div>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 gap-5">
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                </div>
            </div>
        </>
    )
}
//after comnnecting the backend we can map the questions based on todays date 
//filter it according to the date of the question 
//useeffect will bring all the questions  