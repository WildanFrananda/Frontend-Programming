/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import Button from "../ui/Button"
import StyledDetailMovie from "./DetailMovie.styled"
import ENDPOINTS from "../../utils/constants/endpoints"

function DetailMovie() {
    const {id} = useParams()
    const [movie, setMovie] = useState("")
    const genres = movie && movie.genres
        .map((genre) => genre.name)
        .join(", ")
    const idTrailer = movie && movie.videos.results[0].key
    const trailer = movie && `https://www.youtube.com/watch?v=${idTrailer}`

    async function getDetailMovie() {
        const response = await axios(ENDPOINTS.DETAIL(id))
        setMovie(response.data)
    }

    useEffect(function() {
        getDetailMovie()
    }, [id])

    return (
        <StyledDetailMovie>
            <div className="poster">
            <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt="Poster"
            />
            </div>
            <div className="info">
                <h2>{movie.title}</h2>
                <h3>{genres}</h3>
                <p>{movie.overview}</p>
                <Button as="a" href={trailer} size="lg">Watch Trailer</Button>
            </div>
        </StyledDetailMovie>
    )
}

export default DetailMovie