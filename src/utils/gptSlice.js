import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch: false,
        movie:null
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        searchMovies:(state,action)=>{
            state.movie = action.payload
        }
    }
})
export const {toggleGptSearchView, searchMovies} = gptSlice.actions;

export default gptSlice.reducer;