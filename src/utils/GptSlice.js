import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: 'gpt',
    initialState:{
        showGptSearch: false,
        gptMovies: null,
        movieNames: null,
    },
    reducers:{
        toggleGptSearch: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovies: (state, action) => {
            const {movieNames, gptMovies} = action.payload;
            state.gptMovies = gptMovies;
            state.movieNames = movieNames;
        }
    }
})

export const {toggleGptSearch, addGptMovies} = GptSlice.actions;
export default GptSlice.reducer;