import { useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Loading } from '../components/Loading';
import { useState } from "react";
import { useEffect } from "react";
import axios from '../axios';
import { useSelector } from 'react-redux';
export const ViewAnswer = () => {
    const { id } = useParams();
    const [answerObj, setAnswer] = useState(null);
    const [Question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const role = useSelector(state => state.authUser.user.userRole);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await axios.get(`/api/questions/getQn/${id}`);
                setQuestion(response1.data);
                const response = await axios.get(`/api/answers/getAns/${id}`);
                setAnswer(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);


    if (error) return <p>Error: {error.message}</p>;
    if (loading) {
        return <Loading />
    }

    const qnid = answerObj.q_id;
    console.log(qnid);
    const verify = async () => {
        const response = await axios.post(`/api/answers/isVerified/${qnid}`);
        console.log(response.data);
    }

    return (
        <>
            <div className="flex item-center justify-center my-5 ">
                <div className="shadow-lg shadow-black bg-white-400 text-black h-fit w-2/4 border-2 border-black p-7 rounded-lg">
                    <div className="flex justify-between">
                        <h1 className="text-2xl text-bold">@{Question.username}</h1>
                        { answerObj.isVerified ===true &&
                            <Button color="white" className="text-green-500">verified</Button>
                        }
                    </div>
                    <h1 className="text-2xl text-bold">{Question.question}</h1>
                    <p className="my-5">
                        <h2>Answered by @{answerObj.username}</h2>
                        <h2>Answer:</h2>
                        <p>
                        {answerObj.answer}
                        </p>
                    </p>
                    <div className="flex item-center justify-center ">
                        <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg" alt="no answer image "
                            className="h-full max-w-xl hover:scale-150 " />
                    </div>
                    <div className="mx-5 my-5 flex justify-between ">
                        {
                           answerObj.isVerified ===false && role === 'teacher' && <Button  onClick={()=>verify()}> verify </Button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
//with the parameters u will get the answer for the question
//then  display it
//use effect to fetch the answer
// conditional rendering for the buttons and verification


//add edit and delete options later 
