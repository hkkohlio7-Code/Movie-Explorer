const SearchCard = ({search, setSearch, handleSearch}) => {
return (
  <div className='flex flex-col justify-center lg:h-48 h-35 lg:px-70 px-3 gap-2 lg:gap-6 w-screen'  style={{
    background:
    "linear-gradient(90deg, rgba(1,153,211,0.9) 0%, rgba(1,153,211,0.7) 35%, rgba(1,153,211,0.5) 70%, rgba(1,153,211,0.3) 100%)"}}>
      <div>
        <h1 className='lg:text-4xl text-xl text-white'>Welcome.</h1>
        <h2 className='lg:text-2xl text-medium text-white'>Millions of Movies & Shows to discover. Explore Now</h2>
      </div>
      <div className='bg-white px-0.5 rounded-3xl lg:h-12 h-9  flex items-center'>
        <input type='text' placeholder='Search for Movies' className='lg:w-[90%] w-[80%] rounded-3xl h-[85%] px-4 flex itmes-center lg:text-lg text-gray-500 border-none outline-none'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        onKeyDown={(e)=>{
          if (e.key === "Enter"){
            handleSearch();
            setSearch('');
          }
        }}/>
        <button className='lg:w-[10%] w-[20%] h-[85%] rounded-3xl bg-teal-400 text-white text-sm lg:text-medium' onClick={()=>{handleSearch(); setSearch('')}}>Search</button>
      </div>
  </div>  
  )
}

export default SearchCard