import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import LANGUAGES from "../utils/languages";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/GptSlice";

const GptSearchBar = () => {
  const lang = useSelector((state) => state.config.lang);
  const searchText = useRef("");
  const dispatch = useDispatch();

  const getMovies = async (name) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        name +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const debouncedApiCall = debounce(async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me names of five movies, comma seperated like the example result given ahead. Example result: Gadar, Sholey, Don, Yeh jawani hai diwani, Golmaal.";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // console.log(chatCompletion.choices[0]?.message?.content);
    const gptRes = chatCompletion.choices[0]?.message?.content.split(", ");
    // console.log(gptRes);

    const data = gptRes.map((name) => getMovies(name));
    const movies = await Promise.all(data);
    console.log(movies);
    dispatch(addGptMovies({ gptMovies: movies, movieNames: gptRes }));
  }, 500);

  const handleGptSearchClick = () => {
    debouncedApiCall();
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-center h-14 items-center bg-gray-500 gap-2 rounded-lg w-full p-4 m-4"
      >
        <input
          ref={searchText}
          className="outline-none w-full bg-gray-500 h-full"
          placeholder={LANGUAGES[lang].placeHolder}
          type="text"
        />
        <button
          onClick={handleGptSearchClick}
          type="submit"
          className="cursor-pointer hover:text-gray-700 transition-all"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
