const HeroSection = ({data}) => {

let URL = "https://image.tmdb.org/t/p/original"
const writers = data.credits.crew.filter(
  person => person.known_for_department === 'Writing'
)
const directors = data.credits.crew.filter(
  person => person.known_for_department === 'Directing'
)
  
return (
  <>
  {/* Dekstop Version.......... */}
    <div className="md:block hidden">
      <div className='flex lg:h-[90vh] h-[25vh] bg-cover bg-postion-[center_50%] 'style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45) ),url(${URL}${data.backdrop_path})`
}}>
        <div className=' w-[35vw] flex justify-end py-10'>
          <img src={`${URL}${data.poster_path}`} className='h-10/12 rounded-xl shrink-0 mr-10' loading="lazy"/>
        </div>
        <div className='w-[65vw]  py-10 px-2'>
          <div className='flex items-center gap-2'>
              <h1 className='text-3xl font-semibold text-white'>{data.original_title}</h1>
              <p className='text-3xl text-gray-200'>({data.release_date.split("-")[0]})</p>
          </div>
          <div className='flex gap-3 px-3 mt-1 text-sm'>
            <p className='text-medium text-white font-semibold'>{new Date(data.release_date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
              })}({data.origin_country})
            </p>
            <div className='flex gap-1 items-center font-semibold'>
              <span className='bg-white w-1 h-1 rounded-full'></span>
              <p className='text-white'>
                {data.genres[0]?.name}, {data.genres[1]?.name} and {data.genres[2]?.name}
              </p>
            </div>
            <div className='flex gap-1 items-center font-semibold'>
              <span className='bg-white w-1 h-1 rounded-full'></span>
              <p className='text-white'>
                {Math.floor((data.runtime)/60)}h {(data.runtime)% 60}m
              </p>
            </div>
          </div>
              <div className='mt-4 flex gap-2 items-center'>
                <div className='w-15 h-15 rounded-full flex items-center justify-center cursor-pointer hover:scale-107 bg-[#081C22] transition-transform        duration-300'>
                  <div className='w-13 h-13 rounded-full flex items-center justify-center'
                  style={{background: `conic-gradient(#21D07A ${Math.round(data.vote_average * 10)}%, #204529 ${Math.round(data.vote_average *10)}% 100%)`}}>
                    <div className='w-11 h-11  bg-[#081C22] rounded-full flex items-center justify-center'>
                    <span className='text-white text-sm font-bold'>
                      {Math.round(data.vote_average *10)}%
                    </span>
                    </div> 
                  </div>
                </div>
                <div>
                  <h2 className='text-medium font-semibold text-white leading-normal'>User</h2>
                  <h2 className='text-medium font-semibold text-white leading-normal'>Score</h2>
                </div>
              </div>
              <div className='mt-10'>
                <h2 className='text-lg text-gray-200 '>{data.tagline}</h2>
              </div>
              <div className='w-[90%] flex flex-col gap-3 mt-4' >
                <h1 className='text-white text-xl font-semibold'>Overview</h1>
                <p className='leading-relaxed text-white text-sm'>{data.overview}</p>
              </div>
              <div className="flex justify-between w-[85%] mt-8">
                    <div>
                      <p className="border-b border-white text-white text-lg cursor-pointer hover:text-gray-400">{writers[0]?.name}</p>
                      <p className="text-sm text-white">Writer</p>
                    </div>
                    <div>
                      <p className="border-b border-white text-white text-lg cursor-pointer hover:text-gray-400">{writers[1]?.name}</p>
                      <p className="text-sm text-white">Writer</p>
                    </div>
                    <div>
                      <p className="border-b border-white text-white text-lg cursor-pointer hover:text-gray-400">{directors[0]?.name}</p>
                      <p className="text-sm text-white">Director</p>
                    </div>
              </div>
            </div>
        </div>
  </div>

{/* Mobile Version............. */}
  <div className="block md:hidden">
    <div className="h-[21vh] bg-contain bg-center w-full pl-5 flex items-center" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.45)),url(${URL}${data.backdrop_path})` }} >
        <img src={`${URL}${data.poster_path}`} className="h-35 rounded-lg"/>     
    </div>
    <div className="bg-[#200B0B] w-screen h-[62vh] text-white">
      <div className="flex justify-center gap-1 items-center pt-2">
        <h1 className="text-lg text-white">{data.original_title}</h1>
        <p className="text-sm text-gray-400">({data.release_date.split("-")[0]})</p>
      </div>
      <div>
        <div className="p-2 flex gap-5 items-center">
          <div className="flex gap-1 items-center">
              <div className="bg-[#081C22] h-12 w-12 rounded-full flex items-center justify-center">
                <div className="h-10 w-10 rounded-full flex items-center justify-center" style={{background: `conic-gradient(#21D07A ${Math.round(data.vote_average * 10)}%, #204529 ${Math.round(data.vote_average *10)}% 100%)`}}>
                  <div className="bg-[#081C22] h-8 w-8 rounded-full flex items-center justify-center">
                  <span className="text-xs">{Math.round(data.vote_average *10)}%</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs">User</span>
                <span className="text-xs">Score</span>
              </div>
            </div>
          <div className="flex gap-1  flex-col">
            <div className="flex gap-3 items-center">
              <p className='text-xs'>{new Date(data.release_date).toLocaleDateString  ("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
                })} ({data.origin_country})
              </p>
              <div className='flex gap-2 items-center'>
              <span className='bg-white w-1 h-1 rounded-full'></span>
              <p className='text-xs'>
                {Math.floor((data.runtime)/60)}h {(data.runtime)% 60}m
              </p>
              </div>
              </div>
              <div className='flex gap-1 items-center'>
              <span className='bg-white w-1 h-1 rounded-full'></span>
              <p className='text-xs'>
                {data.genres[0]?.name}, {data.genres[1]?.name} and {data.genres[2]?.name}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-5 pt-3"><span className="text-gray-300">{data.tagline}</span></div>
      
      <div className="w-screen px-5 flex flex-col gap-1 mt-4">
        <h1 className="text-medium">Overview</h1>
        <p className="text-sm">{data.overview}</p>
              <div className="flex justify-between mt-8  w-full flex-wrap">
                    <div className="w-[50%]">
                      <p className=" text-medium underline text-gray-300">{writers[0]?.name}</p>
                      <p className="text-xs">Writer</p>
                    </div>
                    <div className="w-[50%]">
                      <p className=" text-medium underline text-gray-300">{writers[1]?.name}</p>
                      <p className="text-xs">Writer</p>
                    </div>
                    <div className="w-[50%] mt-5">
                      <p className=" text-medium underline text-gray-300">{directors[0]?.name}</p>
                      <p className="text-xs">Director</p>
                    </div>
              </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default HeroSection


