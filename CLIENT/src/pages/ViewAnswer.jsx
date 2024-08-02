import { useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Loading } from '../components/Loading';
import { useState } from "react";
import { useEffect } from "react";
import axios from '../axios';
import { useSelector } from 'react-redux';
export const ViewAnswer = () => {
    const { id } = useParams();
    const [answerObj, setAnswer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const role = useSelector(state => state.authUser.user.userRole);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/answers/getAns/${id}`);
                setAnswer(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const qnid = answerObj.q_id;
    console.log(qnid);
    const verify = async () => {
        const response = await axios.post(`/api/answers/isVerified/${qnid}`);
        console.log(response.data);
    }

    if (error) return <p>Error: {error.message}</p>;
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <div className="flex item-center justify-center my-5 ">
                <div className="shadow-lg shadow-black bg-white-400 text-black h-fit w-2/4 border-2 border-black p-7 rounded-lg">
                    <div className="flex justify-between">
                        <h1 className="text-2xl text-bold">@username</h1>
                        <Button color="white" className="text-green-500">verified</Button>
                    </div>
                    <h1 className="text-2xl text-bold">this will be the question ? this will be the question ? this will be the question ?</h1>
                    <p className="my-5">
                        <h2>Answered by @username</h2>
                        <h2>Answer:</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime nostrum delectus a tempora, placeat nesciunt! Culpa magni consectetur magnam odio accusamus labore cumque doloribus, quis, laudantium voluptas exercitationem aspernatur eum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nam temporibus! Id quaerat sint reiciendis suscipit quos possimus sit adipisci et. Sapiente, rerum culpa est exercitationem magni iusto excepturi fugit.
                        </p>
                    </p>
                    <div className="flex item-center justify-center ">
                        <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg" alt="no answer image "
                            className="h-full max-w-xl hover:scale-150 " />
                    </div>
                    <div className="mx-5 my-5 flex justify-between ">
                        {/* <div className="flex gap-5">
                            <Button >edit </Button>
                            <Button>delete </Button>
                        </div> */}
                        {
                            role === 'teacher' && <Button onClick={()=>verify()} > verify </Button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
//with the parameters u will get the answer for the question
//then  display it
//use effect to fetch the answer
// conditional rendering for the buttons and verification


//add edit and delete options later 

// ()=>verify()

// 