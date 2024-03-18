// import React from 'react'

// These are some important functional imports from react-router-dom to navigate our app to different routes...
import { NavLink, useNavigate } from "react-router-dom";

// This is a navbar functional component that will be used to navigate in protected routes of our app...
const Nav = () => {
  //  We are using the useNavigate hook provided by react router dom v6. It allows us to programmatically navigate between routes in our app
  const Navigate = useNavigate();

  // We're fetching loggedIn user from the localStorage to ensure loggedIn users identity...
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  // This is a function that will be used to handle the logout functionality of our app...
  const logout = () => {
    Navigate("/login");
    localStorage.removeItem("loggedInUser");
  };
  // const loggedInUser = localStorage.getItem("loggedInUser");

  // This is jsx for our navbar...
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
            {/* This is NavLink's styling, when it is active... */}
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
