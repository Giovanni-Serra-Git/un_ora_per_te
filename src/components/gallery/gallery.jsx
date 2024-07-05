import Button from "../button/button"
import ContainerNavbar from "../containerNavbar/containerNavbar"
import Sidenavbar from "../navbar/sidenavbar"
import SimpleSlider from "../slider/simpleSlider"

const trattamenti = [
    "../../assets/gallery/laminazione_ciglia.jpg",
    "../../assets/gallery/trattamento_macchie.jpg",
    "../../assets/gallery/mani.jpg",
    "../../assets/gallery/piedi.jpg",
]

const ufficio = [
    "../../assets/gallery/ufficio_poltrone.jpg",
    "../../assets/gallery/ufficio_scrivania.jpg",
    "../../assets/gallery/ufficio_volantino.jpg",
    "../../assets/gallery/ufficio_bigliettini.jpg",
    "../../assets/gallery/lettino.jpg",
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
        <div className="bg-pink-200">
            <div className="w-[90%] mx-auto"> 
                <SimpleSlider images={trattamenti} props={{slideToScroll: "3", slideToShow: "3"}}  />
            </div>
            <div className="w-[90%] mx-auto"> 
                <SimpleSlider images={ufficio} props={{slideToScroll: "3", slideToShow: "3"}}  />
            </div>
            <Button url="/servizi" title="scopri di più" />
        </div>

    </>

    )
}

export default Gallery
