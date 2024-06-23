import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
// import {axiosApi} from '../axios.jsx';
export function Signup() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [usn,setUsn]=useState('');
  const [role,setRole]=useState('');
  const [username,setUsername]=useState('');

  const signupHandler=async()=>{
    const data={
      email:email,
      password:password,
      usn:usn,
      role:role,
      username:username,
    }
    console.log(data);
    // try {
    //   const res = await axiosApi.post("/posts",data);
    //   console.log(res.message);
    // } catch (error) {
    //   console.log(error.message);
    // }
  }
  return (
    <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign Up
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" size="lg" onChange={(e)=>setEmail(e.target.value)}/>
        <Input label="Password" size="lg" onChange={(e)=>setPassword(e.target.value)}/>
        <Input label="Username" size="lg" onChange={(e)=>setUsername(e.target.value)}/>
        <Input label="USN" size="lg" onChange={(e)=>setUsn(e.target.value)}/>
        <div className="w-24 border border-gray-500 rounded-md">
          <select name="who are you ?" onChange={(e)=>setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="alumini">Alumini</option>
          </select>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={()=>signupHandler()}>
          Sign Up
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Already have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Sign in
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
}