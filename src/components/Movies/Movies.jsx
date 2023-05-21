import {nanoid} from "nanoid"
import Movie from "../Movie/Movie"
import styles from "./Movies.module.css"

function Movies(props) {
    // Create movies state
    const {title, movies, setMovies} = props

    function handleClick() {
        const movie = {
            id: nanoid(),
            titile: "Jigsaw Spiral",
            year: 2021,
            type: "Movie",
            poster: "https://picsum.photos/300/400"
        }

        /**
         * Update state movies: setMovies
         * Using spread technique for copy and merge array
         */
        setMovies([...movies, movie])
    }

    return (
        <div>
            <div className={styles.container}>
                <section className={styles.movies}>
                    <h2 className={styles.movies__title}>{title}</h2>
                    <div className={styles.movie__container}>
                        {movies
                            .map((movie) => {
                                return <Movie key={movie.id} movie={movie} />
                            })}
                    </div>
                    <button onClick={handleClick}>Add Movie</button>
                </section>
            </div>
        </div>
    )
}

export default Movies