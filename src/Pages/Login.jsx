// import React from 'react'

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const allUsers = localStorage.getItem("allUsers");
  const users = JSON.parse(allUsers);
  const loggedInUser = localStorage.getItem("loggedInUser");
  // console.log(users);
  const onSubmit = (data) => {
    if (users !== null) {
      const user = users.find((user) => user.email === data.email);
      if (user !== undefined) {
        if (user.password1 === data.password) {
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

        <button className="px-3 py-2 border rounded-lg bg-primary w-full mt-6 text-white font-semibold hover:scale-105">
          Submit Now
        </button>
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
