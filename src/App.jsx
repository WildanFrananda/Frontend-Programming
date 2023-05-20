// Import module
import React from "react"
import {Route, Routes} from "react-router-dom"
import {ThemeProvider} from "styled-components"
import Home from "./pages/Home"
import CreateMovie from "./pages/movie/Create"
import PopularMovie from "./pages/movie/Popular"
import NowPlayingMovie from "./pages/movie/NowPlaying"
import TopRatedMovie from "./pages/movie/TopRated"
import Layout from "./Layout"
import theme from "./utils/constants/theme"
import GlobalStyle from "./components/GlobalStyle"

function App() {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Layout>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/movie/create" element={<CreateMovie />}></Route>
						<Route path="/movie/popular" element={<PopularMovie />}></Route>
						<Route path="/movie/now" element={<NowPlayingMovie />}></Route>
						<Route path="/movie/top" element={<TopRatedMovie />}></Route>
					</Routes>
				</Layout>
			</ThemeProvider>
		</React.Fragment>
	)
}

export default App
