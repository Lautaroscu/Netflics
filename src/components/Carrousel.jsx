import { useRef } from "react";
import { NextIcon, PreviusIcon } from "../icons";

import { env } from "../getEnv"
import { PlayIcon } from "../icons";
import { useNavigate } from "react-router"


import "../styles/Carousel.css";

export default function Carousel({ items , title , media_type , renderItem}) {
    const carouselRef = useRef(null);
    const navigate = useNavigate()

    
    const scroll = (direction) => {
        console.log("Scrolling...");
        if (!carouselRef.current) return;

        const scrollAmount = 1200; // Ajusta la cantidad de scroll
        carouselRef.current.scrollBy({
            left: direction === "next" ? scrollAmount : -scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div className="carrousel-container">
            <h2>{title}</h2>
            <button className="carousel-btn prev" onClick={() => scroll("prev")}>
                <PreviusIcon height={30} width={30} />
            </button>

            <div className="carousel" ref={carouselRef}>
                {items?.map((item) => {
                    if(!renderItem) return (
                        <div className="card" key={item.id}>
                                          <img 
                                              className="card-img" 
                                              src={`${env.IMAGE_URL}/${item.poster_path}`} 
                                              alt={item.title} 
                                              aria-label={`Poster de ${item.title}`}
                                          />
                                          <div onClick={() => navigate(`${media_type}/${item.id}`)} className="card-preview">
                                              <PlayIcon />
                                              <div className="card-preview-info">
                                              <h3>{media_type.toUpperCase()} +{Math.floor(Math.random() * 3) + 14}</h3>
                                              </div>
                      
                                          </div>
                                      </div>
                    )
                    else 
                    return renderItem(item)
                     
                })}
            </div>

            <button className="carousel-btn next" onClick={() => scroll("next")}>
                <NextIcon height={30} width={30} />
            </button>
        </div>
    );
}
