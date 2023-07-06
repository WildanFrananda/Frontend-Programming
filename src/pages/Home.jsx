import { useState, useEffect } from "react"
import axios from "axios"
import Hero from "../components/Hero"
import Global from "../components/Global"
import Region from "../components/Region"
import ENDPOINTS from "../utils/constants/endpoints"

function Home() {
    const [situation, setSituation] = useState([])

    async function getGlobalSituation() {
        const response = await axios(ENDPOINTS.GLOBAL)
        setSituation(response.data.global)
    }

    useEffect(() => {
        getGlobalSituation()
    }, [])

    return (
        <>
            <Hero />
            <Global title="Global" subtitle="Global" situation={situation}/>
            <Region title="Region" subtitle="Global" situation={situation}/>
        </>
    )
}

export default Home
