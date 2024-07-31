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
import { loginUser } from '../slices/Authslice';
import { useNavigate } from "react-router-dom";
export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = async() => {
    const data = {
      username: username,
      password: password,
    }
    dispatch(loginUser(data));
    navigate('/');
  }

  return (
    <div className="flex items-center justify-center mt-40">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          className="mb-4 grid h-28 place-items-center bg-custom-blue"
        >
          <Typography variant="h3" color="white">
            Login
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Username" size="lg" onChange={(e) => setUsername(e.target.value)} />
          <Input label="Password" size="lg" onChange={(e) => setPassword(e.target.value)} />
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-custom-blue"  fullWidth onClick={() => loginHandler()}>
            login
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              className="ml-1 font-bold text-custom-blue"
              onClick={() => navigate('/signup')}
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}