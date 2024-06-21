import React, { useState } from 'react';
import { Textarea } from "@material-tailwind/react";
export const Answer = () => {
    const [question, setQusetion] = useState('');
    const [subject, setSubject] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const questionData = {
            question: question,
            subject: subject,
        }
        console.log(questionData);
        //post question in the db
    };
//with the form render the question as well 
//in a seperate div 
    return (
        <>
        <div className='bg-gray-700 text-white'>
            the question will come here ?
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded">
            <div className="mb-4">
                <label htmlFor="field1" className="block text-gray-700 text-sm font-bold mb-2">
                    Answer the question
                </label>
                <div className="w-96">
                    <Textarea />
                </div>
            </div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload the answer image</label>
            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"></input >

            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Post
                </button>
            </div>
        </form>
        </>
    );
};

//put the verify button for teachers 