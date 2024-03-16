// import React from 'react'
// These are some necessary imports so that routing can happen in our react app...
import { Route, Routes } from "react-router-dom";

// These are both routes js files where all the public or unauthorized and protected or authorized routes are defined...
import { PublicRoutes } from "../Routes/PublicRoutes";
import { AuthRoutes } from "../Routes/AuthRoutes";

// These are the Protected and Public Layout components that are used to render the public and protected routes...
import Protected from "./Protected";
import PublicLayout from "../Components/PublicLayout";

// This is the Routing functional component that is responsible for handling all of our routes.
const Routing = () => {
  return (
    <div>
      <Routes>
        {/* This is runnning map on all public routes  and passing them to the Public Layout Component for normal rendering... */}
        <Route element={<PublicLayout />}>
          {PublicRoutes.map((val, i) => {
            return <Route key={i} path={val.path} element={<val.element />} />;
          })}
        </Route>

        {/* This is runnning map on all auth routes  and passing them to the Protected Layout Component for authenticated rendering... */}
        <Route element={<Protected />}>
          {AuthRoutes.map((val, i) => {
            return <Route key={i} path={val.path} element={<val.element />} />;
          })}
        </Route>
      </Routes>
    </div>
  );
};

export default Routing;
