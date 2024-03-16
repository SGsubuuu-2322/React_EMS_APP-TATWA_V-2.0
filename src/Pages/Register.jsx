// import React from 'react'

// import { useContext } from "react";
// These are the imports for useForm, Link, useNavigate, useDispatch, useSelector hooks for using different react features in our register form component...
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import { UsersContext } from "../Utils/Context";
import { useDispatch, useSelector } from "react-redux";

// This is importing of refreshUser action for using it with redux...
import { refreshUsers } from "../Actions/index";


// This is register component for rendering and functioning of register form..
const Register = () => {

  // This is extracting the disPatch method from Redux useDispatch() hook to be used in actions.
  const dispatch = useDispatch();
  // This is extracting the userType from Redux centralized store to be used in our component.
  const { userType } = useSelector((state) => state.users);
  // const { RefreshUsers } = useContext(UsersContext);
  // This is extracting register, handleSubmit, and reset methods from useForm() hook to handle the registration form. 
  const { register, handleSubmit, reset } = useForm();

  // This is extracting the Navigate method from useNavigate() hook to be used in our component.
  const Navigate = useNavigate();

// This is onSubmit function to handle the registration form submission passed with form data as arguments...
  const onSubmit = (data) => {
    // This extracting the secretKey and email by destructuring it from data parameter...
    const { secretKey, email } = data;
    // This is fetching allUsers from the localStorage and storing it in a constant for further use...
    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || null;
    // check for existing

    // Checking if there is users in localstorage already and if the registered user mail is already registered then alert the user and return it to registration form...
    if (
      allUsers &&
      allUsers.length > 0 &&
      allUsers.filter((val) => val.email === email).length > 0
    ) {
      alert("User Already Exists");
      reset();
      return;
    }

    // Checking if userType is Admin  and not having the valid secret key then alert the user and return it to registration form
    if (userType === "Admin" && +secretKey !== 2322) {
      alert("Invalid Secret key.");
      reset();
      return;
    }

    // If passwords doesn't match then show alert msg and return it to registration form... 
    if (data.password1 !== data.password2) {
      alert("Confirm Password is not matched.");
      reset();
      return;
    }

    // And if everything is good, then runs the localStorage addition function passed it all users UserType extracted from redux centralized store and an unique id...
    storeToLS(allUsers, {
      ...data,
      userType: userType,
      id: Math.floor(Math.random() * 100),
    });
    reset();
  };

  // This is storeLS function that will add passed data to localStorage under 'allUsers' item...
  const storeToLS = (allUsers, data) => {
    let users = [];
    if (allUsers && allUsers.length > 0) {
      users = [...allUsers, data];
    } else {
      users = [data];
    }
    // console.log(data);
    // This is adding allUsers data to the local storage with JSON.stringify method so we can save our data as a string...
    localStorage.setItem("allUsers", JSON.stringify(users));
    // This is dispatching the refreshUsers action to refresh the users data in Redux store...
    dispatch(refreshUsers());
    // After the refreshUsers action has been dispatched we are navigating the registered user to its Home Page...
    Navigate("/login");
  };

  // This is Registration component JSX with its functioning logic
  return (
    <div className="register-container w-full h-full flex items-center justify-around">
      <h1 className="text-3xl font-bold text-primary border shadow p-3 rounded-md">
        {userType} Registration Form
      </h1>
      <form
        className="register-card w-1/4 bg-secondarylite border shadow  px-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-semibold text-primary">
            Name:{" "}
          </label>
          <input
            {...register("name")}
            type="text"
            name="name"
            placeholder="Enter your name..."
            required
            className="border w-full mx-auto mb-2"
          />
        </div>

        <div className="input-container flex flex-col">
          <label htmlFor="email" className="text-xl font-semibold text-primary">
            Email:{" "}
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            placeholder="Enter your email..."
            required
            className="border w-full mx-auto mb-2"
          />
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-semibold text-primary">
            Designation:{" "}
          </label>
          <input
            {...register("designation")}
            type="text"
            name="designation"
            placeholder="Enter your job role..."
            required
            className="border w-full mx-auto mb-2"
          />
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-semibold text-primary">
            Password:{" "}
          </label>
          <input
            {...register("password1")}
            type="password"
            name="password1"
            placeholder="Enter your password..."
            required
            className="border w-full mx-auto mb-2"
          />
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-semibold text-primary">
            Re-Enter Password:{" "}
          </label>
          <input
            {...register("password2")}
            type="password"
            name="password2"
            placeholder="Re-Enter to confirm it..."
            required
            className="border w-full mx-auto mb-2"
          />
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-semibold text-primary">
            User:{" "}
          </label>
          <input
            {...register("userType")}
            type="text"
            name="userType"
            // value={userType}
            // This will autmatically change the placeholder value according to the userType in redux store....
            placeholder={userType}
            readOnly
            className="border w-full mx-auto mb-2"
          />
        </div>
        {/* This secret key input is for Admin user only */}
        {userType === "Admin" ? (
          <div className="input-container flex flex-col">
            <label
              htmlFor="name"
              className="text-xl font-semibold text-primary"
            >
              Admin Code:{" "}
            </label>
            <input
              {...register("secretKey")}
              type="number"
              name="secretKey"
              placeholder="Enter your secret-key..."
              required
              className="border w-full mx-auto mb-2"
            />
          </div>
        ) : (
          <></>
        )}

        <button className="px-3 py-2 border rounded-lg bg-primary w-full mt-6 text-white font-semibold hover:scale-105">
          Submit Now
        </button>

        <Link to="/login" className="text-primary underline underline-offset-1">
          Already have an account, Login then...
        </Link>
      </form>
    </div>
  );
};

export default Register;
