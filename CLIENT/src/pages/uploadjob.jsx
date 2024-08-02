import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useNotifications } from '../slices/notifications';
import {notify} from '../slices/notificationSlice';
import axios from '../axios';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
const JobUpload = () => {
  const [jobRole, setJobRole] = useState('');
  const [jobLink, setJobLink] = useState('');
  const user_id=useSelector(state=>state.authUser.user._id);
  
  useNotifications();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const data={
      job_role:jobRole,
      job_link:jobLink,
      user_id:user_id,
    }
    try{
      const response = await axios.post('/api/jobs/new',data);
      dispatch(notify({message:'Job Posted Successfully',type:'success'}));
      navigate('/jobs');
    }catch(err)
    {
      dispatch(notify({message:'error: please try again',type:'error'}));
      navigate('/jobs');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Upload Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="jobRole" className="block text-gray-700 font-bold mb-2">
            Job Role
          </label>
          <input
            type="text"
            id="jobRole"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter job role"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jobLink" className="block text-gray-700 font-bold mb-2">
            Job Link
          </label>
          <input
            type="url"
            id="jobLink"
            value={jobLink}
            onChange={(e) => setJobLink(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter job link"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobUpload;
