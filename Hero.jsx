import "./Hero.css";

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <div className="books">
        <div className="book b1"></div>
        <div className="book b2"></div>
        <div className="book b3"></div>
        <div className="book b4"></div>
        <div className="book b5"></div>
      </div>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center">

        <h1 className="text-8xl font-serif text-yellow-400 tracking-[15px] glow">
          KARYA
        </h1>

        <p className="text-gray-300 text-2xl mt-6">
          Where Every Story Finds Its Readers
        </p>

        <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full text-xl transition hover:scale-110">
          Explore Books
        </button>

      </div>

    </section>
  );
}

export default Hero;