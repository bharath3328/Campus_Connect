import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useNotifications } from '../slices/notifications';
import {notify} from '../slices/notificationSlice';
import axios from '../axios';
import {useNavigate} from 'react-router-dom';
const UploadHackathon = () => {
  const [date, setDate] =useState('');
  const [name, setName] =useState('');
  const [link, setLink] =useState('');
  useNotifications();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleSubmit =async (e) => {
    e.preventDefault();
    const data={
      date:date,
      name:name,
      link:link,
    }
    try{
      const response = await axios.post('/api/hackathons/addHackathon',data);
      dispatch(notify({message:'Hackathon Posted Successfully',type:'success'}));
      navigate('/jobs');
    }catch(err)
    {
      dispatch(notify({message:'error: please try again',type:'error'}));
      navigate('/jobs');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Upload Hackathon</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="hackathonDate" className="block text-sm font-medium text-gray-700">
            Hackathon Date
          </label>
          <input
            type="date"
            id="hackathonDate"
            name="hackathonDate"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="hackathonName" className="block text-sm font-medium text-gray-700">
            Hackathon Name
          </label>
          <input
            type="text"
            id="hackathonName"
            name="hackathonName"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="registrationLink" className="block text-sm font-medium text-gray-700">
            Registration Link
          </label>
          <input
            type="url"
            id="registrationLink"
            name="registrationLink"
            value={link}
            onChange={(e)=>setLink(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadHackathon;
