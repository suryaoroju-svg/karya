function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">

        <h1 className="text-4xl font-serif text-yellow-400 tracking-[10px]">
          KARYA
        </h1>

        <div className="flex gap-10 text-white font-medium">

          <a href="#">Home</a>

          <a href="#">Books</a>

          <a href="#">Authors</a>

          <a href="#">About</a>

          <button className="bg-yellow-500 text-black px-5 py-2 rounded-full hover:scale-110 transition">
            Login
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;