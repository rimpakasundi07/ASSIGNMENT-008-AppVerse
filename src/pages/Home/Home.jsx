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
        <p className="text-gray-500 lg:w-[1200px] mx-auto ">
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
      <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
        <div className="py-10">
          <h1 className="text-xl lg:text-4xl text-center font-semibold text-white">
            Trusted by Millions, Built for You
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
            {/* first */}
            <div className="space-y-3 py-3 lg:py-8">
              <p className="text-sm lg:text-lg  text-center  text-white">
                Total Downloads
              </p>
              <h2 className="text-xl lg:text-6xl text-center font-bold text-white">
                29.6 M
              </h2>
              <p className="text-sm lg:text-lg  text-center  text-white">
                21% more than last month
              </p>
            </div>
            {/* second */}
            <div className="space-y-3 py-3 lg:py-8">
              <p className="text-sm lg:text-lg  text-center  text-white">
                Total Reviews
              </p>
              <h2 className="text-xl lg:text-6xl text-center font-bold text-white">
                906 K
              </h2>
              <p className="text-sm lg:text-lg  text-center  text-white">
                46% more than last month
              </p>
            </div>
            {/* third */}
            <div className="space-y-3 py-3 lg:py-8">
              <p className="text-sm lg:text-lg  text-center  text-white">
                Active Apps
              </p>
              <h2 className="text-xl lg:text-6xl text-center font-bold text-white">
                132 +
              </h2>
              <p className="text-sm lg:text-lg  text-center  text-white">
                31 more will Launch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
