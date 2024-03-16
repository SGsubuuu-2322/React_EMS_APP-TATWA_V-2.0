// import React from 'react'

// This is importing useForm, Link and useNavigate hooks for using some of the react features in our component...
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

// This is Login Component for rendering and functioning of Login page of form...
const Login = () => {
  // This is extracting the navigate, register, handleSubmit, and reset functions from their corresponding hooks for using it in our compoenent...
  const Navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  // This is fetching all the users and loggedIn user from the localStorage...
  const users = JSON.parse(localStorage.getItem("allUsers"));
  const loggedInUser = localStorage.getItem("loggedInUser");
  // console.log(users);
  // This is onSubmit form handling functions with passsed argument data of form...
  const onSubmit = (data) => {
    //  Check if there are any registered users in the app
    if (users !== null) {
      //  Loop through each user to find a match with entered email
      const user = users.find((user) => user.email === data.email);

      // If user is found, then passwords are to be matched before logging in...
      if (user !== undefined) {
        if (user.password1 === data.password) {
          // There must be single loggedin user in localStorage if its not then first remove or loggedout that user and set this user as loggedIn user and Vice-Versa...
          if (loggedInUser === null) {
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            Navigate("/");
          } else {
            localStorage.removeItem("loggedInUser");
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            Navigate("/");
          }
        } else {
          alert("Your Username/Password is incorrect");
        }
      } else {
        alert("Your Username/Password is incorrect...");
      }
    } else {
      alert("You're UNAUTHORIZED , Register yourself first...");
      Navigate("/register");
    }
    reset();
  };

  // Here we'hv used react-hook-forms proprties for handling the loggedIn form...
  return (
    <div className="register-container w-full flex flex-col items-center justify-center gap-10">
      <h1 className="text-3xl font-bold text-primary border shadow mb-4 p-3 rounded-md">
        Login Form
      </h1>
      <form
        className="register-card w-1/4 bg-secondarylite border shadow p-5 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="input-container flex flex-col w-full">
          <label htmlFor="email" className="text-xl font-semibold text-primary">
            Email:{" "}
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            required
            className="border w-full mx-auto mb-2"
          />
        </div>

        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-semibold text-primary">
            Password:{" "}
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            required
            className="border w-full mx-auto mb-2"
          />
        </div>
        {/* This is submit login form button... */}
        <button className="px-3 py-2 border rounded-lg bg-primary w-full mt-6 text-white font-semibold hover:scale-105">
          Submit Now
        </button>
        {/* This is a link to register page if  user does not have an account.*/}
        <Link
          to="/register"
          className="text-primary underline underline-offset-1"
        >
          Not have an account ? Create One...
        </Link>
      </form>
    </div>
  );
};

export default Login;
