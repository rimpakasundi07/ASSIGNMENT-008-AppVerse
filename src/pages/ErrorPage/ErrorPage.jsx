import React from "react";
import errorLogo from "../../assets/App-Error.png";

const ErrorPage = () => {
  return (
    <div>
      <img className="mx-auto lg:py-15 py-5 " src={errorLogo} alt="" />
      <h2 className="text-xl lg:text-3xl font-bold text-center">
        OPPS!! APP NOT FOUND
      </h2>
      <p className="text-lg text-gray-500  text-center py-5 ">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <div className=" flex justify-center items-center">
        <button className="text-xl font-bold px-7 py-3 hover:text-violet-600 hover:bg-white hover:border-2 hover:border-violet-6000 object-contain text-white  bg-violet-600 rounded">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
