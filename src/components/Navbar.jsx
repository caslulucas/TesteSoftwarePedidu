import { Link } from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
  return (
   <nav className="navbar">
    <h2>
        Municipios
    </h2>
    <ul>
        <li>
            <Link to={`/new`} className= "new-btn">
                Cadastro
            </Link>
        </li>
    </ul>
   </nav>
  )
}

export default Navbar