import { NavLink } from "react-router-dom"
import Logo from "./logo"
import ButtonOpenSideNavbar from "./buttonOpenSideNavbar"

function Sidenavbar() {

  function CloseButton() {
    return (
      <>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

        <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z" fill="#FF4D7C "/> </g>

</svg>
      </>
    )
  }

    return (

      <>

      <nav className="flex justify-between items-center py-6 w-[100%]">
        <Logo />
        <ButtonOpenSideNavbar />  
      </nav> 

        <ul className="hidden">

        <CloseButton />
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
      </>
    )
}

export default Sidenavbar
