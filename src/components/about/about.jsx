/* eslint-disable react/prop-types */
import Decoration from "../../assets/decoration/decoration"
import Alt from "../alt/alt"
import Button from "../button/button"
import Sidenavbar from "../navbar/sidenavbar"
import Footer from "../footer/footer"



function Wave({props}) {
    return (
        <>
            <svg className={props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFB3C6" fillOpacity="1" d="M0,160L120,154.7C240,149,480,139,720,117.3C960,96,1200,64,1320,48L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </>
    )
}

function Star() {
    return (
        <div className="flex items-start">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF5A89"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.12 9.88005C21.0781 9.74719 20.9996 9.62884 20.8935 9.53862C20.7873 9.4484 20.6579 9.38997 20.52 9.37005L15.1 8.58005L12.67 3.67005C12.6008 3.55403 12.5027 3.45795 12.3853 3.39123C12.2678 3.32451 12.1351 3.28943 12 3.28943C11.8649 3.28943 11.7322 3.32451 11.6147 3.39123C11.4973 3.45795 11.3991 3.55403 11.33 3.67005L8.89999 8.58005L3.47999 9.37005C3.34211 9.38997 3.21266 9.4484 3.10652 9.53862C3.00038 9.62884 2.92186 9.74719 2.87999 9.88005C2.83529 10.0124 2.82846 10.1547 2.86027 10.2907C2.89207 10.4268 2.96124 10.5512 3.05999 10.6501L6.99999 14.4701L6.06999 19.8701C6.04642 20.0091 6.06199 20.1519 6.11497 20.2826C6.16796 20.4133 6.25625 20.5267 6.36999 20.6101C6.48391 20.6912 6.61825 20.7389 6.75785 20.7478C6.89746 20.7566 7.03675 20.7262 7.15999 20.6601L12 18.1101L16.85 20.6601C16.9573 20.7189 17.0776 20.7499 17.2 20.7501C17.3573 20.7482 17.5105 20.6995 17.64 20.6101C17.7537 20.5267 17.842 20.4133 17.895 20.2826C17.948 20.1519 17.9636 20.0091 17.94 19.8701L17 14.4701L20.93 10.6501C21.0305 10.5523 21.1015 10.4283 21.1351 10.2922C21.1687 10.1561 21.1634 10.0133 21.12 9.88005Z" fill="#FF5A89"></path> </g></svg>
        </div>
    )
}


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

const valori = [
    {
      title: "Professionalità e Qualità",
      description: "Offrire trattamenti eseguiti da personale qualificato con prodotti e attrezzature di alta qualità."
    },
    {
      title: "Igiene e Sicurezza",
      description: "Mantenere rigorosi standard di pulizia e sanificazione per garantire la sicurezza dei clienti."
    },
    {
      title: "Accoglienza e Comfort",
      description: "Creare un ambiente confortevole e accogliente per far sentire i clienti a proprio agio."
    },
    {
      title: "Innovazione e Aggiornamento",
      description: "Adottare le ultime tecnologie e tendenze nel campo estetico e investire nella formazione continua del personale."
    },
    {
      title: "Personalizzazione e Cura del Cliente",
      description: "Offrire trattamenti su misura basati sulle esigenze individuali dei clienti, con un eccellente servizio clienti."
    },
    {
      title: "Efficacia dei Trattamenti",
      description: "Garantire risultati visibili e duraturi attraverso trattamenti efficaci."
    },
    {
      title: "Riservatezza e Discrezione",
      description: "Rispettare la privacy dei clienti e mantenere la discrezione."
    },
    {
      title: "Accuratezza e Precisione",
      description: "Eseguire trattamenti con attenzione ai dettagli per assicurare risultati impeccabili."
    },
    {
      title: "Benessere Generale",
      description: "Promuovere uno stato di benessere generale, oltre alla bellezza esteriore."
    },
    {
      title: "Trasparenza e Fiducia",
      description: "Fornire informazioni chiare sui trattamenti, sui costi e sui benefici attesi, instaurando un rapporto di fiducia con i clienti."
    }
  ];
  






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
                    <p className="poppins leading-[140%] font-700 clamp-poppins-normal">Diplomata al liceo scientifico nel 2007, ho deciso di intraprendere la carriera di estetista. Ho frequentato il triennio presso l'Accademia di Immagine a Sanremo, conseguendo il diploma di estetista qualificata. Questo mi ha aperto le porte nel mondo della bellezza e della cura per le persone.</p>
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

        <div className="h-[25vh] mt-8  bg-pink-200 md:h-[45vh]"></div> 

        {/* Certificazioni */}

        <div className="container mt-[-10%] md:mb-8 md:mt-[-5%] relative">
            <img className="hidden absolute bottom-[10px] right-[40px] max-w-[100px] md:block " src="../../assets/servizi/icone_background/flower_plant.png" alt={Alt + "Immagine di una pietra sopra l'altra"} />
        <div className="flex flex-col gap-2 bg-pink-100 rounded-[25px]  md:px-6 md:py-6 md:rounded-[50px] border-bottom">
           <div className="py-4 flex flex-col items-center gap-4 md:my-6">
            <div className="subheading text-brown-100 md:my-4">le mie certificazioni</div>
            <Decoration />
           </div>
                        <p className="mx-auto w-[90%] mb-4 poppins leading-[140%] font-700 clamp-poppins-normal text-brown-100 md:ml-0 md:w-full">Spinta dal pronfondo desiderio di perfezionamento e apprendimento di diverse metodologie dell'estetica e la cura del corpo umano, ho conseguito altri qualifiche in forma di attestati indipendenti, dei quali: </p>
                        <div className="flex flex-col justify-center gap-2 py-6">
                            {certificati.map((item,index) => {
                                return (
                                    <div key={index} className="flex items-center px-2 gap-2">
                                         <img   src="../../assets/servizi/icone_background/list_flower.png" alt={Alt + "Icona di un fiore vicino all'elenco lista certificati"} />
                                        <p className="poppins leading-[140%] font-700 clamp-poppins-normal font-bold text-brown-100">{item}</p>
                                    </div>
                                )
                            })}
                        </div>
                </div>
        </div>
            <Wave props="mt-[-15%] md:mt-[-10%]" />
        </div>

        
        {/* <div className="container py-6 md:mb-8 md:mt-[-5%] relative my-8">
        <div className="flex flex-col gap-2 bg-pink-100 rounded-[25px]  md:px-6 md:py-6 md:rounded-[50px] border-bottom">
           <div className="py-4 flex flex-col items-center gap-4 md:my-6">
                <div className="subheading text-brown-100 md:my-4">i miei valori</div>
                <p className="w-[90%] playfair text-brown-100 playfair-clamp-md md:w-[80%] leading-8">Avere dei valori fondamentali nel nostro centro estetico significa offrirti sempre il massimo della qualità e dell'attenzione. Ci impegniamo a creare un'esperienza unica e personalizzata, dove tu possa sentirti rilassato e coccolato. La tua sicurezza e soddisfazione sono al centro di tutto ciò che facciamo, perché vogliamo che ogni visita sia un momento speciale per te</p>
                <Decoration />
           </div>

                        <div className="flex flex-wrap justify-between gap-4 py-6">
                            {valori.map((item,index) => {
                                return (
                                    <div key={index} className="flex items-center px-2 gap-x-8 md:w-[45%]">
                                        <Star />
                                        <div className="flex flex-col items-start gap-4">
                                             <p className="playfair clamp-playfair-md font-bold">{item.title}</p>
                                             <p className="poppins leading-[140%] font-700 clamp-poppins-normal font-700 text-brown-100">{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                </div>
        </div> */}

        <div className="bg-pink-150">

            <div className="flex flex-col gap-2 bg-pink-100">
                <div className="py-4 flex flex-col items-center gap-4 md:my-6">
                    <div className="subheading text-brown-100 md:my-4">i miei valori</div>
                    <Decoration /> 
                    <p className="w-[80%] playfair text-brown-100 playfair-clamp-md md:w-[80%] leading-8">Avere dei valori fondamentali nel nostro centro estetico significa offrirti sempre il massimo della qualità e dell'attenzione. Ci impegniamo a creare un'esperienza unica e personalizzata, dove tu possa sentirti rilassato e coccolato. La tua sicurezza e soddisfazione sono al centro di tutto ciò che facciamo, perché vogliamo che ogni visita sia un momento speciale per te</p>
                </div>

                <div className="hidden md:flex md:justify-between">
                    <div className="max-w-[200px]">
                        <img src="../../assets/servizi/icone_background/rose_left.png" alt={Alt + "Image of a rose"} />
                    </div>
                    <div className="max-w-[200px]">
                        <img src="../../assets/servizi/icone_background/rose_right.png" alt={Alt + "Image of a rose"} />
                    </div>
            </div>

            </div>

        </div>

        <div className="container bg-pink-150 relative my-8 rounded-[25px] md:px-6 md:rounded-[50px] border-bottom">
           <div className="flex flex-wrap justify-between gap-4 py-6">
                            {valori.map((item,index) => {
                                return (
                                    <div key={index} className="flex items-center px-2 gap-x-8 md:w-[45%]">
                                        <Star />
                                        <div className="flex flex-col items-start gap-4">
                                             <p className="playfair clamp-playfair-md font-bold">{item.title}</p>
                                             <p className="poppins leading-[140%] font-700 clamp-poppins-normal font-700 text-brown-100">{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
            </div>
           </div>



        <Footer />

        </div>
        </>
    )
}

export default About
