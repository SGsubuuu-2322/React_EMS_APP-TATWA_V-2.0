// import React from 'react'

import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-secondarylite flex flex-col">
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
