import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TrendingSection = () => {
const navigate = useNavigate();
const  token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzE3MjU2Yzk2YTIxZTE0NTRiZmY5NzIzM2FjYjgxOSIsIm5iZiI6MTc4OTMyMzgxMC4yNTcsInN1YiI6IjZhYTZlYTIyNzdhYzcxODBlNWVjYzE5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kUJ0Yk74_uzPVje_RAr0pJ9Itby4Cvb21uKqIAxpdR4";
const URL = `https://image.tmdb.org/t/p/w185`;
const [trending, setTrending] = useState([])
useEffect(()=>{
fetch("https://api.themoviedb.org/3/trending/movie/week",{
    headers: {
    Authorization: `Bearer ${token} `
}})
.then(Response => Response.json())
.then(data => {
    return setTrending(data.results);
});
}, [])

return (
    <div className='w-full flex justify-center'>
        <div className='lg:w-[80%] w-[95%] flex flex-col gap-2'>
            <h1 className='lg:text-2xl text-xl'>Trending</h1>
            <div className='flex overflow-x-auto gap-5 lg:py-6 py-3 lg:px-3 cast-scrollbar rounded-2xl lg:border border-gray-300 lg:shadow-2xl'>
                {trending.map((trend)=>{
                return <div key={trend.id} className='lg:h-90 h-75 w-40 border border-gray-300 shadow-2xl shrink-0 overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300' onClick={()=>navigate(`/movie?query=${trend.id}`)}>
                    <img src={`${URL}${trend.poster_path}`} className='lg:h-56 h-48 w-full object-center' loading="lazy"/>
                    <div className='px-2 py-1' >
                        <h1 className='lg:text-lg text-medium'>
                            {trend.title}
                        </h1>
                        <p className='lg:text-sm text-xs text-gray-800'>{new Date(trend.release_date).toLocaleDateString("en-GB", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                            })}
                        </p>
                    </div>
                  </div>
                })}
              </div>
        </div>
    </div>
      )
    }



export default TrendingSection