import { getTopRatedSeries } from "../../services/series"
import {   useState} from "react"

export default function useTopRatedSeries () {
        const [series , setSeries] = useState([])
        const [loading , setLoading] = useState(false)
        const [error , setError] = useState("")
    
        const getSeries =async() => {
            try{
                setLoading(true)
                const response = await getTopRatedSeries()
                setSeries(response.results)
            }catch(err) {
                setError(err.message)
            }finally {
                setLoading(false)
            }
         
        }
        return {topRatedSeries :series ,  getTopRatedSeries : getSeries , error , loading}
    }
