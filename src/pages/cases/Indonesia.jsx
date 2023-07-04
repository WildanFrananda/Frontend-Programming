import { useState, useEffect } from "react"
import axios from "axios"
import Hero from "../../components/Hero"
import Global from "../../components/Global"
import ProvinceTable from "../../components/ProvinceTable"

function Indonesia() {
    const [situation, setSituation] = useState([])

    async function getLocalSituation() {
        const response = await axios("https://covid-fe-2023.vercel.app/api/indonesia.json")
        setSituation(response.data.indonesia)
    }

    useEffect(() => {
        getLocalSituation()
    }, [])

    return (
        <>
            <Hero />
            <Global title="Indonesia" subtitle="Indonesia" situation={situation}/>
            <ProvinceTable data={situation}/>
        </>
    )
}

export default Indonesia