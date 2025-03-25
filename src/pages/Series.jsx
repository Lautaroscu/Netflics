import { useEffect ,  useState} from "react"
import Carousel from "../components/Carrousel";
import useTopRatedSeries from "../hooks/series/useTopRated";
import usePopularSeries from "../hooks/series/usePopularSeries";
import "../styles/Series.css"
export function Series() {
    const {topRatedSeries  ,  getTopRatedSeries  , error , loading} = useTopRatedSeries()
    const {popularSeries , getPopularSeries } = usePopularSeries()
    useEffect(()=> {
        getTopRatedSeries()
    },[])
    useEffect(()=> {
        getPopularSeries()
    },[])
    return(
        <section className="series-container">
            <Carousel 
                items={topRatedSeries}
                title={"Top Rated Series"}
                media_type={"serie"}
            />
            <Carousel 
            items={popularSeries}
            title={"Popular Series"}
            media_type={"serie"}
            />


        </section>
    )
}