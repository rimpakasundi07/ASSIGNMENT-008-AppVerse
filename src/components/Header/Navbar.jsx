import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Apps</a>
            </li>

            <li>
              <a>Installation</a>
            </li>
          </ul>
        </div>
        <a className="font-bold text-[#9e16cb] lg:text-3xl text-xl">AppVerse</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-lg font-bold hover:bg-white hover:border hover:border-violet-500  hover:text-violet-500">
              Home
            </a>
          </li>
          <li>
            <a className="text-lg font-bold hover:bg-white hover:border hover:border-violet-500  hover:text-violet-500">
              Apps
            </a>
          </li>

          <li>
            <a className="text-lg font-bold hover:bg-white hover:border hover:border-violet-500  hover:text-violet-500">
              Installation
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-white font-semibold bg-gradient-to-bl from-[#9400D0] to-[#4B0082]">
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
