import React from 'react';


import { useEffect,useState } from 'react';
import { Loading } from '../components/Loading';
import axios from '../axios';
import {useParams} from 'react-router-dom';
export const BlogPage = () => {
  
  const {id}=useParams();
    const [blog, setblog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
     
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`/api/blog/getBlog/${id}`); 
            setblog(response.data); 
            setLoading(false); 
          } catch (err) {
            setError(err); 
            setLoading(false); 
          }
        };
        fetchData(); 
      }, []); 
    
    if (error) return <p>Error: {error.message}</p>;
    if(loading){
        return <Loading/>
    }
  
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mt-4 text-gray-700 leading-relaxed">
        {blog.headline}
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {blog.image &&
          <img className="w-full h-64 object-cover" src={blog.image} alt="image" />
        }
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900">{blog.name}</h1>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Company:</span> {blog.company}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Year of Pass Out:</span> {blog.year}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Salary:</span> {blog.salary}
          </p>
          <div className="mt-4 text-gray-700 leading-relaxed">
            {blog.content}
          </div>
        </div>
      </div>
    </div>
  );
};

