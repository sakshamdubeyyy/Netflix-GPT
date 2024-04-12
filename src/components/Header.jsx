import React from 'react'
import Logo from "../assets/Netflix_Logo_PMS.png"

const Header = () => {
  return (
    <div className="absolute px-8 py-2 z-10 bg-gradient-to-b from-black w-full">
      <img className="w-44" src={Logo} alt="logo" />
    </div>
  )
}

export default Header
