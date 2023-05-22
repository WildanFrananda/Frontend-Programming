// Import components
import Hero from "../components/Hero/Hero"
import Movies from "../components/Movies/Movies"

function Home({movies}) {
    return (
        <>
            <Hero />
            <Movies title="Latest Movies" movies={movies} />
        </>
    )
}

export default Home