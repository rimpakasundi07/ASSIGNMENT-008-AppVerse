import { Download, Star, ThumbsUp } from "lucide-react";
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [installed, setInstalled] = useState(false);
  const handleInstall = () => {
    setInstalled(true);
    toast("App installed successful");
  };

  const singleApp = data.find((app) => app.id === parseInt(id));
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    description,
    size,
  } = singleApp;

  const handleAddToInstall = (id) => {};

  return (
    <div className="bg-gray-100 py-10">
      <div className="flex items-center gap-15 w-11/12 mx-auto py-4 ">
        <div className="w-[20%] bg-white rounded-lg shadow-xl p-5 ">
          <img className="mx-auto h-56 object-contain " src={image} alt="" />
        </div>
        <div className="w-[80%] ">
          <h1 className="lg:text-2xl text-xl ">
            <span className="font-bold">Plan:</span>
            {title}
          </h1>
          <p className="lg:text-lg text-gray-500">
            Developed by
            <span className="text-violet-600 font-semibold">
              {" "}
              {companyName}
            </span>
          </p>
          <hr className="my-6 text-gray-500"></hr>
          <div className="grid grid-cols-3 gap-5">
            {/* download */}
            <div>
              <Download className="text-2xl font-bold" />
              <p className="text-lg mx-auto">Downloads</p>
              <h3 className="lg:text-4xl text-xl font-bold mx-auto">
                {downloads}
              </h3>
            </div>
            {/* Average */}
            <div>
              <Star />
              <p className=" text-lg mx-auto">Average Ratings</p>
              <h3 className="lg:text-4xl text-xl font-bold mx-auto">
                {ratingAvg}
              </h3>
            </div>
            {/* rating */}
            <div>
              <ThumbsUp />
              <p className=" text-lg mx-auto">Total Reviews</p>
              <h3 className="lg:text-4xl text-xl font-bold mx-auto">
                {reviews}
              </h3>
            </div>
          </div>
          <button
            onClick={handleInstall}
            disabled={installed}
            className="bg-green-400 cursor-pointer mt-5 py-2 px-4 rounded font-semibold text-white hover:text-green-400 hover:bg-white hover:border-2 hover:border-green-400  "
          >
            {installed ? "installed" : " Install Now ({size} MB)"}
          </button>
        </div>
      </div>
      <hr className="my-6 text-gray-500 w-11/12 mx-auto"></hr>
      <div className="w-11/12 mx-auto  ">
        <h2 className="lg:text-2xl font-bold py-4">Description</h2>
        <p className="text-gray-500 text-lg  ">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
