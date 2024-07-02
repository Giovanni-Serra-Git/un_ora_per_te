import { Fragment } from "react";
import Footer from "../footer/footer"
import Sidenavbar from "../navbar/sidenavbar"
import Decoration from "../../assets/decoration/decoration";

const alt = "Estetica un'ora per te | "; 

const servizi = {

    viso: {
        title: "viso",
        subTitle: "Trattamenti singoli o percorsi a seconda del tipo di inestetismo del viso",
        urlPicture: "../../assets/servizi/viso.png",
        pictureAltDescription: "Immagine trattamento viso donna",
        listServices: {
            viso: [
                {
                    title: "Pulizia viso",
                    description: "Trattamento di pulizia completa con schiacciatura massaggio viso e maschera finale",
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
                        description: "Epilazione e tinta sopracciglia",
                        price: "€10"
                    }   
                ]
            }
        }
    },
    corpo: {
        title: "corpo",
        subTitle: "Trattamenti di massaggio, percorsi con macchinari o manuali a 360 gradi a seconda del tipo di cellulite, della tonificazione o del drenaggio dei liquidi",
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
                title: "Starvac",
                description: "trattamento intensivo anticellulite basato su macchinario che con sistema vacuum fa un massaggio connettivale a livello profondo con durata di 45 min trattando tutto il corpo",
                price: "€40",   
            },
            {
                title: "Massaggio pietre calde",
                description: "massaggio rilassante su tutto il corpo effettuato con pietre calde",
                price: "€40",   
            },
            {
                title: "Scrub corpo",
                description: "esfoliazione corpo con doccia per rinnovare la pelle e portarla a nuova vita",
                price: "€30",   
            },
            {
                title: "Massaggio bamboo",
                description: "massaggio gambe specifico anticellulite effettuato attraverso legnetti di bamboo",
                price: "€30",   
            }
        ],
        epilazione: {
            title: "Epilazione",
            subTitle: "Sedute di epilazione con ceretta",
            urlPicture: "../../assets/servizi/epilazione.jpg",
            pictureAltDescription: "Immagine di una procedura di epilazione",
            gender: {
                donna: [
                    {
                        description: "Gamba (compresa inguine parziale)",
                        price: "€25"
                    },
                    {
                        description: "1/2 gamba",
                        price: "€10"
                    },
                    {
                        description: "Inguine parziale",
                        price: "€5"
                    },
                    {
                        description: "Inguine totale",
                        price: "€10"
                    },
                    {
                        description: "Ascelle",
                        price: "€5"
                    },
                    {
                        description: "Sopracciglia",
                        price: "€5"
                    },
                    {
                        description: "Labiale",
                        price: "€5"
                    },

                ],
                uomo: [
                    {
                        description: "Addome",
                        price: "€25"
                    },
                    {
                        description: "Schiena",
                        price: "€20"
                    },
                ]
            }
        },
        laser: {
            title: "Laser",
            subTitle: "Macchinario di ultima generazione esthelogue trattamento di epilazione definitiva in più sedute per essere sempre liscia",
            urlPicture: "../../assets/servizi/laser.jpg",
            pictureAltDescription: "Immagine di macchinario laser che sta effettuando trattamento specifico per rimozione peli",
            offer: "Possibilita di Pacchetti su più sedute e per più parti del corpo !!",
            listServices: [
                {
                    description: "Gamba",
                    price: "€90"
                },
                {
                    description: "Ascella",
                    price: "€30"
                },
                {
                    description: "Inguine parziale",
                    price: "€30"
                },
                {
                    description: "Inguine totale",
                    price: "€40"
                },
                {
                    description: "Labiale",
                    price: "€20"
                },
                {
                    description: "Mento",
                    price: "€20"
                },
                {
                    description: "Braccia",
                    price: "€40"
                },
                {
                    description: "Schiena",
                    price: "€40"
                },
                {
                    description: "Addome",
                    price: "€40"
                },
            ]
        }
    },
    mani: {
        title: "Mani",
        urlPicture: "../../assets/servizi/mani.jpg",
        pictureAltDescription: "Immagine trattamento mani donna",
        listServices: [
            {
                description: "Manicure semplice con smalto normale",
                price: "€10",
            },
            {
                description: "Cambio smalto - limatura unghie e cambio smalto normale",
                price: "€5",
            },
            {
                description: "Manicure con semipermanente - Manicure e applicazione semipermanente",
                price: "€20",
            },
            {
                description: "Manicure gel copertura unghia naturale",
                price: "€30",
            },
            {
                description: "Manicure gel con allungamento unghia",
                price: "€40",
            },
            {
                description: "Trattamento Manicure a paraffina - Manicure semplice e trattamento per mani secche con bagno di paraffina idratante e nutriente",
                price: "€20",
            },
        ]
    },
    piedi: {
        title: "Piedi",
        urlPicture: "../../assets/servizi/piedi.jpg",
        pictureAltDescription: "Immagine di pedicure",
        listServices: [
            {
                description: "Pedicure - Pedicure classica con smalto normale",
                price: "€20"
            },
            {
                description: "Pedicure con semipermanente - Pedicure classica con applicazione smalto semipermanente",
                price: "€25"
            },
            {
                description: "Cambio semipermanente - Taglio e limatura unghie e cambio smalto semipermanente",
                price: "€20"
            }, 
            {
                description: "Pedicure con trattamento paraffina - Pedicure classico con trattamento paraffina adatto a chi ha problemi di forte secchezza idratazione e nutrimento a lunga durata",
                price: "€30"
            },
        ]
    }
}

