
const Subjects=()=>{
    return(
        <>
        <div className="bg-white text-black m-5 p-5 w-60 
        text-center font-bold font-xl rounded shadow-lg shadow-white border-black border-2 hover:bg-gray-200">
            Subject Name
        </div>
        </>
    )
}
export const ViewSubject=()=>{
    return(
        <>
        <div className='flex items-center justify-center my-8 '>
                <div className='grid '>
                    <Subjects/>
                    <Subjects/>
                    <Subjects/>
                    <Subjects/>
                </div>
            </div>
        </>
    )
}