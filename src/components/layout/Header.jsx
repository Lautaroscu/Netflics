import { MiListaIcon, ProfileIcon, SearchIcon } from "../../icons"
import { useState , useEffect } from "react";
import "../../styles/Header.css"
export function Header({isLoggedin}) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // Cambia el estado cuando haces scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  if(!isLoggedin) {
        return (
            <header className={`header ${scrolled ? "scrolled" : ""}`}>
                <img className="logo" src="./src/assets/image.png" alt="logo" />
                <nav className="header-nav">
                    <ul>
                        <li>Inicio</li>
                        <li>Guia de TV</li>
                        <li>Deportes</li>
                        <li>Peliculas</li>
                        <li>Series</li>
                        <li>Explorar Novedades</li>
                    </ul>
                </nav>
                    <ul className="icons-section">
                        <li><SearchIcon /></li>
                        <li> <MiListaIcon /></li>
                        <li><ProfileIcon /></li>
                        
                    </ul>
                    
                   
                  
                   
            </header>
        )
  }
}