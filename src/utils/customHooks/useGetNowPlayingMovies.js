import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addNowPlayingMovies } from "../moviesSlice";
import { useEffect } from "react";


const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();
  
  const getNowPlayingMovies = async () => {
    try{const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json = await data.json();
    //   console.log(json);
      dispatch(addNowPlayingMovies(json));
    }catch(error){
        console.error("Error fetching now playing movies:", error);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useGetNowPlayingMovies;
