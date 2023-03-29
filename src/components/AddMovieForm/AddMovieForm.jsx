// Import styles css
import styles from "./AddMovieForm.module.css"

// Create a AddMovieForm function component
function AddMovieForm() {
    return (
        <div className={styles.container}>
            <section className={styles.form}>
                    <div className={styles.form__left}>
                        <img className={styles.image__form} src="https://picsum.photos/536/354" alt="" />
                    </div>
                    <div className={styles.form__right}>
                        <h2 className={styles.form__title}>Add Movie</h2>
                        <form>
                            <div className={styles.form__group}>
                                <label className={styles.form__label} htmlFor="title">
                                    Title
                                </label>
                                <input className={styles.form__input} type="text" id="title" />
                            </div>
                            <div className={styles.form__group}>
                                <label className={styles.form__label} htmlFor="year">
                                    Year
                                </label>
                                <input className={styles.form__input} type="text" id="year" />
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