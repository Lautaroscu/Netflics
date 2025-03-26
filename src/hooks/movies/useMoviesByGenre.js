import { useState } from "react";
import { moviesByGenreId } from "../../services/movies";

export default function useMoviesByGenre() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    

    const getMovies = async (pageNumber, genreId) => {
        try {
            setLoading(true);
            const response = await moviesByGenreId(pageNumber, genreId);
            return response.results || []; // Retornar resultados en lugar de setear estado
        } catch (err) {
            setError(err.message);
            return []; // Devolver array vacío en caso de error
        } finally {
            setLoading(false);
        }
    };

    return { getMoviesByGenre: getMovies, error, loading };
}
