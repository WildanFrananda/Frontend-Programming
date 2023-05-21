/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react"
import axios from "axios"
import StyledHero from "./Hero.styled"
import Button from "../ui/Button"

function Hero() {
    // Create movie state
    const [movie, setMovie] = useState("")

    const API_KEY = process.env.REACT_APP_API_KEY
    const genres = movie && movie.genres
        .map((genre) => genre.name)
        .join(", ")
    const idTrailer = movie && movie.videos.results[0].key

    async function getTrendingMovie() {
        const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
        const response = await axios(URL)
        return response.data.results[0]
    }

    async function getDetailMovie() {
        const trendingMovie = await getTrendingMovie()
        const id = trendingMovie.id
        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
        const response = await axios(URL)
        setMovie(response.data)
    }


    useEffect(function() {
        getDetailMovie()
    }, [])

    return (
        <StyledHero>
            <section>
                <div className="hero__left">
                    <h2 variant="primary">{movie.title}</h2>
                    <h3 variant="secondary">{genres}</h3>
                    <p>{movie.overview}</p>
                    <Button 
                        variant="primary" 
                        size="lg"
                        as="a"
                        href={`https://www.youtube.com/watch?v=${idTrailer}`}
                        target="_blank">
                            Watch Trailer
                    </Button>
                </div>
                <div>
                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        alt="placeholder"
                    />
                </div>
            </section>
        </StyledHero>
    )
}

export default Hero