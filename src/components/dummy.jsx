import axiosApi from "../axios";

export const Dummy=()=>{
    
    const getMyPostData = async () => {
        try {
          const res = await axiosApi.get("/posts");
          console.log(res.data);
        } catch (error) {
          console.log(error.message);
        }
      };
    
    return(
        <>
        <h1>hi i am dummy </h1>
        <button onClick={()=>getMyPostData()}>click </button>
        </>
    )
}

//keep this file for the testing of the axios apis 