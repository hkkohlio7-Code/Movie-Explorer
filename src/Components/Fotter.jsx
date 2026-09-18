const Footer = () => {
  return (
    <footer className="bg-[#032541] text-white  px-6 py-10 mt-auto">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-2xl font-bold mb-3">
          🎬 Movie App
        </h2>

        <p className="text-zinc-400 mb-5">
          Discover popular movies and search for your favorites.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a href="/" className="hover:text-red-400">Home</a>
          <a href="/popular" className="hover:text-red-400">Popular</a>
          <a href="/search" className="hover:text-red-400">Search</a>
        </div>

        <p className="text-sm text-zinc-500">
          Data provided by TMDB
        </p>

        <p className="text-sm text-zinc-500 mt-2">
          © 2026 Movie App
        </p>

      </div>
    </footer>
  );
};

export default Footer;