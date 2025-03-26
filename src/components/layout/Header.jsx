import { MiListaIcon, ProfileIcon, SearchIcon } from "../../icons"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "/src/assets/images/logo.png"
import "../../styles/Header.css"
import { MenuProfile } from "./MenuProfile";
export function Header({ show }) {
    const [scrolled, setScrolled] = useState(false);
    const [open , setOpen] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // Cambia el estado cuando haces scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        show &&
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-cont">
        <img  className="logo" src={Logo} alt="logo" />
                 <><ul className="nav">
                    <li><Link to={"/"}>Inicio</Link></li>
                    <li><Link>Guia de TV</Link></li>
                    <li><Link to={"/sports"}>Deportes</Link></li>
                    <li><Link to={"/movies"}>Peliculas</Link></li>
                    <li><Link to={"/series"}>Series</Link></li>
                    <li><Link>Explorar Novedades</Link></li>
                </ul><ul className="icons-section">
                        <li><SearchIcon /></li>
                        <li> <MiListaIcon /></li>
                        <li onClick={() => { setOpen(!open)
            console.log(open)
        }}><ProfileIcon /></li>

                    </ul></>
        </div>
            
            
               
        <MenuProfile user_name={"Pepito"} open={open}/>

        </header>
    )
}
