/* eslint-disable no-unused-vars */

import ContainerNavbar from "../containerNavbar/containerNavbar"

import "./gallery.css"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Alt from "../alt/alt";
import { NavLink } from "react-router-dom";

const responsive = {
  superLargeDesktop: {

    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1
  }
};


const trattamenti = [
    
    {
        url: "../../assets/gallery/laminazione_ciglia.jpg",
        description: "Trattamento viso Vip",
    },
    {
        url: "../../assets/gallery/trattamento_macchie.jpg",
        description: "Trattamento macchie",
    },
    {
        url: "../../assets/gallery/mani.jpg",
        description: "manicure",
    },
    {
        url: "../../assets/gallery/piedi.jpg",
        description: "pedicure",
    },
  ]
  
  const ufficio = [
    {
        url: "../../assets/gallery/ufficio_poltrone.jpg",
        description: "foto del centro estetico | poltrona",
    },
    {
        url: "../../assets/gallery/ufficio_scrivania.jpg",
    },
    {
        url: "../../assets/gallery/ufficio_bigliettini.jpg",
    },
    {
        url: "../../assets/gallery/lettino.jpg",
    }
  ]


function Gallery() {
    return (
        
        <>

        <ContainerNavbar title="galleria" />

        <div className="gradient-pink text-white text-center pt-6 pb-6">
                    <div className="container flex flex-col items-center">
                        <div>
                            <p className="subheading capitalize pt-8 pb-8">galleria foto</p>
                        </div>
                        <p className="poppins text-white leading-[140%] font-normal clamp-poppins-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
        </div>
        <div className="w-[90%] mx-auto my-[1rem] md:my-[3rem]">
            <div className="my-[1rem] md:my-[2rem]">
                <p className="subheading capitalize pt-8 pb-8 text-brown-100 text-center">trattamenti</p>
                <p className="clamp-playfair-normal text-center font-bold">( lista completa con relativi prezzi nella sezione <NavLink to="/servizi"><span className="text-pink-300 font-bold underline">servizi</span></NavLink> )</p>
            </div>
            
            <Carousel responsive={responsive}>
                {trattamenti.map((item,index) => {
                        return (
                            <div key={index} className="mx-[0.5rem]">
                                <img className="my-[auto]"  src={item.url} alt={Alt + "trattamenti personal"} />
                                <p className="poppins clamp-poppins-normal text-center text-white text-bold py-[0.5rem] md:py-[1rem] bg-pink-300 my-[0.5rem] md:my-[0.8rem]">{item.description}</p>
                            </div>
                        )
                    })}
            </Carousel>
        </div>

        <div className="w-[90%] mx-auto my-[1rem] md:my-[3rem]">
            <div className="my-[1rem] md:my-[2rem]">
                <p className="subheading capitalize pt-8 pb-8 text-brown-100 text-center">Centro Estetico</p>
            </div>
            
            <Carousel responsive={responsive}>
            {ufficio.map((item,index) => {
                        return (
                            <div key={index} className="mx-[0.5rem] bg-pink-300">
                                <img className="my-[auto]"  src={item.url} alt={Alt + "trattamenti personal"} />
                            </div>
                        )
            })}
            </Carousel>
        </div>

    </>

    )
}

export default Gallery
