import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useMoviesByGenre from "../hooks/movies/useMoviesByGenre";
import "../styles/Movies.css";
import movieGenres from "../data/movieGenres";
import Carousel from "../components/Carrousel";
import { GenreFilter } from "../components/GenresFilter";

export function MoviesByGenre() {
    const { id } = useParams();
    const { getMoviesByGenre } = useMoviesByGenre();

    const [moviesPage1, setMoviesPage1] = useState([]);
    const [moviesPage2, setMoviesPage2] = useState([]);
    const [moviesPage3, setMoviesPage3] = useState([]);

    useEffect(() => {
        if (!id) return;
    
        const fetchMovies = async () => {
            const page1 = await getMoviesByGenre(1, id);
            const page2 = await getMoviesByGenre(2, id);
            const page3 = await getMoviesByGenre(3, id);
    
            setMoviesPage1(page1);
            setMoviesPage2(page2);
            setMoviesPage3(page3);
        };
    
        fetchMovies();
    }, [id]);

    return (
        <div className="movies-container">
            <div className="genres-component">
                <GenreFilter genres_list={movieGenres}  media_type={"movie"}/>
            </div>
            <Carousel items={moviesPage1} title="Top Rated" media_type="movie" />
            <Carousel items={moviesPage2} title="Most popular" media_type="movie" />
            <Carousel items={moviesPage3} title="Classics" media_type="movie" />
        </div>
    );
}
