import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
const ActorCard = () => {
    const [searchPararams] = useSearchParams();
    const navigate = useNavigate()
    const query = searchPararams.get("query");
    console.log(query)
    let URL = "https://image.tmdb.org/t/p/w185"
    const [data, setdata] = useState(null);
    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/person/${query}?append_to_response=combined_credits,external_ids,videos`, {
    headers: {
    Authorization:  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzE3MjU2Yzk2YTIxZTE0NTRiZmY5NzIzM2FjYjgxOSIsIm5iZiI6MTc4OTMyMzgxMC4yNTcsInN1YiI6IjZhYTZlYTIyNzdhYzcxODBlNWVjYzE5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kUJ0Yk74_uzPVje_RAr0pJ9Itby4Cvb21uKqIAxpdR4"
    }
    })
    .then(response => response.json())
    .then(data => {
    setdata(data);
    console.log(data);
    });
    }, [])

    if(!data){
        return <div className='w-screen h-screen justify-center items-center flex'><h1 className='text-2xl'>Loading........</h1></div>
    }
    let topMovies = data.combined_credits.cast.filter(movie => movie.media_type === 'movie').sort((a,b) => b.popularity - a.popularity).slice(0,12);
    let movies = data.combined_credits.cast.filter(movie => movie.media_type === 'movie').sort((a,b) => new Date(b.release_date) - new Date(a.release_date)); 
    let birthday = new Date(data.birthday);
    let formattedBirthday = birthday.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
    let age = new Date().getFullYear() - birthday.getFullYear();
      return (
    <>
    {/* Computer View......... */}
    <div className='md:block hidden'>
            <div className='min-h-screen py-10 max-w-screen flex justify-center'>
        <div className='flex w-[80%]'>
            <div className='w-[25%] flex flex-col gap-4  px-2'>
                <div className='flex flex-col gap-4'>
                    <img src={`https://image.tmdb.org/t/p/original${data.profile_path}`} 
                    className='h-10/12 rounded-lg'
                    loading='lazy'/>

                    <div className='flex gap-5 '>
                        <a 
                        href={`https://www.instagram.com/${data.external_ids.instagram_id}`}>
                        <img src='.\src\assets\instagram.png' className='h-5'/>
                        </a>
                        <a
                        href={`https://x.com/${data.external_ids.twitter_id}`}>
                        <img src='.\src\assets\twitter.png' className='h-5'/>
                        </a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div>
                            <h1 className='text-3xl'>
                                Personal Info
                            </h1>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <h1 className='text-lg'>
                                    Known For
                                </h1>
                                <p className='text-sm'>
                                    {data.known_for_department}
                                </p>
                            </div>
                            <div>
                                <h1 className='text-lg'>
                                    Gender
                                </h1>
                                <p className='text-sm'>
                                    {data.gender === 1? "Female" : data.gender === 2? "Male" : "Not Specified"}
                                </p>
                            </div>
                            <div>
                                <h1 className='text-lg'>
                                    Birthday
                                </h1>
                                <p className='text-sm'>
                                    {formattedBirthday} ({age}years old)
                                </p>
                            </div>
                            <div>
                                <h1 className='text-lg'>
                                    Place of Birth
                                </h1>
                                <p className='text-sm'>
                                    {data.place_of_birth}
                                </p>
                            </div>
                            <div>
                                <h1 className='text-lg'>
                                    Also Known As
                                </h1>
                                    <div className='flex flex-col gap-2'>
                                        {data.also_known_as.map((name,idx)=>{
                                        return <p key={idx} className='text-sm'>
                                            {name}
                                        </p>
                                    })}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className=' w-[75%] px-5  flex flex-col gap-8 py-2'>
                <h1 className='text-3xl font-semibold'>
                    {data.name}
                </h1>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-xl font-semibold'>
                        Biography
                    </h2>
                    <div className='w-[90%]'>
                        <p className='whitespace-pre-line leading-tight text-sm'>
                        {data.biography}
                    </p>
                    </div>
                </div>
                <div className='w-[90%]'>
                    <h1 className='text-2xl'>Known For</h1>
                    <div 
                    className='flex overflow-x-auto gap-8 p-4 cast-scrollbar border border-gray-300 rounded-xl shadow-2xl'>
                        {topMovies.map((movie)=>{
                        return <div key={movie.id} 
                                    className=' overflow-hidden shrink-0 rounded-lg border border-gray-300 shadow-2xl w-35 h-72 flex flex-col items-center hover:scale-105 transition-transform duration-300' onClick={()=> navigate(`/movie?query=${movie.id}`)}>
                                    <img src={`${URL}${movie.poster_path}`} className='h-52 object-cover' loading='lazy'/>
                                    <div className='px-2 py-1'>
                                        <p className='text-sm font-semibold'>
                                            {movie.title}
                                        </p>
                                    </div>
                                </div>
                        })}
                    </div>
                </div>    
                <div className='py-5'>
                    <h1 className='text-2xl'>
                        Acting
                    </h1>
                    <div className='w-[90%] border border-gray-300 shadow-2xl py-5 px-10 rounded-lg'>
                    
                        <ul className='list-disc space-y-4'>
                            {movies.map((movie)=>{
                                return <li key={movie.id}>
                                    <div className='flex  gap-4'>
                                        <div>
                                            <p>{movie.release_date ? movie.release_date.split("-")[0] : "NA"}</p>
                                        </div>
                                        <div>
                                            <h1 className='text-lg hover:text-gray-600 cursor-pointer' onClick={()=> navigate(`/movie?query=${movie.id}`)}>
                                            {movie.title}
                                        </h1>
                                        <p className='text-sm'>as {movie.character}</p>
                                        </div>
                                </div>
                                </li>
                            })}
                        </ul>
                </div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
    {/* Phone View.......... */}
    <div className='block md:hidden'>
        <div className='w-screen flex items-center pt-2 flex-col gap-2'>
        <img src={`https://image.tmdb.org/t/p/original${data.profile_path}`} 
        className='h-35 w-30 rounded-lg object-cover' loading='lazy'/>
        <h1 className='text-2xl font-bold'>{data.name}</h1>
        </div>
        <div className='flex justify-center gap-3 w-screen mt-1'>
            <a href={`https://x.com/${data.external_ids.twitter_id}`}>
                <img src='.\src\assets\twitter.png' className='h-5'/>
            </a>
            <a href={`https://www.instagram.com/${data.external_ids.instagram_id}`}>
                <img src='.\src\assets\instagram.png' className='h-5'/>
            </a>
        </div>
        <div className='flex flex-col gap-2 px-4'>
            <div>
                <h1 className='text-xl font-semibold'> Personal Info</h1>
            </div>
            <div className='flex flex-col gap-4'>
                <div>
                    <h1 className='font-semibold'>Known For</h1>
                    <p className='text-sm'>{data.known_for_department}</p>
                </div>
                <div>
                    <h1 className='font-semibold'>Gender</h1>
                    <p className='text-sm'>
                        {data.gender === 1? "Female" : data.gender === 2? "Male" : "Not Specified"}
                    </p>
                </div>
                <div>
                    <h1 className='font-semibold'>Birthday</h1>
                    <p className='text-sm'>{formattedBirthday} ({age}years old)</p>
                </div>
                <div>
                    <h1 className='font-semibold'>Place of Birth</h1>
                    <p className='text-sm'>{data.place_of_birth}</p>
                </div>
                <div>
                    <h1 className='font-semibold'>Also Known As</h1>
                    <div className='flex flex-col gap-1'>
                        {data.also_known_as.map((name,idx)=>{
                        return <p key={idx} className='text-sm'>
                                    {name}
                                </p>
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-2 px-4 mt-4'>
            <h1 className='text-xl font-semibold'>Biography</h1>
            <p className='text-sm'>{data.biography}</p>
        </div>
        <div className='px-6 flex flex-col gap-2 py-4'>
         <h1 className='text-lg font-semibold'>Acting</h1>
         <div>
            <ul className='list-disc space-y-4'>
            {data.combined_credits.cast.map((movie, idx)=>{
                return <li key={idx}>
                    <div className='flex gap-4'>
                        <div>
                            <p className='text-sm'>{movie.release_date ? movie.release_date.split("-")[0] : "NA"}</p>
                        </div>
                        <div>
                            <h1 className='text-sm' onClick={()=> navigate(`/movie?query=${movie.id}`)}>
                                            {movie.title}
                            </h1>
                            <p className='text-sm text-gray-400'>as {movie.character}</p>
                        </div>
                    </div>                    
                </li>
            })}
         </ul>
         </div>
        </div>
    </div>
    </>
  )
}

export default ActorCard