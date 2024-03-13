// import React from 'react'

import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Layout from "../Components/Layout";

const Protected = () => {
  const Navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    let login = localStorage.getItem("loggedInUser");
    if (!login) {
      // console.log("not logged in");
      setAuth(false);
      Navigate("/login");
    } else {
      // console.log("logged in");
      setAuth(true);
    }
  }, []);
  return (
    auth && (
      <Layout>
        <Outlet />
      </Layout>
    )
  );
};

export default Protected;
