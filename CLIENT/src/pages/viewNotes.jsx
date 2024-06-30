import { Notes } from '../components/Notes'
export const ViewNotes = () => {
    return (
        <>
            <div className='flex items-center justify-center my-8 '>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:grid-cols-3'>
                    <Notes />
                    <Notes />
                    <Notes />
                    <Notes />
                    <Notes />
                    <Notes />
                    <Notes />
                    <Notes />
                </div>
            </div>
        </>
    )
}
//this component is subject wise notes 
//this will be redirected when we click the subject link
//this page will be rendered when someone clicks the on the subject 
//we will access the params to get sub name and make an axios request to get all the notes related to the subject
