import { useState } from "react"
import Hero from "../../components/Hero/Hero"
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm"
import data from "../../utils/constants/data"

function CreateMovie() {
    const [movies, setMovies] = useState(data)

    return (
        <>
            <Hero />
            <AddMovieForm movies={movies} setMovies={setMovies} />
        </>
    )
}

export default CreateMovie