import { FacebookIcon, GoogleIcon } from "../icons"
import Logo from "/src/assets/images/logo.png"

import "../styles/Login.css"

export function LoginPage({handleSubmit}) {
    return (
        <div className="login-page">
            <img src={Logo} alt="logo" />
            <h1>Inicia sesion en Netflics</h1>
            <form onSubmit={handleSubmit } className="login-form">
                <div className="continue-with-container">
                    <button><GoogleIcon /> Continuar con google</button>
                    <button><FacebookIcon /> continuar con facebook</button>
                    <button>Continuar con numero de telefono</button>
                    </div>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" />
                </div>
                <div className="recordame-container">
                    <div>
                    <input type="checkbox" name="recordame"/>
                    <label htmlFor="recordame">Recordame</label>
                    </div>
                    
                    <p>Olvidaste tu contraseña ?</p>

                </div>

                <button className="continuar" type="submit">Continuar</button>
            </form>

            <p>¿No tienes cuenta? <span>Suscríbete a Netflics</span></p>
        </div>
    )
}