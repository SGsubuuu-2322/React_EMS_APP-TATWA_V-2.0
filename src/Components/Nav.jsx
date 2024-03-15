// import React from 'react'

import { NavLink, useNavigate } from "react-router-dom";

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
    <div className="w-full h-[12%] px-6 mb-5">
      <div className="content w-full bg-zinc-100 flex items-center justify-between px-3 overflow-y-hidden rounded-lg pb-1 border-primary border-b-4 shadow-md shadow-black">
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
            <NavLink
              to="/"
              className={(e) =>
                `text-xl font-medium hover:underline hover:underline-offset-4 hover:text-primary text-xl font-semibold hover:transition-all px-3 py-1 ${
                  e.isActive &&
                  "text-primary font-md border border-primary rounded-md"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to={`/user-profile/${user.id}`}
              className={(e) =>
                `text-xl font-medium hover:underline hover:underline-offset-4 hover:text-primary text-xl font-semibold hover:transition-all px-3 py-1 ${
                  e.isActive &&
                  "text-primary font-md border border-primary rounded-md"
                }`
              }
            >
              About
            </NavLink>
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
