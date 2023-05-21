/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react"
import axios from "axios"
import Movies from "../../components/Movies/Movies"
import Hero from "../../components/Hero/Hero"
import ENDPOINTS from "../../utils/constants/endpoints"

function TopRatedMovie() {
    const [movies, setMovies] = useState([])

    async function getTopRatedMovies() {
        // Fetch fata from API
        const response = await axios(ENDPOINTS.TOP)
        setMovies(response.data.results)
    }

    useEffect(function() {
        getTopRatedMovies()
    }, [])

    return (
        <>
            <Hero />
            <Movies title="Top Rated" movies={movies} />
        </>
    )
}

export default TopRatedMovie