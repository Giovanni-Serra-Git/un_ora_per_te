/* eslint-disable react/prop-types */
import Footer from "../footer/footer"
import Navbar from "../navbar/navbar"
import Sidenavbar from "../navbar/sidenavbar"
import ItemGallery from "./itemGallery"
import Button from "../button/button"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const imagesToSlide = [
    "1",
    "2",
    "3",
    "4",
]

function ImageSlider({url}) {
    return (
        <div className="w-[345px] h-[345px] bg-[#FFF5F8] ml-auto mr-auto mt-8 mb-8 rounded-3xl">
            <h3>{url}</h3>
        </div>
    )
}

function SimpleSlider() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="mb-8 mt-8">
        <Slider {...settings}>
            {imagesToSlide.map((item, index) => <ImageSlider key={index} url={item} />)}
        </Slider>
    </div>
  );
}

const alt = "Centro Estetico | Un ora per te "; 

const gallery = [
    {
        url: "../../../assets/homepage/trattamenti/pietre.png",
        title: "massaggio pietre calde",
    },
    {
        url: "../../../assets/homepage/trattamenti/epilazione.png",
        title: "epilazione corpo",
    },
    {
        url: "../../../assets/homepage/trattamenti/mani.png",
        title: "manicure",
    },
    {
        url: "../../../assets/homepage/trattamenti/viso.png",
        title: "pulizia viso",
    }
]

function HomePage() { 

    return (
        <>
         <div>
            
            <div className="bg-pink-100 relative z-20">
                <div className="container text-center flex flex-col items-center">
                    <Sidenavbar/>
                    <Navbar />
                    <h1 className="heading-playfair my-10">Ci prendiamo cura della tua bellezza e del tuo benessere</h1>
                    <p className="font-Poppins text-[12px] text-brown-100 font-normal">Riscopri la tua bellezza con i nostri trattamenti personalizzati: prenota ora un appuntamento e affidati agli esperti di benessere e bellezza.</p>
                    <Button title="contattaci" url="/contatti" />
                    <div className="relative w-[50%] max-w-[245px] z-20">
                        <img className="relative" src="../../../assets/homepage/woman.png" alt={`${alt} Immagine Donna`} />
                        <img className=" w-[60%]  absolute left-[70%] top-[10%] -z-1"  src="../../../assets/homepage/plant.png"alt={`${alt}Immagine pianta vicina alla donna`}/>
                    </div>
                </div>
                <div className="h-[45vh] bg-pink-200 relative mt-[-10%]">
                </div>
            </div>

            <div className="container w-[95%] flex flex-col bg-pink-100 rounded-lg mt-[-20vh] relative z-20">
                    <p className="subheading text-brown mt-6 mb-6 text-center text-brown-100">trattamenti personalizzati</p>
                    <div className="flex flex-col items-center gap-4">
                        { 
                            gallery.map((item, index) => <ItemGallery key={index} src={item.url} title={item.title} />)
                         }
                    </div> 
                    <Button title="scopri i nostri trattamenti" url="/servizi" />
                </div>
            <div>
                <div className="container flex flex-col items-center">
                    <p className="poppins text-brown-100 text-[14px] letter-spacing-[-0.28px] mb-6 mt-6">più di <span className="text-pink-300 font-bold">10 anni</span> di esperienza</p>
                    <p className="playfair text-brown-100 text-[32px] letter-spacing-[-0.64px] mb-6 mt-6">personale qualificato</p>
                    <p className="poppins text-brown-100 text-[12px] leading-[140%] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <Button url="/chi-siamo" title="conosci lo staff" />
                </div>


                <div className="container flex items-center justify-between mt-10 mb-10">
                    <div className="w-[40%] self-end">
                        <img src="../../../assets/homepage/staff/stone.png" alt={`${alt}Immagine di pietre da massaggio in pila`} />
                    </div>

                        <div className="relative w-[60%] fit-content">
                            <div className="absolute left-[-10%] bottom-0 -z-1">
                                <img src="../../../assets/homepage/staff/arco_chiaro.png" alt={`${alt} Immagine di una porta ad arco scura`} />
                            </div>
                            <div className="relative">
                                 <img src="../../../assets/homepage/staff/arco_scuro.png" alt={`${alt} Immagine di una porta ad arco chiara`} />
                                 <img className="absolute bottom-0 left" src="../../../assets/homepage/staff/staff.png" alt={`${alt} Immagine del personale lavorativo`} />
                            </div>
                        </div>
                </div>
                <div className="bg-brown-100 text-white text-center pt-6 pb-6">
                    <div className="container flex flex-col items-center">
                        <p className="playfair pt-8 pb-8 text-[32px]">macchinari ad alta tecnologia</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="container bg-brown-100">
                        <SimpleSlider  />
                        <Button url="/servizi" title="scopri di più" />
                    </div>
                </div>
            </div>
            <div className="container mb-6 mt-6 flex flex-col items-center">
                <p className="playfair text-brown-100 text-[32px] tracking-[-0.64px] mb-6 mt-6">sicurezza e igiene</p>
                <p className="poppins text-brown-100 text-[12px] leading-[140%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <Button url="/chi-siamo" title="scopri di più" />
            </div>
            <Footer />

        </div>
        </>
    )
}

export default HomePage
