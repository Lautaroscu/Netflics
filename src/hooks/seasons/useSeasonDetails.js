import { useState } from "react";
import { getSeasonDetails } from "../../services/seasons";

export default function useSeasonDetails() {
    const [details, setDetails] = useState({})
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const getDetails = async (seasonNumber , serieId) => {
        try {
            setLoading(true)
            const response = await getSeasonDetails(seasonNumber , serieId);
            setDetails(response)
        }catch(e) {
            setError(e.message)
        }finally  {
            setLoading(false)
        }
       
    }
    return {details , getDetails , error , loading}
}