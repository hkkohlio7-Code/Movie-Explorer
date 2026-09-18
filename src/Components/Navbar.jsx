const Navbar = () => {
  return (
    <div className='bg-[#032541] max-w-screen h-[8vh] py-3 px-5 flex justify-between'>
        <div>
          <h1 className='text-xl text-white'>
            Movie App
          </h1>
        </div>
        <div className='flex gap-4 text-white'>
          <a href="/" className="hover:text-red-400">Home</a>
        </div>
      </div>
  )
}

export default Navbar