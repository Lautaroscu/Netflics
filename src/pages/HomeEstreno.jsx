import { InfoIcon, NextIcon, PlayIcon, PreviusIcon } from "../icons"
import { useEffect , useRef, useState} from "react"
import { estrenos } from "../data/estrenos"

import "../styles/Home.css"

export function HomeEstrenoPromocionado() {
    const carouselEstrenosRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const updateIndex = () => {
        if (!carouselEstrenosRef.current) return;
        const container = carouselEstrenosRef.current;
        const newIndex = Math.round(container.scrollLeft / container.offsetWidth);
        setCurrentIndex(newIndex);
    };
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
        carouselEstrenosRef.current?.addEventListener("scroll", updateIndex);

    };
    
    return (
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
        
    )
}