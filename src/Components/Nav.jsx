// import React from 'react'

const Nav = () => {
  return (
    <div className="w-full h-[18%] px-6 py-2">
      <div className="content bg-secondarylite w-full h-full bg-zinc-100 flex items-center justify-between px-3 overflow-y-hidden">
        <div className="logo-container">
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
            <li className="text-xl font-medium hover:underline hover:underline-offset-4 hover:text-primary text-xl font-semibold hover:transition-all">
              Home
            </li>
            <li className="text-xl font-medium hover:underline hover:underline-offset-4 hover:text-primary text-xl font-semibold hover:transition-all">
              About
            </li>
            <li className="text-xl font-medium hover:underline hover:underline-offset-4 hover:text-primary text-xl font-semibold hover:transition-all">
              Register
            </li>
            <li className="text-xl font-medium hover:underline hover:underline-offset-4 hover:text-primary text-xl font-semibold hover:transition-all">
              Login
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
