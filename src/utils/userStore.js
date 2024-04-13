import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

const userStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
    }
})

export default userStore;