import { useState } from "react"
import Hero from "../../components/Hero"
import ProvinceTable from "../../components/ProvinceTable"
import FormCovid from "../../components/FormCovid"
import data from "../../utils/constants/provinces"

function Provinces() {
    const [provinces, setProvinces] = useState(data.provinces)
    return (
        <>
            <Hero />
            <ProvinceTable data={provinces} />
            <FormCovid provinces={provinces} setProvinces={setProvinces} />
        </>
    )
}

export default Provinces