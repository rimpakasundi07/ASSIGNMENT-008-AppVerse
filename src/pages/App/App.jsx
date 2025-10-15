import { Download, Star } from "lucide-react";
import React from "react";

const App = ({ singleApp }) => {
  //   const data = use(appPromise);
  //   console.log(data);
  const { title, ratingAvg, downloads, image } = singleApp;

  return (
    <div className="bg-white rounded-lg p-5 shadow-2xl">
      <div>
        <img
          className="rounded-lg object-contain bg-gray-100 p-3 w-full h-48 "
          src={image}
          alt=""
        />
      </div>
      <div className="">
        <p className="lg:text-2xl text-xl font-semibold py-2">{title}</p>

        <div className="flex justify-between items-center  py-3">
          <p className="flex items-center bg-yellow-50 p-1 rounded text-yellow-500  gap-2  font-semibold lg:text-xl text-lg">
            <Star className="text-yellow-500" />
            {ratingAvg}
          </p>
          <p className="flex items-center gap-2 bg-green-50  p-1 rounded text-green-500  font-semibold lg:text-xl text-lg">
            <Download className="text-green-500" />
            {downloads}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
