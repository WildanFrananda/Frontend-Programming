import Hero from "../../components/Hero"
import ProvinceTable from "../../components/ProvinceTable"
import FormCovid from "../../components/FormCovid"
import { useSelector } from "react-redux"

function Provinces() {
    const data = useSelector((state) => state.cases.provinces)

    return (
        <>
            <Hero />
            <ProvinceTable title="Situation by" data={data} />
            <FormCovid data={data} />
        </>
    )
}

export default Provinces