// import React from 'react'

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const allUsers = localStorage.getItem("allUsers");
  const users = JSON.parse(allUsers);
  const Navigate = useNavigate();

  const onSubmit = (data) => {
    const user = users.find((user) => user.email === data.email);
    if (user === undefined) {
      if (data.password1 === data.password2) {
        if (allUsers === null) {
          localStorage.setItem("allUsers", JSON.stringify([data]));
          Navigate("/login");
        } else {
          users.push(data);
          localStorage.setItem("allUsers", JSON.stringify(users));
          Navigate("/login");
        }
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("User already exists");
    }

    reset();
  };

  return (
    <div className="register-container w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-primary border shadow p-3 rounded-md">
        Registration Form
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
            required
            className="border w-full mx-auto mb-2"
          />
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-semibold text-primary">
            Username:{" "}
          </label>
          <input
            {...register("username")}
            type="text"
            name="username"
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
            required
            className="border w-full mx-auto mb-2"
          />
        </div>

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
