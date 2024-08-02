import React from 'react';

const JobCard = ({ userId, jobRole, jobLink }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden my-4 p-4">
      <div className="p-4 leading-normal">
        <h5 className="text-gray-900 font-bold text-xl mb-2">{jobRole}</h5>
        <p className="text-gray-700 text-base">Posted by: {userId}</p>
        <a href={jobLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2">
          View Job
        </a>
      </div>
    </div>
  );
};

 export const JobsComponent = ({ jobs }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Jobs</h2>
      {jobs.map((job, index) => (
        <JobCard key={index} userId={job.userId} jobRole={job.jobRole} jobLink={job.jobLink} />
      ))}
    </div>
  );
};
 
// export  default JobsComponent; 