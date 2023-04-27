import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Global from "../components/Global"
import ProvinceTable from "../components/ProvinceTable"
import FormCovid from "../components/FormCovid"
import Footer from "../components/Footer"
import data from "../utils/constants/provinces"
import {useState} from "react"

function Main() {
    const [provinces, setProvinces] = useState(data)
    console.log(provinces)

    return (
        <main>
            <Hero />
            <Global />
            <ProvinceTable data={provinces}/>
            <FormCovid data={provinces} setData={setProvinces}/>
        </main>
    )
}

function Home() {
    return (
        <>
            <Navbar />
            <Main />
            <Footer />
        </>
    )
}

export default Home