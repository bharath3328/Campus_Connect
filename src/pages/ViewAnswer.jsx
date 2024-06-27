import { Button } from "@material-tailwind/react";
import { Loading } from '../components/Loading';
import { useState } from "react";
export const ViewAnswer = () => {
    const [load,setLoad]=useState(false);
    if(load){
        return <Loading/>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus ratione atque tempore soluta, voluptas ex accusamus perferendis, sequi laboriosam corrupti nostrum, temporibus veniam enim possimus alias cumque esse id.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus ratione atque tempore soluta, voluptas ex accusamus perferendis, sequi laboriosam corrupti nostrum, temporibus veniam enim possimus alias cumque esse id.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus ratione atque tempore soluta, voluptas ex accusamus perferendis, sequi laboriosam corrupti nostrum, temporibus veniam enim possimus alias cumque esse id.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus ratione atque tempore soluta, voluptas ex accusamus perferendis, sequi laboriosam corrupti nostrum, temporibus veniam enim possimus alias cumque esse id.
                    </p>
                    <div className="flex item-center justify-center ">
                        <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg" alt="no answer image "
                            className="h-full max-w-xl hover:scale-150 " />
                    </div>
                    <div className="mx-5 my-5 flex justify-between ">
                        <div className="flex gap-5">
                            <Button >edit </Button>
                            <Button>delete </Button>
                        </div>
                        <Button>verify </Button>
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
