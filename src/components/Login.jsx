import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BACKGROUND_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            isLoggedIn: true,
          })
        );
        navigate("/browse");
        setIsLoggedIn(!isLoggedIn);
        // console.log("logged in", isLoggedIn);
      } else {
        // User is signed out
        dispatch(removeUser());
        setIsLoggedIn(!isLoggedIn);
        navigate("/");
        // console.log("logged out",isLoggedIn);
      }
    });

    return () => {
      unsubscribe();
    }
  }, []);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = validateForm(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              // navigate("/");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          setIsSignIn(true);
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              // navigate("/");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="absolute">
        <img
          src={BACKGROUND_URL}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 text-white bg-black w-4/12 my-36 mx-auto right-0 left-0 flex flex-col text-center bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full opacity-60 bg-blue-100 text-black outline-none rounded-lg"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-2 m-2 w-full opacity-60 bg-blue-100 text-black outline-none rounded-lg"
        />
        <input
          type="password"
          ref={password}
          placeholder={`${isSignIn ? "Enter Password" : "New Password"}`}
          className="p-2 m-2 w-full opacity-60 bg-blue-100 text-black outline-none rounded-lg"
        />
        <p className="text-red-600 text-sm">{errorMessage}</p>
        <button
          type="submit"
          onClick={handleButtonClick}
          className="p-2 m-2 w-full bg-red-600 rounded-lg hover:bg-red-700 transition-all"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <h1 className="text-gray-400 py-4">
          {isSignIn ? "New to Netflix?" : "Already Registered?"}{" "}
          <span
            onClick={toggleSignIn}
            className="text-white cursor-pointer hover:underline"
          >
            {isSignIn ? "Sign Up Now" : "Sign In"}
          </span>
        </h1>
      </form>
    </div>
  );
};

export default Login;
