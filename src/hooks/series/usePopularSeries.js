import { getPopularSeries } from "../../services/series"
import {   useState} from "react"

export default function usePopularSeries () {
        const [series , setSeries] = useState([])
        const [loading , setLoading] = useState(false)
        const [error , setError] = useState("")
    
        const getSeries =async() => {
            try{
                setLoading(true)
                const response = await getPopularSeries()
                setSeries(response.results)
            }catch(err) {
                setError(err.message)
            }finally {
                setLoading(false)
            }
         
        }
        return {popularSeries :series ,  getPopularSeries : getSeries , error , loading}
    }
