import { useEffect , useRef, useState} from "react"
import useTrendingMovies from "../hooks/movies/useTrendingMovies"
import { env } from "../getEnv"
import "../styles/Home.css"
import { InfoIcon, NextIcon, PlayIcon, PreviusIcon } from "../icons"
import { estrenos } from "../data/estrenos"
import Carousel from "../components/Carrousel"

export function HomeEstrenoPromocionado() {
    const { movies, getMovies, error, loading } = useTrendingMovies()
      const carouselEstrenosRef = useRef(null);
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const scroll = (direction) => {
        if (!carouselEstrenosRef.current) return;
    
        const container = carouselEstrenosRef.current;
        const scrollAmount = container.offsetWidth ;
    
        if (direction === "next") {
            if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
                // Si está en el final, vuelve al inicio
                container.scrollTo({ left: 0 , behavior: "smooth" });
            } else {
                // Desplaza normalmente
                container.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        } else {
            if (container.scrollLeft <= 0) {
                // Si está al inicio, vuelve al final
                container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
            } else {
                // Desplaza normalmente hacia atrás
                container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            }
        }
    };
    
        const updateIndex = () => {
            if (!carouselEstrenosRef.current) return;
            const container = carouselEstrenosRef.current;
            const newIndex = Math.round(container.scrollLeft / container.offsetWidth);
            setCurrentIndex(newIndex);
        };

        carouselEstrenosRef.current?.addEventListener("scroll", updateIndex);
    useEffect(() => {
        getMovies()
    },[])
    if (loading) {
        return <div className="loading">Cargando...</div>
    }

    if (error) {
        return <div className="error">Hubo un error al cargar las películas.</div>
    }

    return (
        <main>
            <section className="container-estrenos">
            <span onClick={()=> scroll("prev")}>
               <PreviusIcon  height={40} width={40} />
                </span> 
                <div className="estrenos-carousel" ref={carouselEstrenosRef}>
                {estrenos.map((estreno) => (
                     <div className="estreno">
                        <img className="estreno-image" src={estreno.image} alt={estreno.description} />
                        
                        <p className="estreno-description">{estreno.description}</p>
                        <button className="ver-mas-button"><InfoIcon /> Ver Más</button>
                        <div className="shadow"></div>

                     </div>
                     
                ))}
                </div>
              
                 <span  onClick={()=> scroll("next")}>
                    <NextIcon height={40} width={40} />
                </span>
                   {/* Indicador de progreso */}
            <div className="carousel-indicators">
                {estrenos.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                    />
                ))}
            </div>
            </section>

              
              <Carousel items={movies}
                renderItem={(movie) =>(
                    <div className="card" key={movie.id}>
                    <img 
                        className="card-img" 
                        src={`${env.IMAGE_URL}/${movie.poster_path}`} 
                        alt={movie.title} 
                        aria-label={`Poster de ${movie.title}`}
                    />
                    <div className="card-preview">
                        <PlayIcon />
                        <div className="card-preview-info">
                        <h3>{movie.media_type.toUpperCase()} +{Math.floor(Math.random() * 3) + 14}</h3>
                        <p>{Math.floor(Math.random() * 3) + 1}hs {Math.floor(Math.random() * 60) + 1}min</p>
                        </div>

                    </div>
                </div>
                )}
              />
                   
                
              
        </main>
    )
}
