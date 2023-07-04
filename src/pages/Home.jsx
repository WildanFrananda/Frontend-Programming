import { useState, useEffect } from "react"
import axios from "axios"
import Hero from "../components/Hero"
import Global from "../components/Global"

function Home() {
    const [situation, setSituation] = useState([])

    async function getGlobalSituation() {
        const response = await axios("https://covid-fe-2023.vercel.app/api/global.json")

        setSituation(response.data.global)
    }

    useEffect(() => {
        getGlobalSituation()
    }, [])

    return (
        <>
            <Hero />
            <Global title="Global" subtitle="Global" situation={situation}/>
        </>
    )
}

export default Home
