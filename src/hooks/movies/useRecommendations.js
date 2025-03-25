import { getRecommendations } from "../../services/movies"
import { useState } from "react"

export default function useRecommendations(){
    const [movies , setMovies] = useState([])
        const [loading , setLoading] = useState(false)
        const [error , setError] = useState("")
    
        const getMovies =async(id) => {
            try{
                setLoading(true)
                const response = await getRecommendations(id)
                setMovies(response.results)
            }catch(err) {
                setError(err.message)
            }finally {
                setLoading(false)
            }
         
        }
        return {recommendations:movies ,getRecommendationMovies : getMovies , error , loading}
}