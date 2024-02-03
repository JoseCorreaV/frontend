import { useState } from "react";
import { Link, Navigate,   } from "react-router-dom";
import '../index.css';
import eyeIcon from '../component/Img/eyeIcon.png'
import iconL from '../component/Img/IconLogin.png'
import iconR from '../component/Img/IconRegister.png'
import iconLH from '../component/Img/IconoLoginHome.png'
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "../auth/AuthProvider";
//import { AuthResponse, AuthResponseError } from "../types/types";
//import { API_URL } from "../auth/authConstants";

export default function Login(){
  
    
  const [username, setUsername ] = useState('');
  const [password,  setPassword ] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorResponse  
    //setErrorResponse 
  ] = useState("");
  // const history = useHistory();
const auth = useAuth();

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  if (name === "username") {
    setUsername(value);
  }
  if (name === "password") {
    setPassword(value);
  }
};

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  /*// auth.setIsAuthenticated(true);
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const json = (await response.json()) as AuthResponse;
      console.log(json);

      if (json.body.accessToken) {
        auth.saveUser(json);
      }
    } else {
      const json = (await response.json()) as AuthResponseError;
      setErrorResponse(json.body.error);
    }
  } catch (error) {
    console.log(error);
  }*/
}

//dirigiste si esta autentificado
if (auth.isAuthenticated) {
  return <Navigate to="/dashboard" />;
}

    return (
      
      <div className="login-container"><DefaultLayout>
      <main className="main-content">
       
        <div className="login-form-container">
          
        <center>
          <img src={iconLH} alt="iconLH" className="iconLH-login" />
          <h1>Bienvienido</h1>
          {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
          </center>
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Usuario:
              <input
                type="text"
              //  value={username}
                onChange={handleChange} />
            </label>
            <label>
              Contraseña:
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
               //   value={password}
                  onChange={handleChange}
                />
                <img
                  src={eyeIcon}
                  alt="Toggle Password Visibility"
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </label>
            <div className="form-bottom">
              <Link to="/forgot-password" className="forgot-password-link">
                Recuperar Contraseña
              </Link>
              <button type="button" className="register-login-button" >
                <img src={iconR} alt="Register" className="register-icon" />
                Registrarse
              </button>
              <button type="button" className="register-login-button" >
              <img src={iconL} alt="Login" className="Login-icon" />
                Iniciar Sesión
              </button>
            </div>
          </form>
         
        </div>  
      </main> 
      </DefaultLayout>
    </div>
    
      );
}

