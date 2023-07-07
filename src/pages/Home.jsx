import { useState, useEffect } from "react"
import axios from "axios"
import Hero from "../components/Hero"
import Global from "../components/Global"
import Region from "../components/Region"
import ENDPOINTS from "../utils/constants/endpoints"

function Home() {
    const [situation, setSituation] = useState([])
    const [region, setRegion] = useState([])

    async function getGlobalSituation() {
        const response = await axios(ENDPOINTS.GLOBAL)
        setSituation(response.data.global)
        setRegion(response.data.regions)
    }

    useEffect(() => {
        getGlobalSituation()
    }, [])

    return (
        <>
            <Hero />
            <Global title="Global" subtitle="Global" situation={situation}/>
            <Region title="Region" subtitle="Global" region={region}/>
        </>
    )
}

export default Home
