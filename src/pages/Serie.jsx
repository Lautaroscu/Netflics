import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import useSerie from "../hooks/series/useSerie";
import { env } from "../getEnv";
import "../styles/Serie.css"


import Reactions from "../components/Reactions";
import useSeasonDetails from "../hooks/seasons/useSeasonDetails";
import formatRuntime from "../utils/formatRuntime";
import Carousel from "../components/Carrousel";

export function Serie() {
    const { id } = useParams();
    const { serie, getSerie, error, loading } = useSerie();
    const { details, getDetails } = useSeasonDetails()
    const [currentSeason, setCurrentSeason] = useState(1)
    const [activeTab, setActiveTab] = useState(1); 

    const { title, number_of_seasons, poster_path, overview, genres, popularity, first_air_date, vote_average, seasons } = serie;


    const handleSeasonDetails = (seasonNumber, serieId) => {
        console.log(seasonNumber, serieId)
        getDetails(seasonNumber, serieId)
        setCurrentSeason(seasonNumber)
    }



    useEffect(() => {
        if (id) {
            getSerie(id);
            getDetails(currentSeason, id)
        }
    }, [id]);



    if (loading) return <Skeleton height={500} width="100%" />;
    if (error) return <p>❌ {error}</p>;
    if (!serie) return <p>⚠️ No se encontró la serie.</p>;


    return (
        <div className="movie-page">
            <div className="movie-content">
                <img className="image" src={`${env.IMAGE_URL}/${poster_path}`} alt={title} />
                <div className="movie-info">
                    <h1>{title}</h1>
                    <p className="movie-duration">{number_of_seasons} Seasons | {first_air_date} | {genres?.map(g => g.name).join(", ")}</p>
                    <p className="movie-description">{overview}</p>
                    <p><strong>Director:</strong> Tom McGrath</p>

                    <div className="movie-buttons">
                        <button className="play-button">▶ Reproducir</button>
                        <button className="add-list-button">⭐ Mi lista</button>
                        <Reactions />
                    </div>
                </div>
            </div>
            <div className="serie-navigation">
                <button  className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>Episodios</button>
                <button className={activeTab === 2 ? "active" : "" }onClick={() => setActiveTab(2)}>Sugerencias</button>
                <button className={activeTab === 3 ? "active" : "" } onClick={() => setActiveTab(3)}>Detalles</button>

            </div>
            <section className="seasons-container">
                <div className="season-indicator-container">
                    <p>{seasons?.length > 1 ? ("Temporadas") : ("Temporada")}</p>

                    <div>
    {Array.from({ length: number_of_seasons }, (_, index) => (
      <button 
        key={index}
        onClick={() => handleSeasonDetails(index + 1, id)} 
        className="season_number"
      >
        {index + 1}
      </button>
    ))}
  </div>
                </div>
                <Carousel
                    items={details?.episodes}
                    renderItem={({ still_path: chapter_poster, episode_number, overview: chapter_overview, runtime: chapter_runtime, air_date, name }) => (
                        <div className="chapter" key={episode_number}>
                        <img src={`${env.IMAGE_URL}/${chapter_poster}`} alt={name} />
                        
                        <p className="chapter-head">
                            S{currentSeason}. Episodio {episode_number} | {formatRuntime(chapter_runtime)} | {air_date}
                        </p>
                    
                        <small className="chapter-overview">
                            {chapter_overview}
                        </small>
                    </div>
                    
                    )}
                />

            </section>






        </div>
    );
}
