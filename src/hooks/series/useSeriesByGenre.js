import { useState } from "react";
import { seriesByGenreId } from "../../services/series";

export default function useSeriesByGenre() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    

    const getSeries = async (pageNumber, genreId) => {
        try {
            setLoading(true);
            const response = await seriesByGenreId(pageNumber, genreId);
            return response.results || []; 
        } catch (err) {
            setError(err.message);
            return []; 
        } finally {
            setLoading(false);
        }
    };

    return { getSeriesByGenre: getSeries, error, loading };
}
