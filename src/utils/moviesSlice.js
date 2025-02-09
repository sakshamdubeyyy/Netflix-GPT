import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        showMovieDetails: false,
        detailedMovieID: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        toggleShowMovieDetails: (state, action) => {
            state.showMovieDetails = !state.showMovieDetails;
            state.detailedMovieID = action.payload
        },
    }
});

export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addNewMovies, toggleShowMovieDetails} = moviesSlice.actions;
export default moviesSlice.reducer;
