import { useState, useEffect } from "react"
import axios from "axios"
import Hero from "../../components/Hero"
import Global from "../../components/Global"
import ProvinceTable from "../../components/ProvinceTable"

function Indonesia() {
    const [situation, setSituation] = useState([])
    const [table, setTable] = useState([])

    
    async function getLocalSituation() {
        const response = await axios("https://covid-fe-2023.vercel.app/api/indonesia.json")
        setSituation(response.data.indonesia)
        setTable(response.data.regions)
    }

    useEffect(() => {
        getLocalSituation()
    }, [])

    const transformedData = table.map((province) => ({
        kota: province.name,
        kasus: province.numbers.confirmed,
        sembuh: province.numbers.recovered,
        dirawat: province.numbers.treatment,
        meninggal: province.numbers.death
    }))

    return (
        <>
            <Hero />
            <Global title="Indonesia" subtitle="Indonesia" situation={situation}/>
            <ProvinceTable title ="Situation by" data={transformedData}/>
        </>
    )
}

export default Indonesia