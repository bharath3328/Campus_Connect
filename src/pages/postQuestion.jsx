
import React, { useState } from 'react';

export const PostQuestion = () => {
  const [question, setQusetion] = useState('');
  const [subject, setSubject] = useState('');
  const [image, setImage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const questionData = {
      question: question,
      subject: subject,
      image:image,
    }
    console.log(questionData);
    //post question in the db
    //working fine post it with axios
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded">
      <div className="mb-4">
        <label htmlFor="field1" className="block text-gray-700 text-sm font-bold mb-2">
          Whats your Question ?
        </label>
        <textarea
          type="text"
          rows={10}
          cols={10}
          value={question}
          onChange={(e) => setQusetion(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="field2" className="block text-gray-700 text-sm font-bold mb-2">
          Subject
        </label>
        <input
          type="text"
          name="field2"
          id="field2"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload the answer image</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 
        rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none
         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
         id="file_input" type="file" accept="image/jpeg" onChange={(e)=>setImage(e.target.files[0])}></input >
      </div>
      <div className="flex items-center justify-between">
        <button
        type='submit'
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Post
        </button>
      </div>
    </form>
  );
};

