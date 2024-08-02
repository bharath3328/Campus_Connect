export const Notes=({data})=>{
    return(
        <>
        <div className=" border border-black shadow-md w-48 h-32 bg-white-300 rounded drop-shadow-md text-center m-3 p-4 " >
            <h4>Subject: {data.subject}</h4>
            <a href="https://drive.google.com/drive/folders/1URjHBQ9JqxqpyWykNPbUqiSNWE1OReBb?usp=sharing" className="hover:underline" > Chapter: {data.chapter}</a>
            <h4>{data.type}</h4>
            <h4>Semester: {data.sem}</h4>
        </div>
        </>
    )
}
