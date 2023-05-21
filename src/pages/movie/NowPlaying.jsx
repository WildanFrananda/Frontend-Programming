/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react"
import axios from "axios"
import Movies from "../../components/Movies/Movies"
import Hero from "../../components/Hero/Hero"

function NowPlayingMovie() {
    const API_KEY = process.env.REACT_APP_API_KEY
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`

    const [movies, setMovies] = useState([])

    async function getNowPlayingMovies() {
        // Fetch fata from API
        const response = await axios(URL)
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