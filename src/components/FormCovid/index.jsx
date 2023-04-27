// Import Styles and alert
import styles from "./FormCovid.module.css"
import Alert from "../Alert"
import image from "../assets/FormCovid.svg"
import {useState} from "react"

function FormCovid(props) {
    // Destructing props: state provinces
    const {data, setdata} = props

    // Create kota, status and jumlah state
    const [kota, setKota] = useState("")
    const [status, setStatus] = useState("")
    const [jumlah, setJumlah] = useState("")

    // Create Validation 
    const [isKotaError, setIsKotaError] = useState(false)
    const [isStatusError, setIsStatusError] = useState(false)
    const [isJumlahError, setIsJumlahError] = useState(false)

    // Function for changes the input
    function handleKota(e) {
        setKota(e.target.value)
    }

    function handleStatus(e) {
        setStatus(e.target.value)
    }

    function handleJumlah(e) {
        setJumlah(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        // set error if data invalid
        if(kota === "") {
            setIsKotaError(true)
        }
        else if(status === "") {
            setIsStatusError(true)
        }
        else if(jumlah === "") {
            setIsJumlahError(true)
        }
        else {
            const province = {
                kota: data.kota,
                status: {
                    positif: data.positif,
                    sembuh: data.sembuh,
                    dirawat: data.dirawat,
                    meninggal: data.meninggal
                },
                jumlah: data.jumlah
            }

            setdata([...data, province])

            setIsKotaError(false)
            setIsStatusError(false)
            setIsJumlahError(false)
        }
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
                            Kota
                            </label>
                            <select 
                                id="kota"
                                className={styles.form__input}
                                name="kota"
                                value={kota}
                                onChange={handleKota}
                            >
                                {data.provinces.map((province) => (
                                    <option value={province.kota}>{province.kota}</option>
                                ))}
                            </select>
                            {isKotaError && <Alert>Kota Wajib Diisi</Alert>}
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
                            onChange={handleStatus}
                            >
                            <option value="">-- Pilih Status --</option>
                            <option value={status.positif}>Positif</option>
                            <option value={status.sembuh}>Sembuh</option>
                            <option value={status.dirawat}>Dirawat</option>
                            <option value={status.meninggal}>Meninggal</option>
                            </select>
                            {isStatusError && <Alert>Status Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="jumlah" className={styles.form__label}>
                            Jumlah
                            </label>
                            <input
                            id="jumlah"
                            className={styles.form__input}
                            type="number"
                            name="jumlah"
                            value={jumlah}
                            onChange={handleJumlah}
                            />
                            {isJumlahError && <Alert>Jumlah Wajib Diisi</Alert>}
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