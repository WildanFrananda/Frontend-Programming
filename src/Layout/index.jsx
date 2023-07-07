import Navbar from "../components/Navbar"
import Container from "../components/Container"
import Footer from "../components/Footer"

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>
                <Container>
                    {children}
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default Layout