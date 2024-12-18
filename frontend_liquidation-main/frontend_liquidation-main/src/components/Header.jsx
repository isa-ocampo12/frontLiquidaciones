import { Link, useNavigate } from "react-router-dom"; 
import './Header.css'

const Header = () => {

  const navigate = useNavigate();

  const cerrarSesion = () => {
    navigate("/");
  };

    return(
      <header className="cabecera">
      <div className="logo">
        <img src="/imagenes/logoConTrigre.png" alt="Logo" />
      </div>
      <nav className="menu">
        <ul>
          <li className="linkBarra">
            <Link to="/home">
              <b>Home</b>
            </Link>
          </li>
          <li className="linkBarra">
            <Link to="/calculo">
              <b>Liquidación</b>
            </Link>
          </li>
          <li className="linkBarra">
            <Link to="/registro">
              <b>Registro</b>
            </Link>
          </li>
          <li className="linkBarra">
            <Link to="/historial">
              <b>Historial</b>
            </Link>
          </li>
          <li className="linkBarra">
            <Link to="/empleados">
            <b>Empleados</b>
            </Link>
          </li>
          <li>
            <button 
            onClick={cerrarSesion}
            className="cerrarSesion">
                Cerrar Sesión
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;