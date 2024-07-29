import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip 
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
export function Question() {
  //get role from the auth state
  // const state=useSelector((state)=>state.authUser);
  // const role=state.user.role;
  const navigate = useNavigate();
  const role = "teacher";
  const isAnswered = true;
  const isVerified = true;
  return (
    <Card className="mt-6 w-96">
      <CardBody>
      {isVerified === true && (
          <Button color="white" className="text-green-500">verified</Button>
        )}
        <Typography variant="h5" color="blue-gray" className="mb-2">
          @username
        </Typography>
        <Typography>
          question?
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {isAnswered ? <Button onClick={() => navigate('/viewanswer')}>View Answer</Button> : <Button onClick={() => navigate('/answer')}>Answer</Button>}
        {(role === "teacher" && isVerified!=true) && (
          <Button>Verify</Button>
        )}
      </CardFooter>
    </Card>
  );
}
//change that verify button to that answer page
//and after posting the answer rerender the page with the answer
//in the question card replace answer button with the view answer and remove the verify button

//get the question id as prop 
//send this as param to the answer post answer and view answer
//then display the answer