const viso = servizi.viso;
const corpo = servizi.corpo;
const epilazione = servizi.corpo.epilazione;
const laser = servizi.corpo.laser;
const mani = servizi.mani;
const piedi = servizi.piedi;

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
                <div>
                    <h1 className="titleServices">{viso.title}</h1>
                    <Decoration props="my-6" />
                </div>
                <p className="subTitleServices">{viso.subTitle}</p>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="rounded-xl relative w-[90%] md:w-[80%]">
                <img className="hidden md:block max-w-[100px] rotate-[90deg] absolute left-[-90px] top-0" src="../../assets/servizi/leaf.png" alt={alt + "Immagine di una foglia"} />
                <img className="rounded-xl" src={viso.urlPicture} alt={alt + viso.pictureAltDescription} />
            </div>
        </div>
        <div className="container">
        <div className="md:flex md:flex-wrap">
                {
                    viso.listServices.viso.map((item, index) => {
                        return (
                        <div key={index} className="md:w-1/3 md:flex md:justify-center">
                            <div className="md:w-[80%] mt-2 mb-2 flex flex-col justify-between">
                                <p className="itemServicesTitle">{item.title}</p>
                                <div className="flex flex-col justify-between grow">
                                    <p className="itemServicesDescription text-brown-100">{item.description}</p>
                                    <p className="itemServicesPrice clamp-price">{item.price}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
            <p className="subheading my-4">{viso.listServices.ciglia.title}</p>
            <div className="md:flex md:flex-wrap">

                {
                    viso.listServices.ciglia.listServices.map((item,index) => {
                        return (
                            <div key={index} className="md:w-1/3 md:flex md:justify-center">
                               <div className="md:w-[80%] mt-2 mb-2 flex flex-col justify-between">
                                    <p className="itemServicesTitle">{item.title}</p>
                                    <div className="flex flex-col justify-between grow">
                                        <p className="itemServicesDescription text-brown-100">{item.description}</p>
                                        <p className="itemServicesPrice clamp-price">{item.price}</p>
                                    </div>
                               </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>


        <div className="bg-pink-150">
                <div className="container">
                    <div>
                        <h1 className="titleServices">{corpo.title}</h1>
                        <Decoration props="my-6" />
                        <p className="subTitleServices">{corpo.subTitle}</p>
                    </div>
                    <div>
                        <img src={corpo.urlPicture} alt={alt + corpo.pictureAltDescription} />
                    </div>
                    <div className="md:flex md:flex-wrap">
                        {
                            corpo.listServices.map((item,index) => {
                                return (
                                    <div key={index} className="md:w-1/3 md:flex md:justify-center">
                                        <div className="md:w-[80%] mt-2 mb-2 flex flex-col justify-between" >
                                            <p className="itemServicesTitle">{item.title}</p>
                                            <div className="flex flex-col justify-between grow">
                                            <p className="itemServicesDescription">{item.description}</p>
                                            {
                                                item.duration ? 
                                                <div>
                                                    {item.duration.map((durationItem,durationIndex) => {
                                                    return (
                                                        <Fragment key={durationIndex}>
                                                            <p className="itemServicesDescription">{durationItem.description}</p>
                                                            <p className="itemServicesPrice clamp-price">{durationItem.price}</p>
                                                        </Fragment>
                                                    )
                                            })}
                                                </div> : <p className="itemServicesPrice clamp-price">{item.price}</p>
                                            }
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
        </div>

        <div className="container">
                <div>
                    <p className="titleServices">{epilazione.title}</p>
                    <Decoration props="my-6" />
                    <p className="subTitleServices">{epilazione.subTitle}</p>
                </div>
        </div>

         <div className="flex justify-center rounded-xl">
            <img className="w-[80%] md-[90%] rounded-xl" src={epilazione.urlPicture} alt={alt} />
        </div>

    <div className="container flex justify-center">
        <div className="md:flex md:w-[90%]">

        <div className="md:w-[50%]">
        <p className="titleServices">donna</p>
        <Decoration props="my-6" />
        <div>
            {epilazione.gender.donna.map((item,index) => {
                return (
                    <div key={index} className="flex gap-8 md:block">
                        <p className="w-[40%] md:w-[100%] flex items-center itemServicesTitle">{item.description}</p>
                        <p className="w-[60%] md:w-[100%] flex justify-center items-center itemServicesPrice clamp-price">{item.price}</p>
                    </div>
            )
             })}
            <p></p>
        </div>
            </div>
            <div className="md:w-[50%] md:flex md:flex-col md:items-end">
                <div>
                    <p className="titleServices md:text-right">uomo</p>
                    <Decoration props="my-6 md:fit-content" />
                </div>

            <div>
            {epilazione.gender.uomo.map((item,index) => {
                return (
                    <div key={index} className="flex md:block">
                        <p className="itemServicesTitle grow-1">{item.description}</p>
                        <p className="itemServicesPrice clamp-price grow-2">{item.price}</p>
                    </div>
                )
            })}
        </div>
        </div>

        </div>
    </div>

        <div className="container">
            <div>
                <p className="titleServices">{laser.title}</p>
                <p className="subTitleServices">{laser.subTitle}</p>
                <p className="subTitleServices">{laser.offer}</p>
            </div>
            <div>
                <img src={laser.urlPicture} alt={alt + laser.pictureAltDescription} />
            </div>
            <div>
                {laser.listServices.map((item,index) => {
                    return (
                        <div key={index}>
                            <p className="itemServicesTitle">{item.description}</p>
                            <p className="itemServicesPrice clamp-price">{item.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>

        <div className="bg-pink-150">
            <div className="container">
                <div>
                    <p className="titleServices">{mani.title}</p>
                    <Decoration props="my-6" />
                    {/* <p>{mani.subTitle}</p> */}
                </div>
                <div>
                    <img src={mani.urlPicture} alt={mani.pictureAltDescription} />
                </div>
                <div>
                    {mani.listServices.map((item,index) => {
                        return (
                            <div key={index}>
                                <p className="itemServicesTitle">{item.description}</p>
                                <p className="itemServicesPrice clamp-price">{item.price}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

        <div className="container">
            <div>
                <p className="titleServices">{piedi.title}</p>
                <Decoration props="my-6" />
            </div>
            <div>
                <img src={piedi.urlPicture} alt={alt + piedi.pictureAltDescription} />
            </div>
            <div>
                {piedi.listServices.map((item,index) => {
                    return (
                        <div key={index}>
                            <p className="itemServicesTitle">{item.description}</p>
                            <p className="itemServicesPrice clamp-price">{item.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>

            <Footer />
       </>

    )
}

export default Services
