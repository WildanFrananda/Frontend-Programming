/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import axios from "axios"
import Movies from "../../components/Movies/Movies"
import Hero from "../../components/Hero/Hero"
import {updateMovies} from "../../feature/moviesSlice"
import ENDPOINTS from "../../utils/constants/endpoints"

function TopRatedMovie() {
    const dispatch = useDispatch()

    async function getTopRatedMovies() {
        // Fetch fata from API
        const response = await axios(ENDPOINTS.TOP)
        dispatch(updateMovies(response.data.results))
    }

    useEffect(function() {
        getTopRatedMovies()
    }, [])

    return (
        <>
            <Hero />
            <Movies title="Top Rated" />
        </>
    )
}

export default TopRatedMovie