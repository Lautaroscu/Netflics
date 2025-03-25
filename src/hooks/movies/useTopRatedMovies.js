import { useState } from "react";
import { getTopRatedMovies } from "../../services/movies";

export default function useTopRatedMovies() {
    const [movies , setMovies] = useState([])
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState("")

    const getMovies =async() => {
        try{
            setLoading(true)
            const response = await getTopRatedMovies ()
            setMovies(response.results)
        }catch(err) {
            setError(err.message)
        }finally {
            setLoading(false)
        }
     
    }
    return {topRatedMovies :movies ,  getTopRatedMovies : getMovies , error , loading}
}