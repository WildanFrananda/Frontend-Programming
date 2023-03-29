// Import components
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Movies from "../components/Movies/Movies"
import AddMovieForm from "../components/AddMovieForm/AddMovieForm"
import Footer from "../components/Footer/Footer"

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Movies />
            <AddMovieForm />
            <Footer/>
        </div>
    )
}

export default Home