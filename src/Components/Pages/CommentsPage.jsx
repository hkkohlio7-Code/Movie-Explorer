import { useState,useEffect } from "react";
import { Star } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";

const Comments = () => {
const [data, setData] = useState([]);
const [searchParams] = useSearchParams();
const query = searchParams.get("query");
const navigate = useNavigate();   
useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${query}/reviews`,{
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzE3MjU2Yzk2YTIxZTE0NTRiZmY5NzIzM2FjYjgxOSIsIm5iZiI6MTc4OTMyMzgxMC4yNTcsInN1YiI6IjZhYTZlYTIyNzdhYzcxODBlNWVjYzE5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kUJ0Yk74_uzPVje_RAr0pJ9Itby4Cvb21uKqIAxpdR4"}})
            .then(Response => Response.json())
            .then(data => {
                return setData(data.results)});}, [])
console.log(data)
if(!data)
    {return  <div className='flex justify-center items-center w-screen h-screen'>
        <h1 className='text-gray-700 text-2xl '>Loading........</h1>
        </div>}     
return (
    <div className='max-w-screen min-h-screen flex justify-center'>
        <div className='lg:w-[80%] w-[95%] py-3 flex flex-col gap-3'>
            <h1 className="underline hover:text-gray-400 cursor-pointer" onClick={()=> navigate(-1)}>Back To Previous Page</h1>
            {data.map((cmt,idx)=>{
                return <div key={idx} className='shadow-xl m-2 p-2  rounded-xl border-gray-300 border w-full'>
                <div className="flex items-center gap-3">
                    <span className="h-12 w-12 rounded-full  bg-green-400 flex items-center justify-center cursor-pointer text-xl">
                        {cmt.author_details.username.charAt(0).toUpperCase()}
                    </span>
                    <div>
                        <p className='underline text-medium '>A Review By {cmt.author_details.username}</p>
                        <div className='flex items-center gap-1 text-sm leading-tight'>
                            <div className='flex items-center gap-0.5 bg-blue-950  rounded-lg text-white px-0.5 text-sm'>
                            <span><Star size={14} strokeWidth={1.75} /></span>
                            <p className=" text-white  p-1 ">{cmt.author_details.rating* 10}%</p>
                            </div>
                            <div>
                                <p>Written by {cmt.author_details.username} on {new Date(cmt.created_at).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric"
                                    })} </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='p-2'>
                    <p className='text-sm'>{cmt.content}</p>
                </div>
            </div>
            })}
        </div>
    </div>
  )
}

export default Comments