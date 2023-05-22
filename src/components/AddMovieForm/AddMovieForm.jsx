import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {nanoid} from "nanoid"
import styles from "./AddMovieForm.module.css"
import Alert from "../Alert/Alert"
import Button from "../ui/Button"
import {addMovie} from "../../feature/moviesSlice"

// Create a AddMovieForm function component
function AddMovieForm() {
    // Create dispatch
    const dispatch = useDispatch()

    // Create navigation
    const navigation = useNavigate()

    const [formData, setFormData] = useState({
        title: "",
        date: "",
        poster: "",
        type: ""
    })

    const {title, date, poster, type} = formData
    
    function handleChange(e) {
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const [errors, setErrors] = useState({
        isTitleError: false,
        isDateError: false,
        isPosterError: false,
    })

    function handleSubmit(e) {
        e.preventDefault()

        validate() && submitMovie()
    }

    function validate() {
        if(title === "") {
            setErrors({...errors, isTitleError: true})
            return false
        }
        else if(date === "") {
            setErrors({...errors, isDateError:true, isTitleError: false})
            return false
        }
        else if(poster === "") {
            setErrors({...errors, isPosterError:true, isDateError: false})
            return false
        }
        else {
            setErrors({isTitleError: false, isDateError: false, isPosterError: false})
            return true
        }
    }

    function submitMovie() {
        const movie = {
            id: nanoid(),
            title: title,
            year: date,
            type: type,
            poster: poster
        }

        dispatch(addMovie(movie))

        navigation("/")
    }

    return (
        <div className={styles.container}>
            <section className={styles.form}>
                    <div className={styles.form__left}>
                        <img className={styles.form__image} src="https://picsum.photos/536/354" alt="" />
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
                                    onChange={handleChange}
                                />
                                {errors && <Alert>Title Wajib Diisi</Alert>}
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
                                    onChange={handleChange}
                                />
                                {errors && <Alert>Date Wajib Diisi</Alert>}
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
                                    onChange={handleChange}
                                />
                                {errors && <Alert>Poster Wajib Diisi</Alert>}
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
                                    onChange={handleChange}
                                >
                                    <option value="">-- Pilih Type --</option>
                                    <option value="Action">Action</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Horror">Horror</option>
                                    <option value="Comedy">Comedy</option>
                                </select>
                            </div>
                            <div>
                                <Button variant="secondary" size="lg" full>Add Movie</Button>
                            </div>
                        </form>
                    </div>
            </section>
        </div>
    )
}

export default AddMovieForm