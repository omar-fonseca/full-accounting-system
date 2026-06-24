import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom'; // Importar useNavigate
import "./LoginRegister.css";
import { IonIcon } from '@ionic/react';
import { mailOutline, lockClosedOutline, personOutline, logoTwitter, logoFacebook, logoLinkedin, logoGoogle } from 'ionicons/icons';
import api from './api'; // Importar el archivo api.js

const LoginRegister = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLogin, setIsLogin] = useState(searchParams.get('mode') !== 'register');
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    contraseña: "" 
  });

  const navigate = useNavigate(); // Inicializar el hook useNavigate

  useEffect(() => {
    setIsLogin(searchParams.get('mode') !== 'register');
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? "/auth/login" : "/auth/register"; 
    try {
      const response = await api.post(url, formData); // Usar api.js con axios.post
      const data = response.data; // Obtener la respuesta de la API
  
      if (response.status === 200 || response.status === 201) {
        if (isLogin) {
          // Si es inicio de sesión, redirigir al dashboard
          console.log("Token:", data.token);
          navigate('/admindashboard'); 
        } else {
          // Si es registro, mostrar un mensaje y cambiar la vista a login
          alert("Registro exitoso. Ahora puede iniciar sesión.");
          setIsLogin(true); // Cambiar a la vista de inicio de sesión
          setSearchParams({ mode: 'login' });
        }
      } else {
        console.error(data);
        alert(data.message || "Ocurrió un error. Intenta nuevamente.");
      }
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error. Intenta nuevamente.");
    }
  };  

  return (
    <div className="loginregister">
      <div className={`loginregister-container ${isLogin ? '' : 'toggle'}`}> 
        <div className="login-register loginregister-container-form">
          <form className={`loginregister-sign-in ${isLogin ? '' : 'hidden'}`} onSubmit={handleSubmit}>
            <h2>Iniciar Sesión</h2>
            <div className="loginregister-social-networks">
              <IonIcon icon={logoTwitter} />
              <IonIcon icon={logoFacebook} />
              <IonIcon icon={logoLinkedin} />
              <IonIcon icon={logoGoogle} />
            </div>
            <span>Use su correo y contraseña</span>
            <div className="loginregister-container-input">
              <IonIcon icon={mailOutline} />
              <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="loginregister-container-input">
              <IonIcon icon={lockClosedOutline} />
              <input type="password" name="contraseña" placeholder="Contraseña" value={formData.contraseña} onChange={handleChange} />
            </div>
            <a href="#">¿Olvidaste tu contraseña?</a>
            <button type="submit" className="loginregister-button">INICIAR SESIÓN</button>                    
          </form>
        </div>

        {/* Formulario de Registro */}
        <div className="loginregister-container-form">
          <form className={`loginregister-sign-up ${isLogin ? 'hidden' : ''}`} onSubmit={handleSubmit}>
            <h2>Registrarse</h2>
            <div className="loginregister-social-networks">
              <IonIcon icon={logoTwitter} />
              <IonIcon icon={logoFacebook} />
              <IonIcon icon={logoLinkedin} />
              <IonIcon icon={logoGoogle} />
            </div>
            <span>Use su correo electrónico para registrarse</span>
            <div className="loginregister-container-input">
              <IonIcon icon={personOutline} />
              <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
            </div>
            <div className="loginregister-container-input">
              <IonIcon icon={mailOutline} />
              <input type="text" name="email" placeholder="Tu correo" value={formData.email} onChange={handleChange} />
            </div>
            <div className="loginregister-container-input">
              <IonIcon icon={lockClosedOutline} />
              <input type="password" name="contraseña" placeholder="Tu contraseña" value={formData.contraseña} onChange={handleChange} />
            </div>
            <button type="submit" className="loginregister-button">REGISTRARSE</button>
          </form>
        </div>

        <div className="loginregister-container-welcome">
          <div className="loginregister-welcome-sign-up loginregister-welcome">
            <h3>¡Bienvenido!</h3>
            <p>Ingrese sus datos personales para usar todas las funciones del sitio</p>
            <button className="loginregister-button" id="loginregister-btn-sign-up" onClick={() => setSearchParams({ mode: 'register' })}>Registrarse</button>
          </div>

          <div className="loginregister-welcome-sign-in loginregister-welcome">
            <h3>¡Hola!</h3>
            <p>Regístrate con tus datos personales para usar todas las funciones del sitio</p>
            <button className="loginregister-button" id="loginregister-btn-sign-in" onClick={() => setSearchParams({ mode: 'login' })}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
