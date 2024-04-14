import React from 'react'
import { FaSearch } from "react-icons/fa";
import LANGUAGES from '../utils/languages';
import { useSelector } from 'react-redux';


const GptSearchBar = () => {
    const lang = useSelector(state => state.config.lang)
  return (
    <div className="flex justify-center h-14 items-center bg-gray-500 gap-2 rounded-lg w-6/12 p-4 m-4">
        <input
          className="outline-none w-full bg-gray-500 h-full"
          placeholder={LANGUAGES[lang].placeHolder}
          type="text"
        />
        <FaSearch className='cursor-pointer hover:text-gray-700 transition-all'/>
      </div>
  )
}

export default GptSearchBar
