import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from '../axios';
import { useDispatch} from 'react-redux';
import { useNotifications } from '../slices/notifications';
import {notify} from '../slices/notificationSlice';
export const UploadNotes = () => {
  const [subject, setSubject] = useState('');
  const [chapter, setChapter] = useState('');
  const [link, setLink] = useState('');
  const [type, setType] = useState('Notes');
  const [sem, setSem] = useState(1);
  useNotifications();
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const notesData = {
      subject: subject,
      chapter: chapter,
      link: link,
      type: type,
      sem: sem,
    }
    console.log(notesData);
    try{
      const response = await axios.post('/api/notes/uploadNotes',notesData);
      dispatch(notify({message:'Material Uploaded Successfully',type:'success'}));
      navigate('/viewnotes');
    }catch(err)
    {
      dispatch(notify({message:'error: please try again',type:'error'}));
      navigate('/viewnotes');
    }
  }
 
  
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded my-10">
        <div className="flex my-5 items-center justify-center">
          <h1 className="text-lg">Upload Materials</h1>
        </div>
        <div className="mb-4">
          <label htmlFor="field1" className="block text-gray-700 text-sm font-bold mb-2">
            Subject:
          </label>
          <input required type="text" value={subject} className="shadow appearance-none border rounded w-full py-2 px-3
         text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setSubject(e.target.value)} />
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
            <option value="Notes">Notes</option>
            <option value="Textbook">Textbook</option> 
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
            onChange={(e) => setSem(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="field2" className="block text-gray-700 text-sm font-bold mb-2">
            Google Drive Link:
          </label>
          <input
            required
            type="url"
            name="field2"
            id="field2"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center my-10">
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