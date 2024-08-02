import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useNotifications } from '../slices/notifications';
import {notify} from '../slices/notificationSlice';
import axios from '../axios';
import { useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';
export const PostQuestion = () => {
  const [question, setQusetion] = useState('');
  const [subject, setSubject] = useState('');
  const [image, setImage] = useState(null);
  const username=useSelector(state=>state.authUser.user.name);
  const navigate=useNavigate();
  //we have to use the function then only we can 
  //able to display the notification message 
  useNotifications();
  const dispatch=useDispatch();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const questionData = {
      question: question,
      subject: subject,
      image:JSON.stringify({
        base64:image
      }),
      username:username,
    }
    try{ 
      const response = await axios.post('/api/questions/postQn',questionData);
      dispatch(notify({message:'Question Posted Successfully',type:'success'}));
      navigate('/questions');
    }catch(err)
    {
      dispatch(notify({message:'error: Question Not Posted ',type:'error'}));
      navigate('/questions');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded my-10">
      <div className="mb-4">
        <label htmlFor="field1" className="block text-gray-700 text-sm font-bold mb-2">
          Whats your Question ?
        </label>
        <textarea
          required
          type="text"
          rows={10}
          cols={10}
          value={question}
          onChange={(e) => setQusetion(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label   htmlFor="field2" className="block text-gray-700 text-sm font-bold mb-2">
          Subject
        </label>
        <input
        required
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
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
         id="file_input" type="file" accept="image/jpeg" onChange={(e)=>setImage(e.target.files[0])}></input >
      </div>
      <div className="flex items-center justify-center">
        <button
        type='submit'
          className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Post
        </button>
      </div>
    </form>
  );
};