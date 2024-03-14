// import React from 'react'
import { Link, useLocation } from "react-router-dom";

const PublicNav = () => {
  let location = useLocation();
  // console.log(location);
  return (
    <div className="w-full h-[12%] px-6 mb-6">
      <div className="content w-full bg-zinc-200 flex items-center justify-between px-3 overflow-y-hidden rounded-lg pb-1 border-primary border-b-4 shadow-md shadow-black ">
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

        {location.pathname === "/register" ? (
          <div className="button-holder h-20 w-40 bg-secondarylite border rounded-md flex justify-around items-center  border-2 overflow-hidden">
            <div className="admin-container h-20 w-10 flex flex-col justify-center gap-1">
              <div className="image h-10 w-10 overflow-hidden rounded-md">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bzRx2cygbkKX_sFD_E7l6QgVPQG0CuPoAy5hB0zFLQ&s"
                  alt="admin-image"
                  className="object-cover "
                />
              </div>
              <input type="radio" name="admin" id="" />
            </div>
            <div className="admin-container h-20 w-10 flex flex-col justify-center gap-1">
              <div className="image h-10 w-10 overflow-hidden rounded-md">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNH7XVix6MP8CRjz3z4QXri_2PwobuRQ9IDExrR4BCjg&s"
                  alt="admin-image"
                  className="object-cover "
                />
              </div>
              <input type="radio" name="admin" id="" />
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="navigation">
          <ul className="flex gap-10">
            <Link
              to="/login"
              className="text-xl font-medium hover:underline hover:underline-offset-4 hover:text-primary text-xl font-semibold hover:transition-all"
            >
              Login
            </Link>

            <Link
              to={"/register"}
              className="text-xl font-medium hover:underline hover:underline-offset-4 hover:text-primary text-xl font-semibold hover:transition-all"
            >
              Register
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PublicNav;
