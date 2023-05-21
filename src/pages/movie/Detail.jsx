/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import DetailMovie from "../../components/DetailMovie"
import Movies from "../../components/Movies/Movies"
import ENDPOINTS from "../../utils/constants/endpoints"

function Detail() {
    const {id} = useParams()
    const [movies, setMovies] = useState([])

    async function getRecommendationMovies() {
        const response = await axios(ENDPOINTS.RECOMMENDATIONS(id))
        
        setMovies(response.data.results)
    }

    useEffect(function() {
        getRecommendationMovies()
    }, [id])

    return (
        <>
            <DetailMovie />
            <Movies title="Recommendation Movies" movies={movies}/>
        </>
    )
}

export default Detail