/* eslint-disable react/prop-types */
import Footer from "../footer/footer"
import Sidenavbar from "../navbar/sidenavbar"
import ItemGallery from "./itemGallery"
import Button from "../button/button"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

import Decoration from "../../assets/decoration/decoration"

import Alt from "../alt/alt"
import SimpleSlider from "../slider/simpleSlider";

const trattamenti = [
    "../../assets/gallery/mani.jpg",
    "../../assets/gallery/mani.jpg",
    "../../assets/gallery/mani.jpg",
    "../../assets/gallery/mani.jpg",
]


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

            {/* HERO SECTION */}
            
            <div className="bg-pink-100 relative z-20">
                <div className="container text-center flex flex-col items-center">
                    <Sidenavbar/>
                    <div className="flex flex-col items-center md:flex-row md:justify-between">

                        <div className="md:basis-[60%] md:text-left z-40">
                            <h1 className="heading-playfair my-10 md:my-5 md:leading-[55px]">Ci prendiamo cura della 
                            tua bellezza e del tuo benessere</h1>
                            <p className="font-Poppins text-brown-100 font-normal clamp-poppins-normal">Riscopri la tua bellezza con i nostri trattamenti personalizzati: prenota ora un appuntamento e affidati agli esperti di benessere e bellezza.</p>
                            <Button classes="md:mx-0" title="contattaci" url="/contatti" />
                        </div>

                        <div className="relative w-[50%] max-w-[245px] z-20 md:max-w-[30%] md:basis-[45%]">
                            <img className="relative" src="../../../assets/homepage/woman.png" alt={`${Alt} Immagine Donna`} />
                            {/* <img className=" w-[60%]  absolute left-[70%] top-[10%] -z-1"  src="../../../assets/homepage/plant.png"alt={`${Alt}Immagine pianta vicina alla donna`}/> */}
                        </div>

                    </div>
                </div>
                <div className="h-[45vh] mt-[-10%] bg-pink-200 relative md:mt-[-5%]"></div>
            </div>


            {/* TRATTAMENTI PERSONALIZZATI */}  

            <div className="container w-[95%] flex flex-col bg-pink-100 rounded-lg mt-[-20vh] relative z-20 lg-items-start">
                <div className="lg:w-[95%] lg:ml-auto">
                    <p className="subheading capitalize mt-6 mb-6 text-center text-brown-100 lg:text-left">trattamenti personalizzati</p>
                    <Decoration props="hidden mx-auto fit-content mb-6 md:block lg:w-[100%]" />
                </div>
                    <div className="flex flex-col items-center  gap-4 md:flex-row md:flex-wrap md:justify-center md:items-stretch">
                        { 
                            gallery.map((item, index) => <ItemGallery key={index} src={item.url} title={item.title} />)
                         }
                    </div>  
                    <Button title="scopri i nostri trattamenti" url="/servizi" />
                </div>

            <div className="container md:flex">
                <div className="container flex flex-col items-center lg:items-start">
                    <p className="poppins text-brown-100 letter-spacing-[-0.28px] mb-6 mt-6 clamp-poppins-normal">Più di <span className="text-pink-300 font-bold">10 anni</span> di esperienza</p>
                    <div> 
                        <p className="subheading text-brown-100 letter-spacing-[-0.64px] mb-6 mt-6">personale qualificato</p>
                        <Decoration props="hidden md:block fit-content mx-auto mb-6 lg:w-[100%]" />
                    </div>
                    <p className="poppins text-brown-100 leading-[140%] font-normal clamp-poppins-normal">Nel nostro centro estetico, il personale altamente qualificato è rappresentato da una professionista dedicata e competente. Con anni di esperienza e formazione specializzata, offre una gamma completa di trattamenti di bellezza e benessere personalizzati. Sempre aggiornata sulle ultime tecniche e tendenze, assicura risultati eccellenti e un'esperienza di cura unica per ogni cliente. La sua missione è far sentire ogni persona accolta e valorizzata, riflettendo una profonda passione per il benessere e la bellezza.</p>
                    <Button url="/chi-siamo" title="conosci lo staff" />
                </div>

               {/* STAFF */}
                <div className="container flex items-center justify-between mt-10 mb-10">
                    <div className="w-[40%] self-end">
                        <img src="../../../assets/homepage/staff/stone.png" alt={`${Alt}Immagine di pietre da massaggio in pila`} />
                    </div>

                        <div className="relative w-[60%] fit-content">
                            <div className="absolute left-[-10%] bottom-0 -z-1">
                                <img src="../../../assets/homepage/staff/arco_chiaro.png" alt={`${Alt} Immagine di una porta ad arco scura`} />
                            </div>
                            <div className="relative">
                                 <img src="../../../assets/homepage/staff/arco_scuro.png" alt={`${Alt} Immagine di una porta ad arco chiara`} />
                                 <img className="absolute bottom-0 left" src="../../../assets/homepage/staff/staff.png" alt={`${Alt} Immagine del personale lavorativo`} />
                            </div> 
                        </div>
                </div>

            </div>
 
            {/* MACCHINARI AD ALTA TECNOLOGIA */}


            <div className="bg-brown-100 text-white text-center pt-6 pb-6">
                    <div className="container flex flex-col items-center">
                        <div>
                            <p className="subheading capitalize pt-8 pb-8">macchinari ad alta tecnologia</p>
                            <Decoration props="hidden md:block fit-content mx-auto mb-6" />
                        </div>
                        <p className="poppins text-white leading-[140%] font-normal clamp-poppins-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="container bg-brown-100"> 
                        <SimpleSlider  images={trattamenti} props={{ slideToShow: "2", slideToScroll: "2"}} />
                        <Button url="/servizi" title="scopri di più" />
                    </div>
            </div>

            {/* SICUREZZA E IGIENE */}

            <div className="container mb-6 mt-6 relative">
                <div className="flex flex-col items-center">
                    <div>
                        <p className="subheading capitalize text-brown-100 tracking-[-0.64px] mb-6 mt-6">sicurezza e igiene</p>
                        <Decoration props="hidden md:block fit-content mx-auto mb-6" />
                    </div>
                    <p className="poppins text-brown-100 leading-[140%] clamp-poppins-normal md:w-[65%]">Il nostro centro estetico si impegna a mantenere i più alti standard di sicurezza e igiene. Ogni trattamento viene eseguito utilizzando strumenti sterilizzati e prodotti di alta qualità per garantire la massima protezione. Le superfici sono regolarmente disinfettate e l'ambiente è mantenuto pulito e sicuro. La salute e il benessere dei nostri clienti sono la nostra priorità assoluta.</p>
                    <Button url="/chi-siamo" title="scopri di più" />
                    <div>
                        <img src="../../assets/homepage/igiene_e_sicurezza/plant.png"
                         alt={Alt + "Immagine di una pianta"}
                        className="absolute right-0 bottom-0 hidden md:block md:max-w-[160px]"/>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
        </>
    )
}

export default HomePage
