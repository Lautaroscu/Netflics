import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Genres.css";
import { DesplegarIcon } from "../icons";

export function GenreFilter({ genres_list , media_type}) {
    const [genres, setGenres] = useState([]);
    const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar

    useEffect(() => {
        if (genres_list) setGenres(genres_list);
    }, [genres_list]);

    return (
        <div className="genres-wrapper">
            <button className="genres-button" onClick={() => setIsOpen(!isOpen)}>
                Géneros <DesplegarIcon />
            </button>
            {isOpen && (
                <div className="genres-container">
                    {genres.map((genre) => (
                        <button key={genre.id} className="genre">
                            <Link to={`/${media_type}/genre/${genre.id}`}>{genre.name}</Link>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
