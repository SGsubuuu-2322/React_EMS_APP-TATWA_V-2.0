// import React from 'react'

import Nav from "./Components/Nav";
import Routing from "./Utils/Routing";
// import Register from "./Pages/Register";
// import Login from "./Pages/Login";

const App = () => {
  return (
    <div className="w-full h-screen">
      <Nav />
      <Routing />
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
};

export default App;
