/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from "react"
import {useParams} from "react-router-dom"
import {useDispatch} from "react-redux"
import axios from "axios"
import DetailMovie from "../../components/DetailMovie"
import Movies from "../../components/Movies/Movies"
import {updateMovies} from "../../feature/moviesSlice"
import ENDPOINTS from "../../utils/constants/endpoints"

function Detail() {
    const {id} = useParams()
    const dispatch = useDispatch()

    async function getRecommendationMovies() {
        const response = await axios(ENDPOINTS.RECOMMENDATIONS(id))
        dispatch(updateMovies(response.data.results))
    }

    useEffect(function() {
        getRecommendationMovies()
    }, [id])

    return (
        <>
            <DetailMovie />
            <Movies title="Recommendation Movies" />
        </>
    )
}

export default Detail