// Import Route dan Routes dari react-router
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import CreateMovie from "./pages/movie/Create"
import PopularMovie from "./pages/movie/Popular"
import NowPlayingMovie from "./pages/movie/NowPlaying"
import TopRatedMovie from "./pages/movie/TopRated"
import Layout from "./Layout"

function App() {
	return (
		<div>
			<Home />
			<Layout>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/movie/create" element={<CreateMovie />}></Route>
					<Route path="/movie/popular" element={<PopularMovie />}></Route>
					<Route path="/movie/now" element={<NowPlayingMovie />}></Route>
					<Route path="/movie/top" element={<TopRatedMovie />}></Route>
				</Routes>
			</Layout>
		</div>
	)
}

export default App
