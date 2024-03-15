// import React from 'react'

// import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import { UsersContext } from "../Utils/Context";
import { useDispatch, useSelector } from "react-redux";
import { refreshUsers } from "../Actions/index";

const Register = () => {
  const dispatch = useDispatch();
  const { userType } = useSelector((state) => state.users);
  // const { RefreshUsers } = useContext(UsersContext);
  const { register, handleSubmit, reset } = useForm();
  const Navigate = useNavigate();

  const onSubmit = (data) => {
    const { secretKey, email } = data;
    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || null;
    // check for existing
    if (
      allUsers &&
      allUsers.length > 0 &&
      allUsers.filter((val) => val.email === email).length > 0
    ) {
      alert("User Already Exists");
      reset();
      return;
    }

    if (userType === "Admin" && +secretKey !== 2322) {
      alert("Invalid Secret key.");
      reset();
      return;
    }
    if (data.password1 !== data.password2) {
      alert("Confirm Password is not matched.");
      reset();
      return;
    }
    storeToLS(allUsers, {
      ...data,
      userType: userType,
      id: Math.floor(Math.random() * 100),
    });
    reset();
  };
  const storeToLS = (allUsers, data) => {
    let users = [];
    if (allUsers && allUsers.length > 0) {
      users = [...allUsers, data];
    } else {
      users = [data];
    }
    // console.log(data);
    localStorage.setItem("allUsers", JSON.stringify(users));
    dispatch(refreshUsers());
    Navigate("/login");
  };

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
            placeholder={userType}
            readOnly
            className="border w-full mx-auto mb-2"
          />
        </div>
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
