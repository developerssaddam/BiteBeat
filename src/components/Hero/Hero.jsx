import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero relative">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-[#FF00D3] via-blue-500 to-[#4A00FE] text-transparent bg-clip-text bg-300% animate-gradient">
              ByteBeat
            </span>{" "}
          </h1>
          <p className="py-6">
            ByteBeat is the bridge between the complex world of technology and
            the curious minds eager to understand it
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/blogs"
              className="inline-block rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#FF00D3]"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#FF00D3] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-[#FF00D3] transition duration-300 group-hover:text-[white] ease">
                Read Blogs
              </span>
            </Link>

            <Link
              to="/bookmarks"
              className="inline-block rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#FF00D3]"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#FF00D3] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-[#FF00D3] transition duration-300 group-hover:text-[white] ease">
                Bookmarks
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
