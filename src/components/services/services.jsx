import { Fragment } from "react";
import Footer from "../footer/footer"
import Sidenavbar from "../navbar/sidenavbar"

const alt = "Centro Estetico | Un ora per te "; 

const servizi = {

    viso: {
        title: "viso",
        subTitle: "trattamenti singoli o percorsi a seconda del tipo di inestetismo del viso",
        urlPicture: "../../assets/servizi/viso.png",
        pictureAltDescription: "Immagine trattamento viso donna",
        listServices: {
            viso: [
                {
                    title: "Pulizia viso",
                    description: "trattamento di pulizia completa con schiacciatura massaggio viso e maschera finale",
                    price: "€30",
                },
                {
                    title: "Trattamento specifico anti age",
                    description: "trattamento con prodotti appositi anti age per rinnovare le rughe",
                    price: "€40",
                },
                {
                    title: "Trattamento starvac",
                    description: "trattamento di stimolazione viso con macchinario starvac effetto ossigenante e anti age",
                    price: "€40",
                },
                {
                    title: "Trattamento VIP microneedling",
                    description: "trattamento con effetto immediato antiage con uso di penna microneedling e prodotti specifici e fili di collagene",
                    price: "€80",
                }
            ],
            ciglia: {
                title: "Ciglia e Sopracciglia",
                listServices: [
                    {
                        title: "Laminazione ciglia",
                        description: "Trattamento idratante alla cheratina che dona piega effetto mascara per la durata max di 8 settimane con tinta compresa",
                        price: "€40",
                    },
                    {
                        title: "Laminazione sopracciglia",
                        description: "Trattamento idratante alla cheratina per ciglia spettinate e indisciplinate della durata max di 8 settimane con tinta compresa",
                        price: "€40",
                    },
                    {
                        title: "Tinta sopracciglia",
                        description: "epilazione e tinta sopracciglia",
                        price: "€10"
                    }   
                ]
            }
        }
    },
    corpo: {
        title: "corpo",
        subTitle: "trattamenti di massaggio, percorsi con macchinari o manuali a 360 gradi a seconda del tipo di cellulite, della tonificazione o del drenaggio dei liquidi",
        urlPicture: "../../assets/servizi/corpo.png",
        pictureAltDescription: "Immagine di una donna che riceve un massaggio",
        listServices: [
            {
             title: "Massaggio corpo",
             description: "massaggio manuale stimolante, drenante decontratturante 30 minuti parziale gambe o schiena",
             duration: [
                {
                    description: "30 minuti parziale gambe o schiena",
                    price: "€20"
                },
                {
                    description: "60 minuti totale corpo",
                    price: "€40"
                }
             ] 
            },
            {
                title: "Pressomassaggio",
                description: "45 min di trattamento macchinario drenante con possibilità di infrarossi per stimolare la circolazione. Da subito gambe più leggere!",
                price: "€20",   
            },
            {
                title: "Bendaggio",
                description: "40 min di trattamento con bende specifiche adatte al tipo di inestetismo cellulite drenaggio o tonificazione",
                price: "€20",   
            },
            {
                title: "Lipolaser",
                description: "macchinario che aiuta a sciogliere le cellule adipose attraverso piastre riscaldanti adatto soprattutto a chi soffre di addome rilassato Durata di 40 min",
                price: "€20", 
            },
            {
                title: "",
                description: "",
                price: "€",   
            },
            {
                title: "",
                description: "",
                price: "€",   
            },
            {
                title: "",
                description: "",
                price: "€",   
            },
            {
                title: "",
                description: "",
                price: "€",   
            },
            {
                title: "",
                description: "",
                price: "€",   
            },
        ]
    }
}

const viso = servizi.viso;
const corpo = servizi.corpo;


function Services() {
    return (
        <>
        <div className="bg-pink-100">
            <div className="container">
                    <Sidenavbar />
                    <h1 className="heading-playfair my-10 md:my-5 md:leading-[55px] capitalize py-6">servizi</h1>
            </div>
        </div>

        <div className="container">
            <div>
                <h1>{viso.title}</h1>
                <p>{viso.subTitle}</p>
            </div>
            <div>
                <img src={viso.urlPicture} alt={alt + viso.pictureAltDescription} />
            </div>
            <div>
                {
                    viso.listServices.viso.map((item, index) => {
                        return (
                        <div key={index}>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </div>
                        )
                    })
                }
                    <p>{viso.listServices.ciglia.title}</p>
                {
                    viso.listServices.ciglia.listServices.map((item,index) => {
                        return (
                            <div key={index}>
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="bg-pink-150">
                <div className="container">
                    <div>
                        <h1>{corpo.title}</h1>
                        <p>{corpo.subTitle}</p>
                    </div>
                    <div>
                        <img src={viso.urlPicture} alt={alt + viso.pictureAltDescription} />
                    </div>
                    <div>
                        {
                            corpo.listServices.map((item,index) => {
                                return (
                                    <div key={index}>
                                        <p>{item.title}</p>
                                        <p>{item.description}</p>
                                        {item.duration ? 
                                        <div>
                                            {item.duration.map((durationItem,durationIndex) => {
                                                return (
                                                    <Fragment key={durationIndex}>
                                                        <p>{durationItem.description}</p>
                                                        <p>{durationItem.price}</p>
                                                    </Fragment>
                                                )
                                            })}
                                        </div> : <p>{item.price}</p>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <Footer />
       </>

    )
}

export default Services
