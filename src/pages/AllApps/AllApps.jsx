import React, { useEffect, useState } from "react";
import App from "../App/App";

const AllApps = () => {
  const [allApps, setAllApps] = useState();

  useEffect(() => {
    fetch("./appData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllApps(data);
      });
  }, []);

  return (
    <div>
      <h1 className="lg:text-4xl text-lg font-bold text-center py-5">
        Our All Applications
      </h1>
      <p className="text-lg text-gray-400 text-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 lg:gap-8 gap-3 py-2  lg:py-5 ">
        {allApps?.map((singleApp) => (
          <App key={singleApp.id} singleApp={singleApp}></App>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
