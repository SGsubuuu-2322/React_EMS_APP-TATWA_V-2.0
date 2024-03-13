// import React from 'react'

// import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../Utils/Context";

const Home = () => {
  const { users } = useContext(UsersContext);
  // console.log(users);

  return (
    <div className="w-full h-[100%] py-5 bg-red-200">
      <div className="home-container w-full h-full  flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-primary mb-3">
          Employees-List:{" "}
        </h1>
        <ul className="w-1/3 h-1/2 bg-zinc-100 p-3 overflow-x-hidden overflow-y-auto border shadow">
          {users.map((user, index) => {
            return (
              <Link
                to={`user-profile/${user.id}`}
                key={index}
                className="w-full h-4/12 p-2 bg-secondary mb-2 flex justify-between text-primary text-xl font-medium hover:bg-zinc-300"
              >
                {`${user.name}`}{" "}
                <span className="font-normal">{user.Designation}</span>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
