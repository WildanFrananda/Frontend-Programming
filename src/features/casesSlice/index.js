import { createSlice } from "@reduxjs/toolkit"
import data from "../../utils/constants/provinces"

const casesSlice = createSlice({
    name: "Cases Slice",
    initialState: {
        provinces: data.provinces,
        regions: []
    },
    reducers: {
        updateProvince: (state, action) => {
            const { kota, status, jumlah } = action.payload

            const index = state.provinces.findIndex((item) => item.kota === kota)
            const foundProvince = state.provinces.find((item) => item.kota === kota)

            state.provinces[index] = {
                ...foundProvince,
                [status]: parseInt(foundProvince[status]) + parseInt(jumlah)
            }
        },
        fetchProvince: (state, action) => {
            state.regions = action.payload
        }
    }
})

export const { updateProvince, fetchProvince } = casesSlice.actions
export const casesReducer = casesSlice.reducer