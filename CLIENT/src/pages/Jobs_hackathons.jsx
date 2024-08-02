import React from 'react';
import {JobsComponent} from '../components/jobs';
import {HackathonsComponent} from '../components/hackathons';
import { Button } from "@material-tailwind/react";
// const jobs = [
//     { userId: 'user1', jobRole: 'Frontend Developer', jobLink: 'https://example.com/job1' },
//     { userId: 'user2', jobRole: 'Backend Developer', jobLink: 'https://example.com/job2' },
//     { userId: 'user3', jobRole: 'Full Stack Developer', jobLink: 'https://example.com/job3' }
// ];

// const hackathons = [
//     { name: 'Hackathon 1', date: '2024-09-01', link: 'https://example.com/hackathon1' },
//     { name: 'Hackathon 2', date: '2024-10-01', link: 'https://example.com/hackathon2' },
//     { name: 'Hackathon 3', date: '2024-11-01', link: 'https://example.com/hackathon3' }
// ];
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import {useNavigate } from 'react-router-dom';
import axios from "../axios";
export const JobsAndHackathons = () => {

    const [jobs, setJobs] = useState(null);
    const [hackathons, setHackathons] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response1 = await axios.get('/api/jobs/getJobs'); 
                // setJobs(response1.data);
                // console.log(response1);
                const response2 = await axios.get('/api/hackathons/getHackathons');
                console.log(response2);
                setHackathons(response2.data);
                setLoading(false);
                
            } catch (err) { 
                setError(err);
                setLoading(false);
            }
        };

        fetchData(); 
    }, []);
    
    const navigate=useNavigate();
    if (error) return <p>Error: {error.message}</p>;
    if (loading) return <Loading />;
    return (
        <>
            <div className="flex items-center justify-center">
                <Button className="bg-cyan-300 mt-4 w-2/3" onClick={() => navigate('/uploadjob')}>Post a Job</Button>
            </div>
            <div className="flex items-center justify-center">
                <Button className="bg-cyan-300 mt-1 mb-10 w-2/3" onClick={() => navigate('/uploadhackathon')}>Post a Hackathon</Button>
            </div>
            <div className="container mx-auto p-4">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-3/4">
                        {/* <JobsComponent jobs={jobs} /> */}
                    </div>
                    <div className="w-full lg:w-3/4 lg:ml-4">
                        <HackathonsComponent hackathons={hackathons} />
                    </div>
                </div>
            </div>
        </>
    );
}; 

