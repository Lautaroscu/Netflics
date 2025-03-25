import { useParams } from "react-router";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import useMovie from "../hooks/movies/useMovie";
import { env } from "../getEnv";



import "../styles/Movie.css"
import useRecommendations from "../hooks/movies/useRecommendations";
import Carousel from "../components/Carrousel";
import Reactions from "../components/Reactions";

export function Movie() {
    const { id } = useParams();
    const { movie, getMovie, error, loading } = useMovie();
    const { recommendations, getRecommendationMovies } = useRecommendations()



    const handleReaction = (react) => {
        setReaction(react)
        setIsBouncing(true)
    }
    useEffect(() => {
        if (id) {
            getMovie(id);
            getRecommendationMovies(id)
        }
    }, [id]);

    if (loading) return <Skeleton height={500} width="100%" />;
    if (error) return <p>❌ Hubo un error al cargar la película.</p>;
    if (!movie) return <p>⚠️ No se encontró la película.</p>;

    const { title, runtime, poster_path, overview, genres, popularity, release_date, vote_average } = movie;

    return (
        <div className="movie-page">
            <div className="movie-content">
                <img className="image" src={`${env.IMAGE_URL}/${poster_path}`} alt={title} />
                <div className="movie-info">
                    <h1>{title}</h1>
                    <p className="movie-duration">{runtime ? `${Math.floor(runtime / 60)}h ${runtime % 60}min` : "N/A"} | {release_date} | {genres?.map(g => g.name).join(", ")}</p>
                    <p className="movie-description">{overview}</p>
                    <p><strong>Director:</strong> Tom McGrath</p>

                    <div className="movie-buttons">
                        <button className="play-button">▶ Reproducir</button>
                        <button className="add-list-button">⭐ Mi lista</button>
                        <Reactions />
                  
                    </div>
                </div>
            </div>

            <Carousel
                items={recommendations}
                title={"Recommendations"}
                media_type={"movie"}
            />
        </div>
    );
}
