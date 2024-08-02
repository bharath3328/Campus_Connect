import React from 'react';

const HackathonCard = ({data}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden my-4 p-4">
      <div className="p-4 leading-normal">
        <h5 className="text-gray-900 font-bold text-xl mb-2">{data.name}</h5>
        <p className="text-gray-700 text-base">Date: {data.date}</p>
        <a href={data.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2">
          View Hackathon
        </a>
      </div>
    </div>
  );
};

export const HackathonsComponent = ({ hackathons }) => {
  
  
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Hackathons</h2>
      {/* {hackathons.map((hackathon, index) => (
         <HackathonCard key={index} data={hackathon} />
      ))} */}
    </div>
  );
};

// export default HackathonsComponent
