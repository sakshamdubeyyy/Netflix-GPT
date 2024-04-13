import React, { useState } from 'react'
import Logo from "../assets/Netflix_Logo_PMS.png"
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'

const Header = ({setIsLoggedIn, isLoggedIn}) => {
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
      <img className="w-44" src={Logo} alt="logo" />
    </div>
  ) : (
    <div className="absolute h-18 px-8 py-2 z-10 bg-gradient-to-b from-gray-700 w-full flex justify-between items-center">
      <img className="w-28" src={Logo} alt="logo" />
      <div className='flex gap-2 items-center'>
      <img className="w-8 h-8 mix-blend-" alt='usericon' src='https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229'/>
      <button onClick={handleSignOut} className='p-2 m-2 rounded-lg bg-red-500 text-xs hover:bg-red-600 transition-all'>Sign Out</button>
      </div>
    </div>
  )
}

export default Header
