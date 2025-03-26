import planes from "../data/planes"
import "../styles/Pricing.css"
import { FaCheck, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "/src/assets/images/logo.png"



export default function PricingPage() {
    
    return (
         <><header className={`header`}>
            <img className="logo" src={Logo} alt="logo" />


                <ul className="nav">
                    <li><Link to={"/us"}>Nosotros</Link></li>
                    <li><Link to={"/contact"}>Contacto</Link></li>
                    <li><Link to={"/pricing"}>Tipos de planes</Link></li>
                    <li><Link to={"/News"}>Novedades</Link></li>

                </ul>





            <ul className="icons-section">
                <li><Link to={"/login"}>Iniciar Sesion</Link></li>
                <li><Link to={"/register"}>Registrarse</Link></li>
            </ul>




        </header><div className="planes-container">
                {planes.map((plan, index) => (
                    <div key={index} className="plan">
                        <h3>{plan.nombre}</h3>
                        <p className="price">
                            {plan.moneda}{plan.precio} <span>{plan.periodo}</span>
                        </p>
                        <button><Link to={"/login"}>{plan.botonTexto}</Link></button>
                        <ul>
                            {plan.caracteristicas.map((item, i) => (
                                <li key={i}>
                                    {item.incluye ? (
                                        <FaCheck className="check-icon" />
                                    ) : (
                                        <FaTimes className="cross-icon" />
                                    )}
                                    {item.caracteristica}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div></>
    );
}