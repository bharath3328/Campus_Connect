import React, { useState } from 'react';
import { Textarea } from "@material-tailwind/react";
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
export const Answer = () => {
    const [answer, setAnswer] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const answerData = {
            answer: answer,
            image: image,
        }
        console.log(answerData);
        //post answer in the db
        //working fine send it to the db to save
    };
    //with the form render the question as well 
    //in a seperate div 
    return (
        <>
            <div className='flex items-center justify-center my-10'>
                <Card className="mt-6 w-96">
                    <CardBody>
                        <Typography>
                            the question will come here ?
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