import { useEffect ,  useState} from "react"
import useTrendingMovies from "../hooks/movies/useTrendingMovies"

import Carousel from "../components/Carrousel"
import useTopRatedMovies from "../hooks/movies/useTopRatedMovies"
import useUpcomingMovies from "../hooks/movies/useUpcomingMovies"
import { HomeEstrenoPromocionado } from "./HomeEstreno"
import Skeleton from "react-loading-skeleton"





export function Home() {
    const { movies, getMovies, error, loading } = useTrendingMovies()
    const {topRatedMovies ,  getTopRatedMovies, loading : topRatedLoading   } = useTopRatedMovies()
    const {upcomingMovies ,getUpcomingMovies , loading : upComingLoading } = useUpcomingMovies()
    
    
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
    const renderCarouselSkeleton = () =>  (
        <div className="carouseles-skeletons">
            <Skeleton variant="text" width={200} />
          <Skeleton variant="rectangular" width={1200} height={350} />
          <Skeleton variant="rectangular" width={1200} height={350} />
          <Skeleton variant="rectangular" width={1200} height={350} />
        </div>
          
        
      );
      

    return (
        <main>
          <HomeEstrenoPromocionado />
      {loading ? renderCarouselSkeleton() : <Carousel items={movies}
               title={"Trending movies"}
               media_type={"movie"}
              /> }
             
                {topRatedLoading ? renderCarouselSkeleton() : <Carousel items={topRatedMovies}
              title={"Top rated movies"}
              media_type={"movie"}
              /> }
             
              

                 {upComingLoading ? renderCarouselSkeleton() :  <Carousel items={upcomingMovies}
                title={"Upcoming movies"}
                media_type={"movie"}
                />}
               
                   
                
              
        </main>
    )
}
