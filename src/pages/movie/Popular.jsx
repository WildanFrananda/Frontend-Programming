/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import axios from "axios"
import Movies from "../../components/Movies/Movies"
import Hero from "../../components/Hero/Hero"
import {updateMovies} from "../../feature/moviesSlice"
import ENDPOINTS from "../../utils/constants/endpoints"

function PopularMovie() {
    const dispatch = useDispatch()

    async function getPopularMovies() {
        // Fetch fata from API
        const response = await axios(ENDPOINTS.POPULAR)
        dispatch(updateMovies(response.data.results))
    }

    useEffect(function() {
        getPopularMovies()
    }, [])

    return (
        <>
            <Hero />
            <Movies title="Popular Movies" />
        </>
    )
}

export default PopularMovie