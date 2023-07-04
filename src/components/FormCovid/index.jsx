import StyledFormCovid from "./FormCovid.styled"
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

    const { kota, status, jumlah } = formData

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

        if(validate()) {
            updateProvince()
            setFormData({
                kota:"",
                status:"",
                jumlah:""
            })
        }
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
            <StyledFormCovid>
                <section>
                    <div className="form__left">
                        <img
                            src={image}
                            alt="placeholder"
                        />
                    </div>
                    <div className="form__right">
                        <h1>Form Covid</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form__group">
                                <label htmlFor="kota">
                                    Provinces
                                </label>
                                <select
                                    id="kota"
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
                            <div className="form__group">
                                <label htmlFor="status">
                                    Status
                                </label>
                                <select
                                    id="status"
                                    name="status"
                                    value={status}
                                    onChange={handleChange}
                                >
                                    <option value="">-- Choose Status --</option>
                                    <option value={["kasus"]}>Cases</option>
                                    <option value={["sembuh"]}>Recovered</option>
                                    <option value={["dirawat"]}>Hospitalized</option>
                                    <option value={["meninggal"]}>Death</option>
                                </select>
                                {errors.isStatusError && <Alert>Status Required</Alert>}
                            </div>
                            <div className="form__group">
                                <label htmlFor="jumlah">
                                    Amount
                                </label>
                                <input
                                    id="jumlah"
                                    type="number"
                                    name="jumlah"
                                    value={jumlah}
                                    onChange={handleChange}
                                />
                                {errors.isJumlahError && <Alert>Required Amount</Alert>}
                            </div>
                            <div>
                                <button type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </StyledFormCovid>
        </>
    )
}

export default FormCovid