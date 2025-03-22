import { useRef } from "react";
import { NextIcon, PreviusIcon } from "../icons";
import "../styles/Carousel.css";

export default function Carousel({ items, renderItem }) {
    const carouselRef = useRef(null);

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
            <button className="carousel-btn prev" onClick={() => scroll("prev")}>
                <PreviusIcon height={30} width={30} />
            </button>

            <div className="carousel" ref={carouselRef}>
                {items.map((item, index) => (
                    <div key={index} className="carousel-item">
                        {renderItem(item)}
                    </div>
                ))}
            </div>

            <button className="carousel-btn next" onClick={() => scroll("next")}>
                <NextIcon height={30} width={30} />
            </button>
        </div>
    );
}
