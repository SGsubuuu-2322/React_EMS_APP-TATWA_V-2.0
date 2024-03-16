// import React from 'react'
// This line is for importing Routing component for rendering it in App component...
import Routing from "./Utils/Routing";

// This is the App functional component which is responsible for rendering Routing component with some stylings applies using Tailwind...
const App = () => {
  return (
    <div className="w-full h-screen bg-secondarylite flex flex-col">
      <Routing />
    </div>
  );
};

// This is exporting App functional component so that we can use it elsewhere.
export default App;
