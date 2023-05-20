import StyledMovie from "./Movie.styled"

// Components receiving props
function Movie(props) {
    // Desctructing props
    const {movie} = props

    return (
        <StyledMovie>
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
        </StyledMovie>
    )
}

export default Movie