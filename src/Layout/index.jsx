import Container from "../components/Container"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

function Layout({childern}) {
    return (
        <>
            <Navbar />
                <main>
                    {/* <Container>
                        {childern}
                    </Container> */}
                    {childern}
                </main>
            <Footer />
        </>
    )
}

export default Layout