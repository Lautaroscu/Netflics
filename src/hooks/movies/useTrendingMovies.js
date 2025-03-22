import { useState } from "react";
import { getTrendingMovies } from "../../services/movies";

export default function useTrendingMovies() {
    const [movies , setMovies] = useState([])
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState("")

    const getMovies =async() => {
        try{
            setLoading(true)
            const response = await getTrendingMovies()
            setMovies(response.results)
        }catch(err) {
            setError(err.message)
        }finally {
            setLoading(false)
        }
     
    }
    return {movies , getMovies , error , loading}
}