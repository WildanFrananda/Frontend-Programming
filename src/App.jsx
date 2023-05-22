// Import module
import React, {useState} from "react"
import {Route, Routes} from "react-router-dom"
import {ThemeProvider} from "styled-components"
import Home from "./pages/Home"
import CreateMovie from "./pages/movie/Create"
import PopularMovie from "./pages/movie/Popular"
import NowPlayingMovie from "./pages/movie/NowPlaying"
import TopRatedMovie from "./pages/movie/TopRated"
import Detail from "./pages/movie/Detail"
import Layout from "./Layout"
import theme from "./utils/constants/theme"
import GlobalStyle from "./components/GlobalStyle"
import data from "./utils/constants/data"

function App() {
    const [movies, setMovies] = useState(data)

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Layout>
					<Routes>
						<Route path="/" element={<Home movies={movies} />} />
						<Route path="/movie/create" element={<CreateMovie movies={movies} setMovies={setMovies} />} />
						<Route path="/movie/popular" element={<PopularMovie />} />
						<Route path="/movie/now" element={<NowPlayingMovie />} />
						<Route path="/movie/top" element={<TopRatedMovie />} />
						<Route path="/movie/:id" element={<Detail />} />
					</Routes>
				</Layout>
			</ThemeProvider>
		</React.Fragment>
	)
}

export default App
