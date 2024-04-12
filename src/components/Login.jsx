import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  }
  return (
    <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
        </div>
        <form className="absolute p-12 text-white bg-black w-4/12 my-36 mx-auto right-0 left-0 flex flex-col bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && <input type='text' placeholder='Full Name' className="p-2 m-2 w-full opacity-60 bg-blue-100 text-black outline-none rounded-lg"/>}
            <input type='text' placeholder='Email Address' className="p-2 m-2 w-full opacity-60 bg-blue-100 text-black outline-none rounded-lg"/>
            <input type='password' placeholder={`${isSignIn ? "Enter Password" : "New Password"}`} className="p-2 m-2 w-full opacity-60 bg-blue-100 text-black outline-none rounded-lg"/>
            <button type='submit' className="p-2 m-2 w-full bg-red-600 rounded-lg hover:bg-red-700 transition-all">{isSignIn ? "Sign In" : "Sign Up"}</button>
            <h1 className="text-gray-400 py-4">{isSignIn ? "New to Netflix?" : "Already Registered?"} <span onClick={toggleSignIn} className="text-white cursor-pointer hover:underline">{isSignIn ? "Sign Up Now" : "Sign In"}</span></h1>
        </form>
    </div>
    
  )
}

export default Login
