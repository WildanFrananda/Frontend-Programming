import styles from "./Movie.module.css"

// Components receiving props
function Movie(props) {
    // Desctructing props
    const {movie} = props

    return (
        <div className={styles.Movie}>
            <img className={styles.movie__images} src={movie.poster} alt={movie.title} />
            <h3 className={styles.movie__title}>{movie.title}</h3>
            <p className={styles.movie__date}>{movie.year}</p>
        </div>
    )
}

export default Movie