import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="text-lg font-bold  px-2 py-1 rounded hover:bg-white hover:border hover:border-violet-500  hover:text-violet-500">
          Home
        </li>
      </Link>
      <Link to="/allApps">
        <li className="text-lg font-bold px-2 py-1 rounded hover:bg-white hover:border hover:border-violet-500  hover:text-violet-500">
          Apps
        </li>
      </Link>
    </>
  );
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
            {links}
          </ul>
        </div>
        <a className="font-bold lg:ml-6 text-[#9e16cb] lg:text-3xl text-lg">
          AppVerse
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-3">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn mr-6 text-white font-semibold bg-gradient-to-bl from-[#9400D0] to-[#4B0082]">
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
