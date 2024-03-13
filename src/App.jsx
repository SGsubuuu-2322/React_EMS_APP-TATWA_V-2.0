// import React from 'react'

import Nav from "./Components/Nav";
import Routing from "./Utils/Routing";

const App = () => {
  return (
    <div className="w-full h-screen bg-secondarylite flex flex-col">
      <Nav />
      <Routing />
    </div>
  );
};

export default App;
