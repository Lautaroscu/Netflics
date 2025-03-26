import { useEffect } from "react";
import { BackIcon, LogoutIcon } from "../icons";
import { Link } from "react-router-dom";
import "../styles/Header.css"
import Logo from "/src/assets/images/logo.png"
import "../styles/Account.css"
import { MenuProfile } from "../components/layout/MenuProfile";
import logougt from "../utils/Logout";


export function AccountPage({ setShowHeader }) {
    useEffect(() => {
        setShowHeader(false)
        return () => {
            setShowHeader(true);
        };
    }, [])
    return (
        <><header className="header">
            <div className="header-cont">
                <img src={Logo} className="logo" alt="logo" />
                <button onClick={ () => logougt()} className="log-out-button"> <LogoutIcon /> Cerrar sesion</button>
            </div>

        </header>
            <section className="account-page">

                <button className="back-button">
                    <BackIcon />
                    <Link to={"/"}>Volver</Link>
                </button>

                <div className="account-container">
                    <h2>Mi cuenta</h2>

                    <div className="options">
                        <div className="option">
                            <div className="text">
                                <h3>Suscripciones</h3>
                                <p>Administra tu plan, mejoralo o cambialo por el que vos quieras</p>
                            </div>
                                                        <BackIcon rotate={180}/>


                        </div>
                        <div className="option">
                            <div className="text">
                                <h3>Configuración de la cuenta</h3>
                                <p>Administrá tus dispositivos, restringí los contenidos y limitá alquileres y suscripciones.</p>
                            </div>
                            <BackIcon rotate={180}/>

                        </div>
                        <div className="option">
                            <div className="text">
                                <h3>Cambio de contraseña</h3>
                                <p>Cambiala de manera fácil con tu número de teléfono.</p>
                            </div>
                            <BackIcon rotate={180}/>

                        </div>
                        <div className="option">
                            <div className="text">
                                <h3>Centro de Ayuda</h3>
                                <p>Consultá nuestras guías y preguntas frecuentes para resolver tus dudas.</p>
                            </div>
                            <BackIcon rotate={180}/>

                        </div>
                    </div>

                </div>
                <button className="delete-account-button">Dar de baja mi cuenta</button>

            </section>
        </>
    )
}