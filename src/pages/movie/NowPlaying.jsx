/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react"
import axios from "axios"
import Movies from "../../components/Movies/Movies"
import Hero from "../../components/Hero/Hero"
import ENDPOINTS from "../../utils/constants/endpoints"

function NowPlayingMovie() {
    const [movies, setMovies] = useState([])

    async function getNowPlayingMovies() {
        // Fetch fata from API
        const response = await axios(ENDPOINTS.NOW)
        setMovies(response.data.results)
    }

    useEffect(function() {
        getNowPlayingMovies()
    }, [])

    return (
        <>
            <Hero />
            <Movies title="Now Playing" movies={movies} />
        </>
    )
}

export default NowPlayingMovie