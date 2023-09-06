import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../store/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubscribe on Header unmounting
    return () => unsubscribe;
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute w-screen flex justify-between items-center px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-48" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex items-center gap-3">
          <button
            className="bg-red-600 text-white py-2 px-4 rounded-md"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>
          <img
            className="w-10 h-10  shadow-lg "
            src={user.photoURL}
            alt="user"
          />
          <button className="text-white font-bold" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
