// import React from 'react'

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ Component }) => {
  const Navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("loggedInUser");
    if (!login) {
      Navigate("/login");
    }
  });
  return (
    <>
      <Component />
    </>
  );
};

export default Protected;
