import { useState } from "react";
import { getSerieById } from "../../services/series";

export default function useMovie() {
    const [serie, setSerie] = useState({})
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const getSerie = async (id) => {
        try {
            setLoading(true)
            const response = await getSerieById(id);
            setSerie(response)
        }catch(e) {
            setError(e.message)
        }finally  {
            setLoading(false)
        }
       
    }
    return {serie , getSerie , error , loading}
}