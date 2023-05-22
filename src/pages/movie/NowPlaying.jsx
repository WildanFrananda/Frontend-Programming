/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import axios from "axios"
import Movies from "../../components/Movies/Movies"
import Hero from "../../components/Hero/Hero"
import {updateMovies} from "../../feature/moviesSlice"
import ENDPOINTS from "../../utils/constants/endpoints"

function NowPlayingMovie() {
    const dispatch = useDispatch()

    async function getNowPlayingMovies() {
        // Fetch fata from API
        const response = await axios(ENDPOINTS.NOW)
        dispatch(updateMovies(response.data.results))
    }

    useEffect(function() {
        getNowPlayingMovies()
    }, [])

    return (
        <>
            <Hero />
            <Movies title="Now Playing" />
        </>
    )
}

export default NowPlayingMovie