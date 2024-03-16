// import React from 'react'
// This is importing createContext and useState from react for creating context to be used in our App...
import { createContext, useState } from "react";

// This is exporting UsersContext for usage in other parts of our app...
export const UsersContext = createContext();

// This is creating the Context component...
const Context = ({ children }) => {
  // Crating the state for users using useState hook with an localStorage or empty array as the initial value.
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("allUsers")) || []
  );

  // This function will be called when we add a new user to our users array for refreshing the users
  const RefreshUsers = () => {
    setUsers(JSON.parse(localStorage.getItem("allUsers")) || []);
  };
  // This is returning the child component wrapping it with UsersContext and  providing the value of current state variables and its actions
  return (
    <UsersContext.Provider value={{ users, RefreshUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default Context;
