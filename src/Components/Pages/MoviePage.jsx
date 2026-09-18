import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import HeroSection from "../Section/HeroSection";
import CastSection from "../Section/CastSection";
import CommentSection from "../Section/CommentSection";
import VideoSection from "../Section/VideoSection";

const Movie = () => {
const [data, setData] = useState(null)
const [searchParams] = useSearchParams();
const query = searchParams.get("query");
console.log(query);
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${query}?append_to_response=credits,reviews,videos`,{
    headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzE3MjU2Yzk2YTIxZTE0NTRiZmY5NzIzM2FjYjgxOSIsIm5iZiI6MTc4OTMyMzgxMC4yNTcsInN1YiI6IjZhYTZlYTIyNzdhYzcxODBlNWVjYzE5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kUJ0Yk74_uzPVje_RAr0pJ9Itby4Cvb21uKqIAxpdR4"
    }})
  .then( Response => Response.json() )
  .then(data => {
  console.log(data);
  return setData(data)
  });
}, [query])

if(!data){
  return  <div className='flex justify-center items-center w-screen h-screen'>
        <h1 className='text-gray-700 text-2xl '>Lodaing.........</h1>
        </div>
}

return (
     <>
     <HeroSection data={data}/>
    <div className="flex flex-col px-3 py-11 items-center gap-3">
    <CastSection data={data}/>
    <CommentSection data={data}/>
    <VideoSection data={data}/>
    </div>
    </>
  )
}

export default Movie