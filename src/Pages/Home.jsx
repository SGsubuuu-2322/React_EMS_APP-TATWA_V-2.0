// import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
// import { useState } from "react";
// import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { UsersContext } from "../Utils/Context";
import { useDispatch, useSelector } from "react-redux";
import { refreshUsers } from "../Actions";

const Home = () => {
  const dispatch = useDispatch();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  // const { users } = useContext(UsersContext);
  const { allUsers } = useSelector((state) => state.users);

  const handleDeletionClick = (id) => {
    // console.log(index);
    const allUsers = JSON.parse(localStorage.getItem("allUsers"));
    localStorage.setItem(
      "allUsers",
      JSON.stringify(allUsers.filter((val) => val.id !== id))
    );
    dispatch(refreshUsers());
    // window.location.reload();
  };
  // console.log(users);

  return (
    <div className="w-full h-[100%] py-5 bg-secondarylite">
      <div className="home-container w-full h-full  flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-primary mb-3">
          Employees-List:{" "}
        </h1>
        <ul className="w-1/3 h-1/2 bg-zinc-100 p-3 overflow-x-hidden overflow-y-auto border shadow rounded-lg border-primary">
          {allUsers
            .filter((val) => val.email !== loggedInUser.email)
            .map((user, index) => {
              return (
                <div
                  key={index}
                  className="list w-full h-4/12 p-2 bg-secondary mb-2 flex justify-between items-center text-primary text-xl font-medium hover:bg-zinc-300 hover:text-secondary"
                >
                  <div className="user-details">
                    <NavLink
                      className="flex flex-col"
                      to={`user-profile/${user.id}`}
                    >
                      <span>{user.name}</span>
                      <span className="font-normal font-style: italic">
                        {user.userType}
                      </span>
                    </NavLink>
                  </div>

                  {loggedInUser.userType === "Admin" &&
                    user.userType === "Employee" && (
                      <IoIosCloseCircle
                        className="cursor-pointer"
                        onClick={() => handleDeletionClick(user.id)}
                      />
                    )}
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
