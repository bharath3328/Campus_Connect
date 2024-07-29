import { Blog } from "../components/Blog"
export const Blogs = () => {
    return (
        <>
            <div className="flex items-center justify-center my-10">
                <div className="grid md:grid-cols-2 gap-10 ">
                    <Blog />
                    <Blog />
                </div>
            </div>
        </>
    )
}