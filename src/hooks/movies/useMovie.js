import { useState } from "react";
import { getMovieById } from "../../services/movies";

export default function useMovie() {
    const [movie, setMovie] = useState({})
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const getMovie = async (id) => {
        try {
            setLoading(true)
            const response = await getMovieById(id);
            setMovie(response)
        }catch(e) {
            setError(e.message)
        }finally  {
            setLoading(false)
        }
       
    }
    return {movie , getMovie , error , loading}
}