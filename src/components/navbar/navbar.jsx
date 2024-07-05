import { NavLink } from "react-router-dom"

function Navbar() {

    return (
        <ul className="hidden md:flex gap-4 text-black poppins font-500"> 
        <li>
          <NavLink className="uppercase clamp-poppins-normal font-bold text-brown-100 hover:text-[black] transition-all transition-linear duration-200" to="/servizi">Servizi</NavLink>
        </li>
        <li>
          <NavLink className="uppercase clamp-poppins-normal font-bold text-brown-100 hover:text-[black] transition-all transition-linear duration-200" to="/chi-sono">Chi Sono</NavLink>
        </li>
        <li>
          <NavLink className="uppercase clamp-poppins-normal font-bold text-brown-100 hover:text-[black] transition-all transition-linear duration-200" to="#">Galleria</NavLink>
        </li>
        <li>
          <NavLink className="uppercase clamp-poppins-normal font-bold text-brown-100 hover:text-[black] transition-all transition-linear duration-200" to="/contatti">Contatti</NavLink>
        </li>
      </ul>
    )
}

export default Navbar
