// import React from 'react'
// This is importing React icon...
import { IoIosCloseCircle } from "react-icons/io";
// import { useState } from "react";
// import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { UsersContext } from "../Utils/Context";

// This is importing useDispatch and useSelector hooks for using redux and centralized store in our app..
import { useDispatch, useSelector } from "react-redux";
// This is importing refreshUsers action for using its reducer...
import { refreshUsers } from "../Actions";

// This is Home component code...
const Home = () => {
  // This is importing dispatch from useDispatch hook for calling the action and its reducer functions...
  const dispatch = useDispatch();

  // This is importing loggedInUser from localStorage for getting the loggedInUser data...
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  // const { users } = useContext(UsersContext);

  // This is getting allUsers state data from redux centralized store...
  const { allUsers } = useSelector((state) => state.users);

  // This is handling the handleDeletion click event by deleting the user from the localStorage based on the id passed to it by filtering out that specific user and overWriting the localStorage with remained users......
  const handleDeletionClick = (id) => {
    // console.log(index);
    const allUsers = JSON.parse(localStorage.getItem("allUsers"));
    localStorage.setItem(
      "allUsers",
      JSON.stringify(allUsers.filter((val) => val.id !== id))
    );

    // This is dispatching the refreshUsers() function for updating the redux centralized state or store from localStorage...
    dispatch(refreshUsers());
    // window.location.reload();
  };
  // console.log(users);

  //  This is returning JSX code which will be rendered on the screen for Home Component...
  return (
    <div className="w-full h-[100%] py-5 bg-secondarylite">
      <div className="home-container w-full h-full  flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-primary mb-3">
          Employees-List:{" "}
        </h1>
        <ul className="w-1/3 h-1/2 bg-zinc-100 p-3 overflow-x-hidden overflow-y-auto border shadow rounded-lg border-primary">
          {/* This is rendering all the user except loggedIn user... */}
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
                  {/* This is rendering close react icon button on only employee list and if its the loggedIn user must be Admin, otherwise not */}
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
