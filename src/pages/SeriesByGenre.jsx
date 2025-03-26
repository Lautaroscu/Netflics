import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Series.css";
import movieGenres from "../data/movieGenres";
import Carousel from "../components/Carrousel";
import { GenreFilter } from "../components/GenresFilter";
import useSeriesByGenre from "../hooks/series/useSeriesByGenre";

export function SeriesByGenre() {
    const { id } = useParams();
    const { getSeriesByGenre } = useSeriesByGenre();

    const [paage1, setPage1] = useState([]);
    const [page2, setPage2] = useState([]);
    const [page3, setPage3] = useState([]);

    useEffect(() => {
        if (!id) return;
    
        const fetchSeries = async () => {
            const page1 = await getSeriesByGenre(1, id);
            const page2 = await getSeriesByGenre(2, id);
            const page3 = await getSeriesByGenre(3, id);
    
            setPage1(page1);
            setPage2(page2);
            setPage3(page3);
        };
    
        fetchSeries();
    }, [id]);

    return (
        <div className="series-container">
            <div className="genres-component">
                <GenreFilter genres_list={movieGenres} media_type={"serie"} />
            </div>
            <Carousel items={paage1} title="Top Rated" media_type="serie" />
            <Carousel items={page2} title="Most popular" media_type="serie" />
            <Carousel items={page3} title="Classics" media_type="serie" />
        </div>
    );
}
