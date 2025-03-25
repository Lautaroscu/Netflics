import { FacebookIcon, GoogleIcon } from "../icons";
import Logo from "/src/assets/images/logo.png";
import { useState } from "react";
import "../styles/Login.css";
import { useGoogleLogin } from '@react-oauth/google';
import { ClipLoader } from "react-spinners";

import { useNavigate } from "react-router-dom";

export function LoginPage({handleAuthenticate}) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const [isSuccess, setIsSuccess] = useState(false); // Nuevo estado para éxito


   const navigate = useNavigate()


   const handleSubmit = (event) => {
    event.preventDefault();
  
    // Establecer el estado de loading
    setIsLoading(true);
  
    // Guardar el email y la contraseña (asegúrate de que están definidos correctamente)
    setUser({ email, password });
  
    // Llamar al método de autenticación (asumimos que handleAuthenticate maneja la lógica de autenticación)
    handleAuthenticate(true);
  
    // Aquí usamos un solo setTimeout para manejar todo
    setTimeout(() => {
      // Detener el loading
      setIsLoading(false);
  
      // Mostrar mensaje de éxito
      setIsSuccess(true);
  
      // Ocultar el mensaje de éxito después de 3 segundos
      setTimeout(() => {
        setIsSuccess(false);
        // Redirigir a la página principal ("/")
        navigate("/");
      }, 3000); // Duración del mensaje de éxito
    }, 3000); // Tiempo de espera para simular la carga
  }
  
 
  
  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Credential:", credentialResponse);
    setToken(credentialResponse.credential); // Token JWT

    // Podés decodificarlo si querés ver el usuario (opcional)
    const base64Url = credentialResponse.credential.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const userData = JSON.parse(window.atob(base64));
    setUser(userData);
  };
  const handleGoogleLogin = useGoogleLogin(
    {
      onSuccess : tokenResponse => handleGoogleSuccess(tokenResponse)
    }
  )


  

  return (
    <div className="login-page">
      <img src={Logo} alt="logo" />

      <h1>Inicia sesión en Netflics</h1>
      
        <form onSubmit={handleSubmit} className="login-form">
        <div className="continue-with-container">
           
       

              <button 
              onClick={()=> handleGoogleLogin()}
                className="continue"
              >
                <GoogleIcon /> Continuar con Google
              </button>
            
           
          <button className="continue">
            <FacebookIcon /> Continuar con Facebook
          </button>
          <button className="continue">Continuar con número de teléfono</button>
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input  onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
        </div>
        <div className="recordame-container">
          <div>
            <input type="checkbox" name="recordame" />
            <label htmlFor="recordame">Recordame</label>
          </div>
          <p>¿Olvidaste tu contraseña?</p>
        </div>
        {isSuccess ? ( 
          <div className="success-message">
          <span className="checkmark">&#10003;</span> Autenticación exitosa
        </div>
      ) : (
        <button className={`continuar ${isLoading}`} type="submit">

          Continuar {isLoading && <ClipLoader color="white" loading={isLoading} size={30} />
        }
        </button>
)}
      </form>
      

      
      

      <p>
        ¿No tienes cuenta? <span>Suscríbete a Netflics</span>
      </p>
    </div>
  );
}
