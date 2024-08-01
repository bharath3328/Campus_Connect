import React from 'react';
import JobsComponent from '../components/jobs';
import HackathonsComponent from '../components/hackathons';

const jobs = [
    { userId: 'user1', jobRole: 'Frontend Developer', jobLink: 'https://example.com/job1' },
    { userId: 'user2', jobRole: 'Backend Developer', jobLink: 'https://example.com/job2' },
    { userId: 'user3', jobRole: 'Full Stack Developer', jobLink: 'https://example.com/job3' }
];

const hackathons = [
    { name: 'Hackathon 1', date: '2024-09-01', link: 'https://example.com/hackathon1' },
    { name: 'Hackathon 2', date: '2024-10-01', link: 'https://example.com/hackathon2' },
    { name: 'Hackathon 3', date: '2024-11-01', link: 'https://example.com/hackathon3' }
];
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
export const JobsAndHackathons = () => {

    // const [jobs, setJobs] = useState(null);
    // const [hackathons, setHackathons] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response1 = await axios.get('/api/jobs/getJobs');
    //             setJobs(response1.data);
    //             const response2 = await axios.get('/api/hackathons/getHackatons');
    //             setHackathons(response2.data);
    //             setLoading(false);
    //         } catch (err) {
    //             setError(err);
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // if (error) return <p>Error: {error.message}</p>;
    // if (loading) return <Loading />;
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-3/4">
                    <JobsComponent jobs={jobs} />
                </div>
                <div className="w-full lg:w-3/4 lg:ml-4">
                    <HackathonsComponent hackathons={hackathons} />
                </div>
            </div>
        </div>
    );
};

