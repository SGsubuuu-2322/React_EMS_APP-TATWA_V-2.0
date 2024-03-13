// import React from 'react'

import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "../Routes/PublicRoutes";
import { AuthRoutes } from "../Routes/AuthRoutes";
import Protected from "./Protected";

const Routing = () => {
  return (
    <div>
      <Routes>
        {PublicRoutes.map((val, i) => {
          return <Route key={i} path={val.path} element={<val.element />} />;
        })}
        {AuthRoutes.map((val, i) => {
          return (
            <Route
              key={i}
              path={val.path}
              element={<Protected Component={val.element} />}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default Routing;
