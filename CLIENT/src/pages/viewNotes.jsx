import { useEffect } from 'react'
import { Notes } from '../components/Notes';
import { useState } from 'react';
import { Loading } from '../components/Loading';
import axios from '../axios';
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
export const ViewNotes = () => {

    const navigate=useNavigate();
    const [notes, setNotes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/notes/getNotes');
                setNotes(response.data);
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
                <Button className="bg-cyan-300 my-10 w-2/3" onClick={() => navigate('/uploadnotes')}>Upload Notes</Button>
            </div>
            <div className='flex items-center justify-center my-8 '>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:grid-cols-3'>
                    {notes.map((data, index) => {
                        return <Notes key={index} data={data} />
                    })}
                </div>
            </div>
        </>
    )
}
//this component is subject wise notes
//this will be redirected when we click the subject link
//this page will be rendered when someone clicks the on the subject
//we will access the params to get sub name and make an axios request to get all the notes related to the subject
