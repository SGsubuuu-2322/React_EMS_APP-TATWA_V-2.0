// import React from "react";
// This is importing public navbar component for rendering purposes.
import PublicNav from "./PublicNav";

// This is importing outlet hook for rendering child components of the this parent component... 
import { Outlet } from "react-router-dom";


// This is public layout component which serves as a container for all public or unauthorized  routes or  pages in our app..
const PublicLayout = () => {
  // console.log("Public layout is running...");
  return (
    <div>
      <PublicNav />
      {/* This is where exactly child component coming as routes  will be rendered */}
      <Outlet />
    </div>
  );
};

export default PublicLayout;
