/**
 * Navegación de las rutas del menu
 * @returns 
*/
import { Link } from "react-router-dom";
import iconM from '../component/Img/IconMenu.png'
import iconLM from '../component/Img/LibMenu.png'
import home from '../component/Img/Home.png'

interface DefaultLayoutProps {
    children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {

    const handleLogin = () => {
        // Implement your authentication logic here
        // For simplicity, let's just redirect to the dashboard on login
      //  history.push('/superAdmin');
      };

    return (
      <>      <aside className="sidebar">
      <div className="menu-icon">
      <img src={iconM} alt="iconM" />
      </div>
      <nav>
        <ul>
        <li>
            <Link to="/">
            <img src={home} alt="home" className="Home-icon-text" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/">
            <img src={iconLM} alt="Register" className="Items-icon-text" />
              ingenieria de sistemas
            </Link>
          </li>
          <li>
            <Link to="/">
            <img src={iconLM} alt="Register" className="Items-icon-text" />
              Ingenieria industrial
            </Link>
            </li>
        </ul>    
          <button className="login-button" onClick={handleLogin}>
        Iniciar Sesión
      </button>
      </nav>

    </aside>

            <main>{children}</main>
        </>
        );
}