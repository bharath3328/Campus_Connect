import { useState } from "react"
import { Textarea } from "@material-tailwind/react";

export const UploadBlog = () => {
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [company, setCompany] = useState('');
    const [salary, setSalary] = useState('');
    const [content, setContent] = useState('');
    const [headline, setHeadline] = useState('');
    const [image, setImage] = useState(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const blogData={
            name:name,
            year:year,
            company:company,
            salary:salary,
            content:content,
            image:image,
            headline:headline,
        }
        console.log(blogData);
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-md rounded my-10">
                <div className="flex items-center justify-center ">
                    <h1 className="block text-gray-700 text-xl font-bold mb-2">Write Your Blog</h1>
                </div>
                <div className="mb-4">
                    <label htmlFor="field1" className="block text-gray-700 text-sm font-bold mb-2">
                        Full Name:
                    </label>
                    <input required type="text" value={name} className="shadow appearance-none border rounded w-full py-2 px-3
         text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="field2" className="block text-gray-700 text-sm font-bold mb-2">
                        Year Of Passout:
                    </label>
                    <input
                        required
                        type="text"
                        name="field2"
                        id="field2"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="field2" className="block text-gray-700 text-sm font-bold mb-2">
                        Placed Company:
                    </label>
                    <input
                        required
                        type="text"
                        name="field2"
                        id="field2"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="field2" className="block text-gray-700 text-sm font-bold mb-2">
                        Salary (in CTC)
                    </label>
                    <input
                        required
                        type="text"
                        name="field2"
                        id="field2"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="field2" className="block text-gray-700 text-sm font-bold mb-2">
                        Headline of the Blog
                    </label>
                    <input
                        required
                        type="text"
                        name="field2"
                        id="field2"
                        value={headline}
                        onChange={(e) => setHeadline(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload your image (optional)</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="file_input" type="file" accept="image/jpeg" onChange={(e)=>setImage(e.target.files[0])}></input >
                </div>
                <div className="mb-4">
                    <label htmlFor="field2" className="block text-gray-700 text-sm font-bold mb-2">
                        Write Your Experience:
                    </label>
                    <div className="w-96">
                        <Textarea required rows={20} cols={20} value={content} onChange={(e) => setContent(e.target.value)} />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type='submit'
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Post 
                    </button>
                </div>
            </form>
        </>
    )
}

