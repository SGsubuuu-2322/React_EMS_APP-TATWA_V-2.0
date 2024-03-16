// import React from 'react'
// These are some common hook imports that will be used for adding react's core features in this component...
import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

// This is the container or layout for rendering all authorized routes or pages...
import Layout from "../Components/Layout";

// This is protected functional component which checks if user is loggedIn or not...
const Protected = () => {
  // This is taking out navigate functionality from the useNavigate() hook for navigating between different pages and routes...
  const Navigate = useNavigate();

  // This is creating, setting  and assigning the value of a state, which will be used in this component...
  const [auth, setAuth] = useState(false);

  // This is a useEffect hook which will be used to fetch the loggedIn user details from the localStorage and setting the state data accordingly before moving the authorized routes and pages, when the component mounts...
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
    // And finally passing the empty array for single time rendering...
  }, []);

  //  If auth is true then it means user is logged, then pass the outlet or routed component to the Layout component...
  return (
    auth && (
      <Layout>
        <Outlet />
      </Layout>
    )
  );
};

export default Protected;
