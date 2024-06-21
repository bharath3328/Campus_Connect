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
  import { useDispatch, useSelector } from 'react-redux';
  import {loginUser} from '../slices/Authslice';
  export function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const dispatch=useDispatch();
    const loginHandler=()=>{
      const data={
        email:email,
        password:password,
      }
      // console.log(data);
      dispatch(loginUser(data));
    }

    return (
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" onChange={(e)=>setEmail(e.target.value)}/>
          <Input label="Password" size="lg" onChange={(e)=>setPassword(e.target.value)}/>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={()=>loginHandler()}>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    );
  }