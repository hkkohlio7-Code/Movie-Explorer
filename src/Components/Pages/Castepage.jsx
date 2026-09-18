
import { MoveLeft } from 'lucide-react';
import { useState,useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
const Castepage = () => {
const [data, setData] = useState(null)
const navigate = useNavigate();
const [searchParams] = useSearchParams();
const query = searchParams.get("query");
console.log(query);    
let URL = "https://image.tmdb.org/t/p/w185"
  useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${query}?api_key=c317256c96a21e1454bff97233acb819&append_to_response=credits`,{
    headers: {
     Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzE3MjU2Yzk2YTIxZTE0NTRiZmY5NzIzM2FjYjgxOSIsIm5iZiI6MTc4OTMyMzgxMC4yNTcsInN1YiI6IjZhYTZlYTIyNzdhYzcxODBlNWVjYzE5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kUJ0Yk74_uzPVje_RAr0pJ9Itby4Cvb21uKqIAxpdR4"
    }})
  .then(Response => Response.json())
  .then(data => {
    console.log(data);
    return setData(data)
  });
}, [])
      
if(!data){
  return  <div className='flex justify-center items-center'>
          <h1 className='text-gray-700 text-2xl '>Lodaing.........</h1>
</div>
}
  return (
    <div className='max-w-screen min-h-screen py-8'>
        <div className='flex justify-center bg-[#DFDFDF]'>
        <div className=' w-[80%] h-32 py-2 flex items-center border'>
            <div className='h-[95%] flex gap-3'>
              <img src={`${URL}${data.poster_path}`} className='lg:h-24 h-20' loading='lazy'/>
            <div>
              <h1 className='lg:text-3xl text-lg font-semibold mb-2'>{data.title}({new Date(data.release_date).getFullYear()})</h1>
              <p className='flex items-center gap-1 hover:text-gray-400 cursor-pointer text-sm lg:text-medium' onClick={()=> navigate(-1)}><MoveLeft size={16} />Back to Main</p>
            </div>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center py-8'>
          <div className=' w-[80%] flex justify-between flex-col lg:flex-row'>
            <div className='w-[50%] flex flex-col gap-4'>
              <h1 className='text-lg'>
                Cast {data.credits.cast.length}
              </h1>
              <div className='flex flex-col gap-6'>
                {data.credits.cast.map((cast,idx)=>{
                  return <div key={idx} className='flex gap-5'>
                    <img src={`${URL}${cast.profile_path}`} className='h-16 w-16 rounded-lg object-cover' loading='lazy'/>
                    <div>
                      <h1 className='font-semibold'>{cast.name}</h1>
                      <p className='text-sm'>{cast.character}</p>
                    </div>
                  </div>
                })}
              </div>
            </div>
            <div className='w-[50%] flex flex-col gap-4'>
              <h1>
                Crew {data.credits.crew.length}
              </h1>
              <div className='flex flex-col gap-6'>
                {data.credits.crew.map((crew,idx)=>{
                  return <div key={idx} className='flex gap-5'>
                    <img src={`${URL}${crew.profile_path}`} className='h-16 w-16 rounded-lg object-cover'/>
                    <div>
                      <h1 className='font-semibold'>{crew.name}</h1>
                      <p className='text-sm'>{crew.department}</p>
                    </div>
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Castepage