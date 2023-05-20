import StyledHero from "./Hero.styled"
import Button from "../ui/Button"
import {useEffect, useState} from "react"

function Hero() {
    // Create movie state
    const [movie, setMovie] = useState("")

    async function fetchMovie() {
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
        // Fetching data from omdb API
        const response = await fetch(url)
        const data = await response.json()

        // Update state movie
        setMovie(data)
    }

    useEffect(function() {
        fetchMovie()
    }, [])

    console.log(movie)

    return (
        <StyledHero>
            <section>
                <div className="hero__left">
                    <h2 variant="primary">{movie.Title}</h2>
                    <h3 variant="secondary">{movie.Genre}</h3>
                    <p>{movie.Plot}</p>
                    <Button variant="primary" size="md">Watch Now</Button>
                </div>
                <div>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            </section>
        </StyledHero>
    )
}

export default Hero