import React, { useState } from 'react';
import { Textarea } from "@material-tailwind/react";
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";

import axios from "../axios";
import { useParams } from 'react-router-dom'; 
import { useEffect } from 'react';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
export const Answer = () => {
    
    const {id} =useParams();
    const [answer, setAnswer] = useState('');
    const [image, setImage] = useState(null);
    const [qimage, setQImage] = useState(null);
    const [question, setQuestion] = useState(null);
    const [error, setError] = useState(null);

    const navigate=useNavigate();
    // const userId=useSelector(state=>state.authIser.user._id);
    const userId=12345;
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`/api/questions/getQn/${id}`);  
            setQuestion(response.data.question); 
            {
                response.data.image && setQImage(response.data.image)
            }
          } catch (err) {
            setError(err); 
          }
        };
        fetchData(); 
      }, []); 
    
    const handleSubmit =async (e) => {
        e.preventDefault();
        const answerData = {
            answer: answer,
            image:JSON.stringify({
                base64:image
              }),
            userId:userId,
        }
        console.log(answerData);
        try{
            const response= await axios.post('/api/answers/new',answerData);
            console.log(response.data);
            navigate(`/viewanswer/${id}`)
        }catch(err){
            console.log(err.message);
        }
    };
    
    if (error) return <p>error </p>
    return (
        <>
            <div className='flex items-center justify-center my-10'>
                <Card className="mt-6 w-96">
                    <CardBody>
                        <Typography>
                            {question}
                        </Typography>
                        <Typography>
                            {
                                qimage && <img src={qimage} alt="question image" />
                            } 
                        </Typography>
                    </CardBody>
                </Card>
            </div>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded">
                <div className="mb-4">
                    <label htmlFor="field1" className="block text-gray-700 text-sm font-bold mb-2">
                        Answer the question
                    </label>
                    <div className="w-96">
                        <Textarea rows={10} cols={10} onChange={(e) => setAnswer(e.target.value)} />
                    </div>
                </div>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="file_input">Upload the answer image</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="file_input" type="file" accept="image/jpeg" onChange={(e) => setImage(e.target.files[0])}></input >

                <div className="flex items-center justify-center my-10">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit Answer
                    </button>
                </div>
            </form>
        </>
    );
};

//put the verify button for teachers 


//send question id as the prop to display the question 
//on submit - along with user id post 
//redirect to view answer with  the answer which is posted
//enable edit options 