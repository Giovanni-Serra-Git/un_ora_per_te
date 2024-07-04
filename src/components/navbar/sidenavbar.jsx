/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Logo from "./logo"
import { forwardRef, useRef } from "react";
import Navbar from "../navbar/navbar"
import ScrollTop from "../../scrollTop";


function ButtonOpenSidePanel({onClick}) {
  return (
      <div className=" md:hidden cursor-pointer" onClick={onClick}>
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF4D7C ">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
              <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#FF4D7C"/> </g>
          </svg>
      </div>
  )
}

function CloseButton() {

  return (
    <div className="cursor-pointer">
      <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

      <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z" fill="#FF4D7C "/> </g>

    </svg>
    </div>
  )
}

function Sidenavbar() {

  const ref = useRef(null);
  
  const ForwardSidePanel = forwardRef(function SidePanel(props,ref) {

    const {onClick} = props;
    return (
      <div 
       onClick={onClick}
        ref={ref} {...props}
        className={`fixed top-0 right-0 w-0 h-[100vh] bg-pink-100 z-50
          transition-all linear duration-700
          `}
        >
        <div className="absolute top-0 left-0 w-[100vw]">
          <div className="flex justify-between container py-6">
            <div></div>
            <CloseButton />
          </div>
        </div>
  
        <ul className="w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-[1rem] text-[2rem] text-pink-300 font-bold">
          <li className="hover:text-pink-400 hover:scale-105 focus:scale-105 transition-all duration-200">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-pink-400 hover:scale-105 focus:scale-105 transition-all duration-200">
            <NavLink to="/services">Servizi</NavLink>
          </li>
          <li className="hover:text-pink-400 hover:scale-105 focus:scale-105 transition-all duration-200">
            <NavLink to="/about">Chi Sono</NavLink>
          </li>
          <li className="hover:text-pink-400 hover:scale-105 focus:scale-105 transition-all duration-200">
            <NavLink to="/gallery">Galleria</NavLink>
          </li>
          <li className="hover:text-pink-400 hover:scale-105 focus:scale-105 transition-all duration-200">
            <NavLink to="/contacts">Contatti</NavLink>
          </li>
        </ul>
      </div>
    )});


    return (

      <>
        <ScrollTop />
       <ForwardSidePanel ref={ref} onClick={() => { ref.current.style.width = "0" }}/>

      <nav className="flex justify-between items-center py-6 w-[100%]">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <ButtonOpenSidePanel onClick={() => { ref.current.style.width = "100vw" }} />
        <Navbar />
      </nav> 

      </>
    )
}

export default Sidenavbar
