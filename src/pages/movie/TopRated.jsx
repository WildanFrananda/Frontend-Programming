/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react"
import axios from "axios"
import Movies from "../../components/Movies/Movies"
import Hero from "../../components/Hero/Hero"

function TopRatedMovie() {
    const API_KEY = process.env.REACT_APP_API_KEY
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`

    const [movies, setMovies] = useState([])

    async function getTopRatedMovies() {
        // Fetch fata from API
        const response = await axios(URL)
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