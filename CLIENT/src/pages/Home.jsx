import React from 'react';
import logo from '../logo/campusconnect-logo2.png';
import {useNavigate} from "react-router-dom";
const features = [
  {
    title: "Q&A Section",
    description: "Ask questions and get answers from the community.",
    icon: "❓",
  },
  {
    title: "Resource Sharing",
    description: "Share and access notes,lecture materials and other resources.",
    icon: "📚",
  },
  {
    title: "Alumni Interaction",
    description: "Engage with alumni for guidance and mentorship.",
    icon: "🎓",
  },
  {
    title: "News Section",
    description: "Stay updated with news about hackathons and seminars.",
    icon: "📰",
  },
  {
    title: "Industry Connect",
    description: "Get notifications of jobs and internships",
    icon: "🏢",
  },
];
// bg-gradient-to-r from-cyan-500 to-blue-500
export const Home = () => {
  const navigate=useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="h-screen relative flex flex-col items-center justify-center text-center">
        <img src={logo} className='h-96 w-96'></img>
        <h1 className="text-white bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 whitespace-nowrap overflow-hidden border-r-4 border-white animate-typing">
          Campus Connect
        </h1>
        <p className="text-white bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 px-4">
          Linking Students, Alumni, and Industry
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <button onClick={()=>navigate('/signup')} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full shadow-lg transform transition duration-500 hover:scale-105 hover:bg-blue-600 hover:text-white">
            Signup
          </button>
          <button onClick={()=>navigate('/login')} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full shadow-lg transform transition duration-500 hover:scale-105 hover:bg-blue-600 hover:text-white">
            Login
          </button>
        </div>
      </div>
      <div className=" mb-60 mt-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-2/3">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};

const FeatureCard = ({ feature }) => {
  
  return (
    <div
      className={`transform transition duration-500 ease-in-out bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 shadow-lg flex flex-col items-center text-center`}
    >
      <div className="text-6xl mb-4">{feature.icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
};
