import { useSearchParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

const SearchPage = () => {
const navigate = useNavigate();
let URL = "https://image.tmdb.org/t/p/w185";
const [data, setData] = useState(null)
const [searchParams] = useSearchParams();
const query = searchParams.get("query");
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzE3MjU2Yzk2YTIxZTE0NTRiZmY5NzIzM2FjYjgxOSIsIm5iZiI6MTc4OTMyMzgxMC4yNTcsInN1YiI6IjZhYTZlYTIyNzdhYzcxODBlNWVjYzE5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kUJ0Yk74_uzPVje_RAr0pJ9Itby4Cvb21uKqIAxpdR4";
useEffect(()=>{
  const fetchSearch = async ()=>{
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.status)
    const data = await response.json();

    console.log(data);
    setData(data);
  }
  fetchSearch();
 },[query])
 if(!data){return <div className='w-screen h-screen flex justify-center items-center'><h1 className='text-2xl'>Loading......</h1></div>}

return (
  <div className='w-full flex justify-center py-10 '>
    <div className='w-[95%] flex flex-col gap-8 lg:w-[80%]'>
        {data.results.map((movie)=>{
        return <div key={movie.id} className='border  border-gray-300 shadow-xl shrink-0 overflow-hidden rounded-2xl flex ' onClick={()=>navigate(`/movie?query=${movie.id}`)}>
          <div className='shrink-0'>
            <img src={`${URL}${movie.poster_path}`} className='object-cover lg:w-40 w-30'  loading='lazy'/>
          </div>
          <div className='py-2 px-3 flex flex-col gap-4 lg:pr-6'>
            <div>
              <h1 className='lg:text-xl text-medium leading-tight'>{movie.title}</h1>
              <p className='text-sm'>{new Date(movie.release_date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
                })}
              </p>
            </div>
            <p className='wrap-break-word text-sm lg:text-medium text-gray-800'>{movie.overview}</p>
          </div>
        </div>})}
    </div>
  </div>
  )
}

export default SearchPage