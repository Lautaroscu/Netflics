import { useEffect, useState } from "react"
import useTopRatedMovies from "../hooks/movies/useTopRatedMovies"
import useTrendingMovies from "../hooks/movies/useTrendingMovies"
import useUpcomingMovies from "../hooks/movies/useUpcomingMovies"
import Carousel from "../components/Carrousel"
import { GenreFilter } from "../components/GenresFilter"
import movieGenres from "../data/movieGenres"
import "../styles/Movies.css"
import useMoviesByGenre from "../hooks/movies/useMoviesByGenre"

export function Movies() {
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
            
            return (
                <section className="movies-container">
                    <div className="genres-component">
            <GenreFilter genres_list={movieGenres} media_type={"movie"}/>

            </div>
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

                                   
                </section>
            )
}