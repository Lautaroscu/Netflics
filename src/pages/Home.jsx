import { useEffect ,  useState} from "react"
import useTrendingMovies from "../hooks/movies/useTrendingMovies"

import Carousel from "../components/Carrousel"
import useTopRatedMovies from "../hooks/movies/useTopRatedMovies"
import useUpcomingMovies from "../hooks/movies/useUpcomingMovies"
import { HomeEstrenoPromocionado } from "./HomeEstreno"





export function Home() {
    const { movies, getMovies, error, loading } = useTrendingMovies()
    const {topRatedMovies ,  getTopRatedMovies  } = useTopRatedMovies()
    const {upcomingMovies ,getUpcomingMovies } = useUpcomingMovies()
    
    
    useEffect(() => {
        getMovies()
    },[])
    useEffect(() => {
        getTopRatedMovies()
    },[])
    useEffect(() => {
        getUpcomingMovies()
    },[])
    

    if (error) {
        return <div className="error">Hubo un error al cargar las películas.</div>
    }

    return (
        <main>
          <HomeEstrenoPromocionado />
     
              <Carousel items={movies}
               title={"Trending movies"}
               media_type={"movie"}
              />
                
              <Carousel items={topRatedMovies}
              title={"Top rated movies"}
              media_type={"movie"}
              />
              

                 
                <Carousel items={upcomingMovies}
                title={"Upcoming movies"}
                media_type={"movie"}
                />
                   
                
              
        </main>
    )
}
