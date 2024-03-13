// import React from 'react'

import { createContext, useState } from "react";

export const UsersContext = createContext();

const Context = ({ children }) => {
  const data = localStorage.getItem("allUsers");
  let allUsers = [];
  data !== null ? (allUsers = JSON.parse(data)) : (allUsers = []);

  const [users, setUsers] = useState(allUsers);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default Context;
