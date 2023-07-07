import { useState, useEffect } from "react"
import axios from "axios"
import Hero from "../../components/Hero"
import Global from "../../components/Global"
import ProvinceTable from "../../components/ProvinceTable"
import ENDPOINTS from "../../utils/constants/endpoints"
import { useDispatch, useSelector } from "react-redux"
import { fetchProvince } from "../../features/casesSlice"

function Indonesia() {
    const dispatch = useDispatch()
    const [situation, setSituation] = useState([])
    // const [table, setTable] = useState([])
    const table = useSelector((state) => state.cases.regions)
    console.log(table)

    async function getLocalSituation() {
        const response = await axios(ENDPOINTS.INDONESIA)
        setSituation(response.data.indonesia)
        dispatch(fetchProvince(response.data.regions))
    }

    useEffect(() => {
        getLocalSituation()
    }, [])

    const transformedData = table.map((province) => ({
        kota: province.name,
        kasus: province.numbers?.confirmed || 0,
        sembuh: province.numbers?.recovered || 0,
        dirawat: province.numbers?.treatment || 0,
        meninggal: province.numbers?.death || 0,
    }))

    return (
        <>
            <Hero />
            <Global title="Indonesia" subtitle="Indonesia" situation={situation} />
            <ProvinceTable title ="Situation by" data={transformedData} />
        </>
    )
}

export default Indonesia