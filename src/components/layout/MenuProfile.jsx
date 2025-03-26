import { useEffect, useState } from "react";
import { LogoutIcon, PencilIcon, Toggleicon } from "../../icons";
import "../../styles/MenuProfile.css"
import { useNavigate } from "react-router-dom";
export function MenuProfile({user_name , open , setOpen}) {
   const navigate =  useNavigate()
useEffect(() => {
    return () => setOpen(false)
} , [])
    return (
        <div className={`menu-profile ${open ? ("show") : ""}`}>
            <p>Hola, {user_name}! <PencilIcon /></p>
            <div className="line"></div>
            <div className="container">
                <ul>
                    <li>Cambiar perfil</li>
                    <li onClick={()=> navigate("/my-account")}>Mi cuenta</li>
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