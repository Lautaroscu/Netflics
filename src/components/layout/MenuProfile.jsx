import { useEffect, useState } from "react";
import { LogoutIcon, PencilIcon, Toggleicon } from "../../icons";
import "../../styles/MenuProfile.css"
export function MenuProfile({user_name , open}) {

    return (
        <div className={`menu-profile ${open ? ("show") : ""}`}>
            <p>Hola, {user_name}! <PencilIcon /></p>
            <div className="line"></div>
            <div className="container">
                <ul>
                    <li>Cambiar perfil</li>
                    <li>Mi cuenta</li>
                    <li>Control parental <Toggleicon /></li>
                </ul>
            </div >
            <div className="line"></div>
            <div className="container">
            <ul>
                <li>Centro de ayuda</li>
                <li>Cerrar sesion <LogoutIcon /></li>
            </ul>
            </div>
           
        </div>
    )
}