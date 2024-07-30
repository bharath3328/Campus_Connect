import { useEffect,useState } from "react";
import axios from '../axios';
import { Question } from "../components/question";
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import {Loading} from "../components/Loading";
export const QNA = () => {
    const navigate = useNavigate();
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/questions/viewQns'); 
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
    if (loading) return <Loading/>;
    
    return (
        <>
            <div className="flex items-center justify-center">
                <Button className="bg-cyan-300 my-10 w-2/3" onClick={() => navigate('/postQn')}>Ask a question</Button>
            </div>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 gap-5">
                    {data.map((data,index)=>{
                      <Question key={index} data={data} />
                    })}
                    
                </div>
            </div>
        </>
    )
}
//after comnnecting the backend we can map the questions based on todays date 
//filter it according to the date of the question 
//useeffect will bring all the questions  