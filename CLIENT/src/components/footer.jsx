import { Typography } from "@material-tailwind/react";
import logo from "../logo/campusconnectlogo.png"
import { useNavigate } from "react-router-dom";
export function Footer() {
  const navigate=useNavigate();
  return (
    <footer className="w-full bg-white p-8">
      <hr className="my-8 border-blue-gray-50" />
      <div className="flex flex-col items-center justify-center bg-white">
        <img src={logo} alt="logo-ct" className="w-24 h-24" />
        <h1 className="text-lg text-custom-blue">Campus Connect</h1>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal hover:text-cyan-500" onClick={()=>navigate('/aboutus')}>
        About Us
      </Typography>
    </footer>
  );
}