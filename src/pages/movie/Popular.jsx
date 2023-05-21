/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react"
import axios from "axios"
import Movies from "../../components/Movies/Movies"
import Hero from "../../components/Hero/Hero"
import ENDPOINTS from "../../utils/constants/endpoints"

function PopularMovie() {
    const [movies, setMovies] = useState([])

    async function getPopularMovies() {
        // Fetch fata from API
        const response = await axios(ENDPOINTS.POPULAR)
        setMovies(response.data.results)
    }

    useEffect(function() {
        getPopularMovies()
    }, [])

    return (
        <>
            <Hero />
            <Movies title="Popular Movies" movies={movies} />
        </>
    )
}

export default PopularMovie