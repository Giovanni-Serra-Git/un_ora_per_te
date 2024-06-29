import { NavLink } from "react-router-dom"

function Navbar() {

    return (
        <ul className="hidden md:flex gap-4 text-black poppins font-[18px] font-500">
        <li>
          <NavLink className="hover:text-brown-100 hover:scale-105 hover:font-medium transition-linear duration-200" to="/services">Servizi</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-brown-100 hover:scale-105 hover:font-medium transition-linear duration-200" to="/about">Chi Siamo</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-brown-100 hover:scale-105 hover:font-medium transition-linear duration-200" to="/gallery">Galleria</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-brown-100 hover:scale-105 hover:font-medium transition-linear duration-200" to="/contacts">Contatti</NavLink>
        </li>
      </ul>
    )
}

export default Navbar
