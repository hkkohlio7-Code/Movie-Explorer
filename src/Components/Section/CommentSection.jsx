import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const CommentSection = ({data}) => {
const navigate = useNavigate();
let userName = data.reviews.results[0]?.author_details.username;
let rating = data.reviews.results[0]?.author_details.rating;
let date = data.reviews.results[0]?.created_at;
let reviewDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
})
const language = new Intl.DisplayNames(["en"], {
    type: "language"
}).of(data.original_language);

if(data.reviews.length === 0){return <div className='w-screen flex justify-center items-center'><h1 className='text-2xl '>No Comments Yet!</h1></div>}
  return (
      <>
        <div className='flex  lg:py-3 lg:px-4 flex-col gap-2  w-screen justify-center'>
            <div className='shadow-xl m-2 p-2 rounded-xl border-gray-300 border w-[95%]'>
                <div className="flex items-center gap-3">
                    <span className="h-12 w-12 rounded-full  bg-green-400 flex items-center justify-center cursor-pointer text-xl">
                        {userName?.charAt(0).toUpperCase()}
                    </span>
                    <div>
                        <p className='underline text-medium '>A Review By {userName}</p>
                        <div className='flex items-center gap-1 text-sm leading-tight'>
                            <div className='flex items-center gap-0.5 bg-blue-950  rounded-lg text-white px-0.5 text-sm'>
                            <span><Star size={14} strokeWidth={1.75} /></span>
                            <p className=" text-white  p-1 ">{rating * 10}%</p>
                            </div>
                            <div>
                                <p>Written by {userName} on {reviewDate} </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='p-2'>
                    <p className='text-sm'>{data.reviews.results[0]?.content}</p>
                </div>
            </div>
                <div className='px-1'>
                    <p className='text-medium font-semibold underline cursor-pointer hover:text-gray-400 w-36' onClick={()=> navigate(`/comments?query=${data.id}`)}>
                    Read All Reviews
                </p>
                </div>
        </div>


{/* Mobile View........ */}
        <div 
        className='block md:hidden'>
            <div className='flex flex-col items-start w-screen gap-5  py-2 px-5'>
                <div className='flex flex-col items-start leading-tight'>
                    <h1 className='font-semibold text-medium'>Status</h1>
                    <p className='text-sm'>{data.status}</p>
                </div>
                <div className='flex flex-col items-start leading-tight'>
                    <h1 className='font-semibold text-medium'>Original Language</h1>
                    <p className='text-sm'>{language}</p>
                </div>
                <div className='flex flex-col items-start leading-tight'>
                    <h1 className='font-semibold text-medium'>Budget</h1>
                    <p className='text-sm'>${data.budget.toLocaleString("en-US")}</p>
                </div>
                <div className='flex flex-col items-start leading-tight'>
                    <h1 className='font-semibold text-medium'>Revenue</h1>
                    <p className='text-sm'>${data.revenue.toLocaleString("en-US")}</p>
                </div>
            </div>
        </div>
      </>
  )
}

export default CommentSection