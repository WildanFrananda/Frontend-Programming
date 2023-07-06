import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Indonesia from "./pages/cases/Indonesia"
import Provinces from "./pages/cases/Provinces"
import About from "./pages/cases/About"

function App() {
    return (
        <React.Fragment>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cases/indonesia" element={<Indonesia />} />
                    <Route path="/cases/provinces" element={<Provinces />} />
                    <Route path="/cases/about" element={<About />} />
                </Routes>
            </Layout>
        </React.Fragment>
    )
}

export default App