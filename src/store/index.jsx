import {configureStore} from "@reduxjs/toolkit"
import moviesReducers from "../feature/moviesSlice"

/**
 * Create store
 * Store any slice reducer
 */

const store = configureStore({
    reducer: {
        movies: moviesReducers
    }
})

export default store
