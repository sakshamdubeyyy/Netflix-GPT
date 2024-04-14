import React from 'react'
import { MdNoEncryptionGmailerrorred } from "react-icons/md";


const ConnectVPNErrorPage = () => {
  return (
    <div className='flex justify-center items-center'>
      <MdNoEncryptionGmailerrorred/> Uh oh! Seems like we are not supported in your country, please connect VPN to continue...
    </div>
  )
}

export default ConnectVPNErrorPage
