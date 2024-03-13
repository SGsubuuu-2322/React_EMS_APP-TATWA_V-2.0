// import React from 'react'

import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "../Routes/PublicRoutes";
import { AuthRoutes } from "../Routes/AuthRoutes";
import Protected from "./Protected";
import PublicLayout from "../Components/PublicLayout";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route element={<PublicLayout />}>
          {PublicRoutes.map((val, i) => {
            return <Route key={i} path={val.path} element={<val.element />} />;
          })}
        </Route>
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
