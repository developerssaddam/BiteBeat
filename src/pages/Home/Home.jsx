import Hero from "../../components/Hero/Hero";
import "./Home.css";
import animateImg from "../../assets/wave.svg";

const Home = () => {
  return (
    <div className="flex flex-col mHeight items-center justify-center relative">
      <Hero />
      <img className="absolute bottom-0 w-full" src={animateImg} alt="" />
    </div>
  );
};

export default Home;
