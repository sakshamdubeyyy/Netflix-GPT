import React, { useState } from 'react'
import Logo from "../assets/Netflix_Logo_PMS.png"
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import userStore from '../utils/userStore'
import { USER_ICON_URL } from '../utils/constants'

const Header = ({setIsLoggedIn, isLoggedIn}) => {
  const displayName = useSelector((state) => state.user.displayName);
  // console.log(displayName);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
      // setIsLoggedIn(false);
    }).catch((error) => {
      // An error happened.
      console.log(error)
      navigate("/error")
    });
  }
  return isLoggedIn ? (
    <div className="absolute px-8 py-2 z-10 bg-gradient-to-b from-black w-full">
      <Link to="/">
        <img className="w-44 cursor-pointer" src={Logo} alt="logo" />
      </Link>    
    </div>
  ) : (
    <div className="absolute h-18 px-8 py-2 z-10 bg-gradient-to-b from-gray-700 w-full flex justify-between items-center">
      <Link to="/browse">
        <img className="w-28 cursor-pointer" src={Logo} alt="logo" />
      </Link>
      <div className='flex gap-2 items-center'>
        <div className='flex gap-2 justify-center items-center cursor-pointer'>
          <img className="w-8 h-8 mix-blend-" alt='usericon' src={USER_ICON_URL}/>
          <p className='text-gray-400'>{displayName}</p>
        </div>
      <button onClick={handleSignOut} className='p-2 m-2 rounded-lg bg-red-500 text-xs hover:bg-red-600 transition-all'>Sign Out</button>
      </div>
    </div>
  )
}

export default Header
