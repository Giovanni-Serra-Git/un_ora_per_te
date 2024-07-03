import Decoration from "../../assets/decoration/decoration"
import Alt from "../alt/alt"
import Button from "../button/button"
import Sidenavbar from "../navbar/sidenavbar"


const certificati = [
    "Manicure gel e semipermanente",
    "Riflessologia plantare",
    "Operatore olistico",
    "Laminazione ciglia",
    "Corso Trattamento viso con fili di collagene all'Accademia VIP Estetica",
    "Corso completo in 3 livelli di Podocuria",
    "Corso di microneedling per viso e corpo all'Accademia VIP Estetica",
    "Corso di laser Esthelogue",
]






function About() {
    return (
        <>
            <div className="bg-pink-100">
                <div className="container">
                    <Sidenavbar />
                    <h1 className="heading-playfair my-10 md:my-5 md:leading-[55px] capitalize py-6">chi sono</h1>
                </div>
            </div>

            <div>

        <div className="container md:my-8 flex flex-col gap-4 md:flex-row md:justify-between md:gap-4">
            <div className="flex flex-col md:flex md:flex-col md:gap-4 md:items-center md:w-[50%] bg-[#ffccdb] text-brown-100 rounded-lg px-4">
                <h4 className="subheading text-brown-100 my-4">la mia esperienza</h4>
                <div className="flex flex-col gap-4">
                    <p className="poppins leading-[140%] font-700 clamp-poppins-normal">Diplomata al liceo scientifico nel 2007, ho deciso di intraprendere la carriera di estetista. Ho frequentato il triennio presso l'Accademia di Immagine a Genova, conseguendo il diploma di estetista qualificata. Questo mi ha aperto le porte nel mondo della bellezza e della cura per le persone.</p>
                    <p className="poppins leading-[140%] font-700 clamp-poppins-normal">Per i successivi dieci anni ho lavorato come estetista presso un centro estetico, permettendomi di formarmi e specializzarmi in varie tecniche di cura e attenzione al corpo dei miei clienti.</p>
                </div>
                <div>
                    <p className="poppins leading-[140%] font-700 clamp-poppins-normal">Fondamentale per me è la continua formazione e crescita personale, mirata a migliorare non solo le mie capacità ma anche ad ampliare la mia conoscenza personale, per rispondere meglio alle esigenze dei clienti.</p>
                    <p className="poppins leading-[140%] font-700 clamp-poppins-normal">Presso il mio centro estetico non offro solo una vasta esperienza, ma anche un ambiente pensato per farti sentire a tuo agio, in cui il relax e la cura personale sono le parole chiave del mio lavoro, svolto con passione.</p>
                    <p className="poppins leading-[140%] font-700 clamp-poppins-normal">Vieni a trovarmi!</p>
                </div>
                <Button url="/contatti" title="contatti" />
            </div>
            <div className="md:w-[50%] flex flex-col items-center justify-center">
                <div className="border-image px-4 rounded-lg">
                <img src="../../../assets/homepage/staff/staff.png" alt={`${Alt} Immagine del personale lavorativo`} />
                </div>
            </div>
        </div>

        <div>

        {/* Separatore Rosa */}

        <div className="h-[45vh] bg-pink-200"></div> 

        {/* Certificazioni */}

        <div className="container md:mb-8 mt-[-10%] relative">
            <img className="hidden absolute bottom-[10px] right-[40px] max-w-[100px] md:block " src="../../assets/servizi/icone_background/flower_plant.png" alt={Alt + "Immagine di una pietra sopra l'altra"} />
        <div className="flex flex-col gap-2 bg-pink-100 md:px-6 md:py-6 rounded-[50px]">
           <div className="md:flex md:flex-col md:items-center md:my-6">
            <div className="subheading text-brown-100 md:my-4">le mie certificazioni</div>
            <Decoration />
           </div>
                        <p className="poppins leading-[140%] font-700 clamp-poppins-normal text-brown-100">Spinta da una voglia di perfezionamento e apprendimento di diverse metodologie dell'estetica e la cura del corpo umano ho conseguito altri qualifiche in forma di attestati indipendenti, dei quali: </p>
                        <div className="flex flex-col gap-2">
                            {certificati.map((item,index) => {
                                return (
                                    <div key={index} className="flex gap-2">
                                         <img className="border-bottom-pink"  src="../../assets/servizi/icone_background/list_flower.png" alt={Alt + "Icona di un fiore vicino all'elenco lista certificati"} />
                                        <p className="poppins leading-[140%] font-700 clamp-poppins-normal font-bold text-brown-100">{item}</p>
                                    </div>
                                )
                            })}
                        </div>
        </div>
        </div>
        </div>




        </div>
        </>
    )
}

export default About
