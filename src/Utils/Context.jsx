// import React from 'react'

import { createContext, useState } from "react";

export const UsersContext = createContext();

const Context = ({ children }) => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("allUsers")) || []
  );

  const RefreshUsers = () => {
    setUsers(JSON.parse(localStorage.getItem("allUsers")) || []);
  };
  return (
    <UsersContext.Provider value={{ users, RefreshUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default Context;
