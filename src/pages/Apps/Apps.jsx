import React, { Suspense, useEffect, useState } from "react";
import App from "../App/App";

const Apps = () => {
  const [singleApps, setSingleApps] = useState();

  useEffect(() => {
    fetch("./appData.json")
      .then((res) => res.json())
      .then((data) => {
        setSingleApps(data.slice(0, 8));
      });
  }, []);

  // const appPromise = fetch("./appData.json").then((res) => res.json());

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="lg:text-4xl py-8 text-xl font-bold text-center ">
        Trending Apps
      </h1>
      <p className="text-gray-500 text-center ">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 lg:gap-8 gap-3 py-2  lg:py-5 ">
        {singleApps?.map((singleApp) => (
          <App key={singleApp.id} singleApp={singleApp}></App>
        ))}
      </div>
      <div className="flex justify-center my-3">
        <button className="px-2  py-1 rounded-lg cursor-pointer hover:border-2 hover:border-sky-400 hover:bg-white hover:text-sky-500 font-bold  bg-sky-400 text-white">
          Show All
        </button>
      </div>
    </div>
  );
};

export default Apps;
