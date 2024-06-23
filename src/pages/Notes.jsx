export const Notes=()=>{
    //get data from the axios request
    const data={
        subject:"ada",
        chapter:"brute force",
        type:"notes",
        link:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2520nature%2F&psig=AOvVaw1rnQd2V_f2m9gMpICD_2Gs&ust=1719197310267000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCE_pnb8IYDFQAAAAAdAAAAABAE"
    }
    //replace the link with the gdrive link
    const handleClick=()=>{
        window.location.assign(data.link);
        //we have a redirect notice 
    }
    return(
        <>
        <div className="w-48 h-32 bg-gray-300 rounded drop-shadow-md" onClick={()=>handleClick()}>
            <h4>{data.subject}</h4>
            <h4>{data.chapter}</h4>
            <h4>{data.type}</h4>
        </div>
        </>
    )
}