import { useState } from "react";
import {  getUpcomingMovies } from "../../services/movies";

export default function useUpcomingMovies() {
    const [movies , setMovies] = useState([])
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState("")

    const getMovies =async() => {
        try{
            setLoading(true)
            const response = await getUpcomingMovies()
            setMovies(response.results)
        }catch(err) {
            setError(err.message)
        }finally {
            setLoading(false)
        }
     
    }
    return {upcomingMovies:movies ,getUpcomingMovies : getMovies , error , loading}
}
