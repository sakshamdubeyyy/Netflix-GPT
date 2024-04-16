import React from "react";
import GptSearchBar from "./GptSearchBar";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleGptSearch } from "../utils/GptSlice";
import { LANGUAGE_OPTIONS } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import GptResults from "./GptResults";

const GptSearch = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-6/12 bg-opacity-90 rounded-lg bg-gray-400 mt-10 absolute z-30 h-screen flex flex-col items-center">
      <div>
        <div className="absolute text-4xl cursor-pointer hover:text-gray-700 transition-all left-4 top-7">
          <IoCaretBackCircleOutline
            onClick={() => dispatch(toggleGptSearch())}
          />
        </div>
        <GptSearchBar />
        <div>
          <select
            className="bg-gray-700 text-white outline-none absolute right-4 p-2 top-6 rounded-lg"
            onChange={handleLanguageChange}
          >
            {LANGUAGE_OPTIONS.map((lang) => (
              <option key={lang.idetifier} value={lang.idetifier}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full h-3/4">
        <GptResults />
      </div>
    </div>
  );
};

export default GptSearch;
