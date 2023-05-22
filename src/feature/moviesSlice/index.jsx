// Import createSlice
import {createSlice} from "@reduxjs/toolkit"
import data from "../../utils/constants/data"

/**
 * Create slice: for generate action and reducer.
 * Receive param object: name, initialState, reducers
 */
const movieSlice = createSlice({
    name: "Movies slice",
    initialState: {
        movies: data
    },
    reducers: {
        addMovie() {},
        deleteMovie() {}
    }
})

// Generate action and reducer
const moviesReducer = movieSlice.reducer
const {addMovie, deleteMovie} = movieSlice.actions

// Export action and reducers
export default moviesReducer
export {addMovie, deleteMovie}