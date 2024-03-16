// import React from 'react'

// This is importing the Nav bar component for rendering the navigation bar...
import Nav from "./Nav";

// This is Layout functional component which receives props and renders out a layout with navbar, children (what gets put in between layout component...
const Layout = ({ children }) => {
  // This is taking children component by destructuring...

  // This is rendering by returning different components in a layout form...
  return (
    <div className="w-full h-screen bg-secondarylite flex flex-col">
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
