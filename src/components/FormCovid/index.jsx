// Import Styles and alert
import styles from "./FormCovid.module.css"
import Alert from "../Alert"
import image from "../assets/FormCovid.svg"
import { useState } from "react"

function FormCovid(props) {
    // Destructing props: state provinces
    const { provinces, setProvinces } = props

    // Create kota, status and jumlah state
    const [formData, setFormData] = useState({
        kota: "",
        status: "",
        jumlah: ""
    })

    const {kota, status, jumlah} = formData

    function handleChange(e) {
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    // Create Validation 
    const [errors, setErrors] = useState({
        isKotaError: false,
        isStatusError: false,
        isJumlahError: false
    })

    function handleSubmit(e) {
        e.preventDefault()

        validate() && updateProvince()
    }

    function validate() {
        if(kota === "") {
            setErrors({...errors, isKotaError: true})
            return false
        } else if(status === "") {
            setErrors({...errors, isStatusError: true, isKotaError: false})
            return false
        } else if(jumlah === "") {
            setErrors({...errors, isJumlahError: true, isStatusError: false})
            return false
        } else {
            setErrors({isKotaError: false, isStatusError: false, isJumlahError: false})
            return true
        }
    }

    function updateProvince() {
        const index = provinces.findIndex((item) => item.kota === kota)
        const foundProvince = provinces.find((item) => item.kota === kota)

        provinces[index] = {
            ...foundProvince,
            [status]: parseInt(foundProvince[status]) + parseInt(jumlah)
        }
        setProvinces([...provinces])
    }

    return (
        <>
            <div className={styles.container}>
                <section className={styles.form}>
                    <div className={styles.form__left}>
                        <img
                            className={styles.form__image}
                            src={image}
                            alt="placeholder"
                        />
                    </div>
                    <div className={styles.form__right}>
                        <h1 className={styles.form__title}>Form Covid</h1>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.form__group}>
                                <label htmlFor="kota" className={styles.form__label}>
                                    Provinces
                                </label>
                                <select
                                    id="kota"
                                    className={styles.form__input}
                                    name="kota"
                                    value={kota}
                                    onChange={handleChange}
                                >
                                    <option value="">-- Choose Province --</option>
                                    {provinces.map((province, index) => (
                                        <option key={index} value={province.kota}>{province.kota}</option>
                                    ))}
                                </select>

                                {errors.isKotaError && <Alert>Province Required</Alert>}
                            </div>
                            <div className={styles.form__group}>
                                <label htmlFor="status" className={styles.form__label}>
                                    Status
                                </label>
                                <select
                                    id="status"
                                    className={styles.form__input}
                                    name="status"
                                    value={status}
                                    onChange={handleChange}
                                >
                                    <option value="">-- Choose Status --</option>
                                    <option value={["kasus"]}>Positif</option>
                                    <option value={["sembuh"]}>Sembuh</option>
                                    <option value={["dirawat"]}>Dirawat</option>
                                    <option value={["meninggal"]}>Meninggal</option>
                                </select>
                                {errors.isStatusError && <Alert>Status Required</Alert>}
                            </div>
                            <div className={styles.form__group}>
                                <label htmlFor="jumlah" className={styles.form__label}>
                                    Jumlah
                                </label>
                                <input
                                    id="jumlah"
                                    className={styles.form__input}
                                    type="text"
                                    name="jumlah"
                                    value={jumlah}
                                    onChange={handleChange}
                                />
                                {errors.isJumlahError && <Alert>Required Amount</Alert>}
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
        </>
    )
}

export default FormCovid