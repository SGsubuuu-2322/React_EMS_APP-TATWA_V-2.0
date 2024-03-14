// import React from "react";
import PublicNav from "./PublicNav";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  // console.log("Public layout is running...");
  return (
    <div>
      <PublicNav />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
