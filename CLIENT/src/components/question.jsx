import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip 
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { Answer } from '../pages/Answer';
import { useState } from "react";

export function Question({data}) {
  const navigate = useNavigate();
  const role = useSelector(state=>state.authUser.user.userRole);
  
  const isAnswered =data.isanswered;
  const qid=data._id;
  
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          @{data.username}
        </Typography>
        <Typography variant="h6" color="blue-gray">
          Subject: {data.subject}
        </Typography>
        <Typography>
          {data.question}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        { isAnswered===true ? (<Button onClick={() => navigate(`/viewanswer/${qid}`)}>View Answer</Button>) : 
                    (<Button onClick={()=>navigate(`/answer/${qid}`)}>Answer</Button>)
        }
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