import Hero from "../../components/Hero/Hero"
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm"

function CreateMovie({movies, setMovies}) {
    return (
        <>
            <Hero />
            <AddMovieForm movies={movies} setMovies={setMovies} />
        </>
    )
}

export default CreateMovie