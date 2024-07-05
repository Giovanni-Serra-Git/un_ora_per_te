import Alt from "../alt/alt"
import ContainerNavbar from "../containerNavbar/containerNavbar"
import Button from "../button/button"
import Footer from "../footer/footer"



function Error() {
    return (
        <div className="bg-pink-100">
            <ContainerNavbar />
            <div className="w-[70%] md:w-[80%] mx-auto flex flex-col gap-4 md:gap-6 items-center">
                <div className="md:w-[60%] md:mx-auto">
                    <img src="../../assets/error/error.png" alt={Alt + "Immagine 404 pagina non trovata"} />
                </div>
                <div>
                    <h1 className="heading-playfair uppercase">oooops !!</h1>
                </div>
                <div>
                    <p className="text-center titleServices text-brown-100 md:text-left leading-[40px]">la pagina che stai cercando non esiste, torna indietro</p>
                </div>
                <div>
                    <Button url="/" title="Homepage" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Error
