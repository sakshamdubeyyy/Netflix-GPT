import React from 'react'
import { FaPlay, FaInfo } from "react-icons/fa";


const VideoTitle = ({title, overview}) => {
  return (
    <div className=" absolute w-1/2 aspect-video pt-48 px-12">
      <h1 className="font-bold text-6xl text-white">{title}</h1>
      <p className='py-6 text-sm w-1/2 text-gray-400'>{overview}</p>
      <div className='flex'>
        <button className='p-2 m-2 px-4 text-lg hover:bg-gray-200 transition-all rounded-lg font-bold bg-white flex gap-2 items-center'><FaPlay/>Play</button>
        <button className='p-2 m-2 px-4 text-lg hover:bg-opacity-40 text-white transition-all rounded-lg bg-gray-600 bg-opacity-60 flex gap-2 items-center'><FaInfo/>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
