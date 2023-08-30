import React, { useState } from "react";
import Header from "../components/Header";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleFormType = () => {
    setIsLoginForm(!isLoginForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <form className="w-[30%] bg-black bg-opacity-80 p-16 absolute my-36 right-0 left-0 mx-auto text-white rounded-md">
        <h1 className="font-bold text-3xl py-4">
          {isLoginForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoginForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 text-sm my-4 w-full bg-gray-600  rounded-md focus:outline-none"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 text-sm my-4 w-full bg-gray-600  rounded-md focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 text-sm my-4 w-full bg-gray-600 rounded-md focus:outline-none"
        />
        <button className="p-3 my-6 bg-red-700 w-full rounded-md ">
          {isLoginForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 text-sm" onClick={toggleFormType}>
          {isLoginForm
            ? "New to Netflix? Sign Up Now!"
            : "Already a User? Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
