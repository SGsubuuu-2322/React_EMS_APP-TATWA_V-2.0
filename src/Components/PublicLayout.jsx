// import React from "react";
import PublicNav from "./PublicNav";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <PublicNav />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
