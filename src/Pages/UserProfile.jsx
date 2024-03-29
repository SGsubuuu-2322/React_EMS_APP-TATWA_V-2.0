// import React from 'react'

// import { useContext } from "react";
// This is importing useSelector, useNavigate, and useParams react hooks for using react features in our react component....
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { UsersContext } from "../Utils/Context";

// This is userProfile component which will display the profile of a particular user.
const UserProfile = () => {
  // const { users } = useContext(UsersContext);
  // This is extracting allUsers list from redux centralized store for further use...
  const { allUsers } = useSelector((state) => state.users);

  // This is exrtacting Navigation from useNavigate() for navigating between diffrenent pages or routes...
  const Navigate = useNavigate();

  // This is extracting id from useParams() for extracting the id of the user from the URL...
  const id = useParams();

  // This is handling navigation...
  const handleClick = () => {
    Navigate(-1);
  };

  const userId = id.id;

  // If there is no userId in the url params then, redirect the user to the login page...
  if (!userId) {
    Navigate("/login");
  }


  // Finding the user with respect to the given userId in params...
  const userData = allUsers.find((user) => user.id === +userId);
  // console.log(userData);


  // This is jsx for rendering the userProfile component... 
  return (
    <div className="w-full h-full bg-secondarylite flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold text-primary mb-3">
        User_Profile: {userData.userType}
      </h1>
      <div className="user-card w-1/2 bg-secondary border shadow p-6 rounded-md">
        <div className="w-full h-1/4">
          <div className="image w-2/12 h-full bg-secondary mx-auto">
            <img
              src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
              alt="user image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="details w-full h-3/4 bg-secondary mt-4 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-primary">
            Name:{" "}
            <span className="text-xl font-medium text-secondarylite">{`${userData.name}`}</span>
          </h2>
          <h3 className="text-2xl font-semibold text-primary">
            Email:{" "}
            <span className="text-xl font-medium text-secondarylite">
              {userData.email}
            </span>{" "}
          </h3>
          <h3 className="text-2xl font-semibold text-primary">
            Designation:{" "}
            <span className="text-xl font-medium text-secondarylite">
              {userData.designation}
            </span>
          </h3>

          <p className="text-xl font-normal text-primary mt-4 tracking">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            explicabo, vero aliquid eveniet accusamus dolore labore deserunt
            animi minima voluptas? Debitis culpa numquam animi ullam nulla
            incidunt aspernatur doloremque aliquam nihil saepe cum adipisci
            eveniet hic inventore, voluptates esse reiciendis minus amet vel,
            excepturi ut aut corporis? Delectus, voluptas! Libero.
          </p>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="px-2 py-2 border shadow bg-secondary text-primary rounded-lg mt-1"
      >
        Go Back
      </button>
    </div>
  );
};

export default UserProfile;
