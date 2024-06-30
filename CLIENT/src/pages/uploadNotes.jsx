import { useState } from "react"
import { useNavigate} from "react-router-dom";
export const UploadNotes=()=>{
    const [subject,setSubject]=useState('');
    const [chapter,setChapter]=useState('');
    const [link,setLink]=useState('');
    const [type,setType]=useState('');
    //get default sem data from the user
    //user who has uploaded it 
    const navigate=useNavigate();
    const sem=4;
    const handleSubmit=(e)=>{
      e.preventDefault();
       const notesData={
            subject:subject,
            chapter:chapter,
            link:link,
            type:type,
            sem:sem,
            //add sem from the user data
        }
        console.log(notesData);
      //  navigate('/questions');
       //after posting the notes reedirect to the notes page 
    }
    return(
        <>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded">
      <div className="mb-4">
        <label htmlFor="field1" className="block text-gray-700 text-sm font-bold mb-2">
          Subject:
        </label>
        <input required type="text" value={subject} className="shadow appearance-none border rounded w-full py-2 px-3
         text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e)=>setSubject(e.target.value)}/>
      </div>
      <div className="mb-4">
        <label htmlFor="field2" className="block text-gray-700 text-sm font-bold mb-2">
          Chapter Name:
        </label>
        <input
        required
          type="text"
          name="field2"
          id="field2"
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="field2" className="block text-gray-700 text-sm font-bold mb-2">
          Notes or Textbook:
        </label>
        <select
          onChange={(e) => setType(e.target.value)}
          className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          <option value="notes">Notes</option>
          <option value="textbook">Textbook</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="field2" className="block text-gray-700 text-sm font-bold mb-2">
          Semester:
        </label>
        <input
        required
          type="text"
          name="field2"
          id="field2"
          defaultValue={sem}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="field2" className="block text-gray-700 text-sm font-bold mb-2">
        Google Drive Link:
        </label>
        <input
        required
          type="text"
          name="field2"
          id="field2"
          value={link}
          onChange={(e)=>setLink(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
        type='submit'
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Upload
        </button>
      </div>
    </form>
        </>
    )
}