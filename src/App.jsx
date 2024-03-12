// import React from 'react'

import Nav from "./Components/Nav";
import Register from "./Pages/Register";
// import Login from "./Pages/Login";

const App = () => {
  return (
    <div className="w-full h-screen">
      <Nav />
      {/* <Login /> */}
      <Register />
    </div>
  );
};

export default App;
