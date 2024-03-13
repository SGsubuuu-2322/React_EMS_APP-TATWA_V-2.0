// import React from 'react'

import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const Navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser");
  const user = JSON.parse(loggedInUser);
  const logout = () => {
    Navigate("/login");
    localStorage.removeItem("loggedInUser");
  };
  // const loggedInUser = localStorage.getItem("loggedInUser");
  return (
    <div className="w-full h-[12%] px-6">
      <div className="content w-full bg-zinc-100 flex items-center justify-between px-3 overflow-y-hidden">
        <div className="logo-container flex items-center">
          <div className="img-container h-20 w-20">
            <img
              src="https://www.pngitem.com/pimgs/m/523-5233379_employee-management-system-logo-hd-png-download.png"
              alt="EMS logo"
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="text-sky-900 text-2xl font-bold ">EMS</h1>
        </div>

        <div className="navigation">
          <ul className="flex gap-20">
            <Link
              to="/"
              className="text-xl font-medium hover:underline hover:underline-offset-4 hover:text-primary text-xl font-semibold hover:transition-all"
            >
              Home
            </Link>

            <Link
              to={`/user-profile/${user.id}`}
              className="text-xl font-medium hover:underline hover:underline-offset-4 hover:text-primary text-xl font-semibold hover:transition-all"
            >
              About
            </Link>
            <button
              onClick={logout}
              className="px-3 py-2 bg-primary rounded-lg shadow font-semibold hover:bg-secondary hover:text-secondarylite"
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
