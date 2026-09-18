import { MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const CastSection = ({data}) => {
const navigate = useNavigate();
let URL = "https://image.tmdb.org/t/p/w185";
let cast = data.credits.cast.slice(0,9);
const language = new Intl.DisplayNames(["en"], {
    type: "language"
}).of(data.original_language);

  return (
    <>
    {/* Dekstop Version.......... */}
    <div className='max-w-screen md:block hidden'>
        <h1 className="text-2xl leading-normal  flex justify-center">
            Top Billed Cast
        </h1>
       <div className='flex w-full items-center justify-end gap-3'>
            <div className="overflow-x-auto gap-5 flex h-80 w-[70%] px-4 py-4 cast-scrollbar border border-gray-300 shadow-xl rounded-xl">
                {cast.map((cast)=>{
                    return <div key={cast.id} className="h-68 w-36 overflow-hidden rounded-lg border border-gray-300 shadow-2xl hover:scale-105 transition-transform duration-400 shrink-0">
                    <img src={`${URL}${cast.profile_path}`} className="h-44 w-full object-cover cursor-pointer" onClick={()=> navigate(`/actorCard?query=${cast.id}`)} loading='lazy'/>
                    <div className="px-2 py-1">
                        <h1 className="text-medium">{cast.name}</h1>
                        <p className="text-sm leading-relaxed text-gray-700">{cast.character}</p>
                    </div>
                </div>
                })}
                <div className='flex flex-col justify-center items-center cursor-pointer h-68 w-36 overflow-hidden rounded-lg border border-gray-300 shadow-2xl shrink-0 ' onClick={()=> navigate(`/castepage?query=${data.id}`)}>
                    <MoveRight size={28} />
                    <h1>View More</h1>
                </div>
            </div>
            <div className=' flex flex-col items-start w-[15%] gap-10  py-2 px-5'>
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
    </div>

    {/* Mobile Version........ */}
<div className='block md:hidden w-screen'>
    <h1 className='text-lg ml-2'>Top Billed Cast</h1>
<div className='flex justify-center'>
            <div className="overflow-x-auto gap-5 flex h-72 py-2 w-full px-2 cast-scrollbar">
                {cast.map((cast)=>{
                    return <div key={cast.id} className="h-65 w-36 overflow-hidden rounded-lg border border-gray-300 shrink-0">
                    <img src={`${URL}${cast.profile_path}`} className="w-full object-cover h-40" onClick={()=> navigate(`/actorCard?query=${cast.id}`)} loading='lazy'/>
                    <div className="px-2 py-1">
                        <h1 className="text-medium">{cast.name}</h1>
                        <p className="text-sm leading-relaxed text-gray-700">{cast.character}</p>
                    </div>
                </div>
                })}
        <div className='flex flex-col justify-center items-center h-65 w-36 rounded-lg border border-gray-300 shrink-0 ' onClick={()=> navigate(`/castepage?query=${data.id}`)}>
            <MoveRight size={28} />
            <h1>View More</h1>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default CastSection