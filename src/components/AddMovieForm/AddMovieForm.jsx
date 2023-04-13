import {nanoid} from "nanoid"
import {useState} from "react"
import Alert from "../Alert/Alert"
import styles from "./AddMovieForm.module.css"

// Create a AddMovieForm function component
function AddMovieForm(props) {

    // Desctructing props: state movies
    const {movies, setMovies} = props

    // Create title and date state
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [poster, setPoster] = useState("")
    const [type, setType] = useState("")

    const [isTitleError, setIsTitleError] = useState(false)
    const [isDateError, setIsDateError] = useState(false)
    const [isPosterError, setIsPosterError] = useState(false)

    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handleDate(e) {
        setDate(e.target.value)
    }

    function handlePoster(e) {
        setPoster(e.target.value)
    }

    function handletype(e) {
        setType(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        if(title === "") {
            setIsTitleError(true)
        }
        else if(date === "") {
            setIsDateError(true)
        }
        else if(poster === "") {
            setIsPosterError(true)
        }
        else {
            const movie = {
                id: nanoid(),
                title: title,
                year: date,
                type: type,
                poster: poster
            }

            setMovies([...movies, movie])

            setIsTitleError(false)
            setIsDateError(false)
            setIsPosterError(false)
        }
    }

    return (
        <div className={styles.container}>
            <section className={styles.form}>
                    <div className={styles.form__left}>
                        <img className={styles.image__form} src="https://picsum.photos/536/354" alt="" />
                    </div>
                    <div className={styles.form__right}>
                        <h2 className={styles.form__title}>Add Movie</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.form__group}>
                                <label className={styles.form__label} htmlFor="title">
                                    Title
                                </label>
                                <input 
                                    className={styles.form__input} 
                                    type="text" 
                                    id="title" 
                                    name="title"
                                    value={title}
                                    onChange={handleTitle}
                                />
                                {isTitleError && <Alert>Title Wajib Diisi</Alert>}
                            </div>
                            <div className={styles.form__group}>
                                <label className={styles.form__label} htmlFor="year">
                                    Year
                                </label>
                                <input 
                                    className={styles.form__input} 
                                    type="text" 
                                    id="date" 
                                    name="date"
                                    value={date}
                                    onChange={handleDate}
                                />
                                {isDateError && <Alert>Date Wajib Diisi</Alert>}
                            </div>
                            <div className={styles.form__group}>
                                <label className={styles.form__label} htmlFor="poster">
                                    Poster
                                </label>
                                <input
                                    className={styles.form__input}
                                    type="text"
                                    id="poster"
                                    name="poster"
                                    value={poster}
                                    onChange={handlePoster}
                                />
                                {isPosterError && <Alert>Poster Wajib Diisi</Alert>}
                            </div>
                            <div className={styles.form__group}>
                                <label className={styles.form__label} htmlFor="type">
                                    Type
                                </label>
                                <select
                                    className={styles.form__input}
                                    id="type"
                                    name="type"
                                    value={type}
                                    onChange={handletype}
                                >
                                    <option value="">-- Pilih Type --</option>
                                    <option value="Action">Action</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Horror">Horror</option>
                                    <option value="Comedy">Comedy</option>
                                </select>
                            </div>
                            <div>
                                <button className={styles.form__button} type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
            </section>
        </div>
    )
}

export default AddMovieForm