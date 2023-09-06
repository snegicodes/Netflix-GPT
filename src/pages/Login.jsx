import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleBtnClick = (e) => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isLoginForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " : " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    }
  };

  const toggleFormType = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="bg-image bg-cover bg-center min-h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-1/4 bg-black bg-opacity-80 py-14 px-8 absolute my-36 right-0 left-0 mx-auto text-white rounded-md"
      >
        <h1 className="font-bold text-3xl py-2">
          {isLoginForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoginForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 text-sm my-4 w-full bg-gray-600  rounded-md focus:outline-none"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 text-sm my-4 w-full bg-gray-600  rounded-md focus:outline-none"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 text-sm my-4 w-full bg-gray-600 rounded-md focus:outline-none"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button
          onClick={handleBtnClick}
          className="p-3 my-6 bg-red-700 w-full rounded-md "
        >
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
