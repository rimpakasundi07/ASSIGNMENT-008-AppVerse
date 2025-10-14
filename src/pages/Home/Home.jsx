import React from "react";

const Home = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="lg:text-5xl md:text-2xl text-xl py-5 font-semibold">
          We Build <br></br>
          <span className="text-violet-700">Productive </span>
          Apps
        </h1>
        <p className="text-gray-500 w-[1200px] mx-auto ">
          At AppVerse, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex gap-5 my-5 justify-center">
          <button className="border  cursor-pointer px-2 py-1 font-semibold  rounded-lg hover:bg-violet-400  hover:text-white">
            Google Play
          </button>
          <button className="border cursor-pointer  px-2 py-1 font-semibold rounded-lg hover:bg-violet-400  hover:text-white">
            App Store
          </button>
        </div>
      </div>
      <img className="mx-auto" src={"src/assets/hero.png"} alt="" />
    </div>
  );
};

export default Home;
