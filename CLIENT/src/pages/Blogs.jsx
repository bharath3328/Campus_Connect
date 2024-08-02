import { Blog } from "../components/Blog";
import { Loading } from "../components/Loading";
import { useState,useEffect } from "react";
import axios from "../axios";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
export const Blogs = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
const navigate =useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/blogs/viewBlogs'); 
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (error) return <p>Error: {error.message}</p>;
    if (loading) return <Loading />;

    return (
        <>
            <div className="flex items-center justify-center">
                <Button className="bg-cyan-300 my-10 w-2/3" onClick={() => navigate('/uploadblogs')}>Write a Blog</Button>
            </div>
            <div className="flex items-center justify-center my-10">
                <div className="grid md:grid-cols-2 gap-10 ">
                    {data.map((blog,index)=>{
                        <Blog key={index} data={blog}/>
                    })} 
                </div>
            </div>
        </>
    )
}