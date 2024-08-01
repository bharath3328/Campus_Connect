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
import { useNavigate } from "react-router-dom";
import axios from '../axios';
export function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usn, setUsn] = useState('');
  const [role, setRole] = useState('student');
  const [username, setUsername] = useState('');
  const [sem, setSem] = useState();
  const navigate = useNavigate();
  const signupHandler = async () => {
    const data = {
      email: email,
      password: password,
      USN: usn,
      userRole: role,
      username: username,
      semester: sem,
    }
    console.log(data);
    try {
      const res = await axios.post("/api/user/signup",data);
      console.log(res.data);
      //dispatch notification
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  }
  
  
  return (
    <div className="flex items-center justify-center mt-40">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          className="mb-4 grid h-28 place-items-center bg-custom-blue"
        >
          <Typography variant="h3" color="white">
            Sign Up
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input required label="Email" size="lg" onChange={(e) => setEmail(e.target.value)} />
          <Input required label="Password" type="password" size="lg" onChange={(e) => setPassword(e.target.value)} />
          <Input required label="Username" size="lg" onChange={(e) => setUsername(e.target.value)} />
          <Input required label="USN" size="lg" onChange={(e) => setUsn(e.target.value)} />
          <Input required type='number' min='1' max='8' label="Semester" size="lg" onChange={(e) => setSem(e.target.value)} />
          <div className="w-auto">
            <select className="p-2 m-2" required name="who are you ?" onChange={(e)=>setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="alumni">Alumini</option>
            <option value="teacher">Teacher</option>
          </select>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-custom-blue" fullWidth onClick={() => signupHandler()}>
            Sign Up
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              className="ml-1 font-bold text-custom-blue"
              onClick={() => navigate('/login')}
            >
              Sign in
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}