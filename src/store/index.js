import { configureStore } from "@reduxjs/toolkit"
import { casesReducer } from "../features/casesSlice"

const store = configureStore({
    reducer: {
        cases: casesReducer
    }
})

export default store