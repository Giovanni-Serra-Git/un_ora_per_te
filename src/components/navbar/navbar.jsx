import { NavLink } from "react-router-dom"
import Logo from "./logo.jsx"

function Navbar() {

    return (
        <ul className="hidden">
        <Logo />
        <li>
          <NavLink to="/services">Servizi</NavLink>
        </li>
        <li>
          <NavLink to="/about">Chi Siamo</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Galleria</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contatti</NavLink>
        </li>
      </ul>
    )
}

export default Navbar
