/* eslint-disable react/prop-types */
import { Fragment } from "react";
import Footer from "../footer/footer"
import Sidenavbar from "../navbar/sidenavbar"
import Decoration from "../../assets/decoration/decoration";

import Alt from "../alt/alt"
import ContainerNavbar from "../containerNavbar/containerNavbar";
 

const servizi = {

    viso: {
        title: "viso",
        subTitle: "Trattamenti singoli o percorsi a seconda del tipo di inestetismo del viso",
        urlPicture: "../../assets/servizi/viso.jpg",
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
                },
                {
                    title: "Trattamento acido glicolico",
                    description: "Trattamento e macchie discromie con acido glicolico",
                    price: "€40",
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
             description: "massaggio manuale stimolante, drenante decontratturante",
             duration: [
                {
                    time: "30 minuti ",
                    description: "parziale gambe o schiena",
                    price: "€20"
                },
                {
                    time: "60 minuti ",
                    description: "totale corpo",
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
                title: "Manicure",
                description: "Manicure semplice con smalto normale",
                price: "€10",
            },
            {
                title: "Cambio smalto",
                description: "Limatura unghie e cambio smalto normale",
                price: "€5",
            },
            {
                title: "Manicure con semipermanente",
                description: "Manicure e applicazione semipermanente",
                price: "€20",
            },
            {
                title: "Manicure gel",
                description: " Manicure gel copertura unghia naturale",
                price: "€30",
            },
            {
                title: "Manicure gel",
                description: "Manicure gel con allungamento unghia",
                price: "€40",
            },
            {
                title: "Trattamento Manicure a paraffina",
                description: "Manicure semplice e trattamento per mani secche con bagno di paraffina idratante e nutriente",
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
                title: "Pedicure",
                description: "Pedicure classica con smalto normale",
                price: "€20"
            },
            {
                title: "Pedicure con semipermanente",
                description: "Pedicure classica con applicazione smalto semipermanente",
                price: "€25"
            },
            {
                title: "Cambio semipermanente",
                description: "Taglio e limatura unghie e cambio smalto semipermanente",
                price: "€20"
            }, 
            {
                title: "Pedicure con trattamento paraffina",
                description: "Pedicure classico con trattamento paraffina adatto a chi ha problemi di forte secchezza idratazione e nutrimento a lunga durata",
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

function ContainerBodyPart({ item }) {
    return (
        <div className="md:w-1/3 md:flex md:justify-center">
            <div className="md:w-[80%] mt-2 mb-2 flex flex-col gap-[10px] justify-between md:gap-y-2">
                <p className="itemServicesTitle">{item.title}</p>
                <div className="flex flex-col justify-between grow md:gap-y-2">
                    <p className="itemServicesDescription text-brown-100 first-letter:uppercase">{item.description}</p>
                    {
                        item.duration ? (
                            <div>
                                {item.duration.map((durationItem, durationIndex) => (
                                    <Fragment key={durationIndex}>
                                        <div className="flex gap-4 md:block">
                                            <p className="itemServicesDescription">
                                                <span className="itemServiceDuration clamp-price">{durationItem.time}</span>
                                                {durationItem.description}
                                            </p>
                                        <p className="itemServicesPrice clamp-price">{durationItem.price}</p>
                                        </div>
                                    </Fragment>
                                ))}
                            </div>
                        ) : (
                            <p className="itemServicesPrice clamp-price">{item.price}</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

function Epilazione({item}) {
    return (
        <div className="my-4 flex md:gap-4 items-center space-between md:my-6">
            <div className="w-[90%] md:w-[90%] flex items-center">
                <p className="clamp-poppins-epilazione">{item.description}</p>
            </div>
            <div className="w-[10%] md:w-[10%] flex justify-center md:self-end items-center">
                <p className="itemServicesPrice clamp-price md:block">{item.price}</p>
            </div>
        </div>
    )
}



function Services() {
    return (
        <>
        <ContainerNavbar title="Servizi" />

        <div className="container">
            <div className="flex flex-col items-center">
                <div >
                    <h1 className="titleServices">{viso.title}</h1>
                    <Decoration />
                </div>
                <p className="subTitleServices md:text-center">{viso.subTitle}</p>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="rounded-xl relative w-[90%] md:w-[80%] my-2 md:my-8">
                <img className="hidden md:block max-w-[100px] rotate-[90deg] absolute left-[-90px] top-0" src="../../assets/servizi/leaf.png" alt={Alt + "Immagine di una foglia"} />
                <img className="rounded-xl" src={viso.urlPicture} alt={Alt + viso.pictureAltDescription} />
            </div>
        </div>
        <div className="container">
        <div className="md:flex md:flex-wrap gap-y-8">
                {
                    viso.listServices.viso.map((item, index) => {
                        return (
                            <ContainerBodyPart key={index} item={item}  />
                        )
                    })
                }
        </div>
            <div className="my-[0.5rem] md:my-[4rem]">
                <p className="subheading text-center my-[2rem] md:my-[4rem]">{viso.listServices.ciglia.title}</p>

                <div className="md:flex md:flex-wrap">

                {
                    viso.listServices.ciglia.listServices.map((item,index) => {
                        return (
                            <ContainerBodyPart key={index} item={item} />
                            // <div key={index} className="md:w-1/3 md:flex md:justify-center">
                            //    <div className="md:w-[80%] mt-2 mb-2 flex flex-col justify-between md:gap-y-2">
                            //         <p className="itemServicesTitle">{item.title}</p>
                            //         <div className="flex flex-col justify-between grow md:gap-y-2">
                            //             <p className="itemServicesDescription text-brown-100">{item.description}</p>
                            //             <p className="itemServicesPrice clamp-price">{item.price}</p>
                            //         </div>
                            //    </div>
                            // </div>
                        )
                    })
                }
                </div>
            </div>    
        </div>


        <div className="bg-pink-150 relative my-[2rem] md:my-[4rem] py-4 my-2 md:my-8">
                <img className="hidden md:block absolute bottom-0 right-0 max-w-[200px]" src="../../assets/servizi/icone_background/body_on_towel.png" alt={Alt + "Icon di una donna su un asciugamano"} />
                <div className="container">
                    <div className="flex flex-col items-center">
                        <h1 className="titleServices py-0 my-0">{corpo.title}</h1>
                        <Decoration props="my-4 hidden md:block" />
                        <p className="subTitleServices md:text-center">{corpo.subTitle}</p>
                    </div>
                    <div className="flex justify-center rounded-xl my-2 md:my-8">
                        <img className="rounded-xl" src={corpo.urlPicture} alt={Alt + corpo.pictureAltDescription} />
                    </div>
                    <div className="md:flex md:flex-wrap gap-y-8">
                        {
                            corpo.listServices.map((item,index) => {
                                return (
                                    <ContainerBodyPart key={index} item={item} />
                                    // <div key={index} className="md:w-1/3 md:flex md:justify-center">
                                    //     <div className="md:w-[80%] mt-2 mb-2 flex flex-col justify-between" >
                                    //         <p className="itemServicesTitle">{item.title}</p>
                                    //         <div className="flex flex-col justify-between grow">
                                    //         <p className="itemServicesDescription">{item.description}</p>
                                    //         {
                                    //             item.duration ? 
                                    //             <div>
                                    //                 {item.duration.map((durationItem,durationIndex) => {
                                    //                 return (
                                    //                     <Fragment key={durationIndex}>
                                    //                         <p className="itemServicesDescription"><span className="itemServiceDuration clamp-price">{durationItem.time}</span>{durationItem.description}</p>
                                    //                         <p className="itemServicesPrice clamp-price">{durationItem.price}</p>
                                    //                     </Fragment>
                                    //                 )
                                    //         })}
                                    //             </div> : <p className="itemServicesPrice clamp-price">{item.price}</p>
                                    //         }
                                    //         </div>
                                    //     </div>

                                    // </div>
                                )
                            })
                        }
                    </div>
                </div>
        </div>

        <div className="container">
                <div className="flex flex-col items-center">
                    <p className="titleServices py-0 my-0">{epilazione.title}</p>
                    <Decoration props="my-4 hidden md:block" />
                    <p className="subTitleServices md:text-center">{epilazione.subTitle}</p>
                </div>
        </div>

         <div className="flex justify-center rounded-xl relative z-20 my-2 md:my-8">
            <img className="hidden md:block max-w-[200px] absolute top-[50%] translate-y-[-50%] left-[-10px] -z-1" src="../../assets/servizi/icone_background/flowers.png" alt={Alt + "Icona di rose messe insieme"} />
            <img className="w-[80%] md-[90%] rounded-xl" src={epilazione.urlPicture} alt={Alt} />
        </div>


        <div className="container box-shadow-pink bg-[#ffe5ec] my-[2rem] md:my-[3rem]">
             <div className="w-[90%] mx-auto md:flex md:justify-between md:w-[90%]">
        
                {/* Colonna Donna */}
                <div className="w-full md:w-[45%] md:flex md:flex-col">
                    <p className="titleServices text-center md:text-left">donna</p>
                    <div className="py-2">
                        {epilazione.gender.donna.map((item, index) => (
                            <Epilazione key={index} item={item} />
                            // <div key={index} className="my-4 flex md:gap-4 items-center md:my-6">
                            //     <p className="w-[90%] md:w-[90%] flex items-center clamp-poppins-epilazione">{item.description}</p>
                            //     <p className="w-[10%] md:w-[10%] flex justify-center md:self-end items-center itemServicesPrice clamp-price md:block">{item.price}</p>
                            // </div>
                        ))}
                    </div>
                </div> 
        
                {/* Colonna Uomo */}
                <div className="w-full md:w-[45%] md:flex md:flex-col"> 
                    <p className="titleServices text-center md:text-left">uomo</p>
                    <div className="py-2">
                        {epilazione.gender.uomo.map((item, index) => (
                        <Epilazione key={index} item={item} />

                        // <div key={index} className="my-4 flex md:gap-8 items-center md:my-6">
                        //     <p className="w-[90%] md:w-[100%] flex items-center clamp-poppins-epilazione">{item.description}</p>
                        //     <p className="w-[10%] md:w-[100%] flex justify-center md:self-end items-center itemServicesPrice clamp-price md:block">{item.price}</p>
                        // </div>
                        ))}
                    </div>
                </div>
        
            </div>
        </div>



        <div className="bg-pink-100">

            <div className="container">
                <div className="flex flex-col items-center">
                    <p className="titleServices py-0 md:text-center">{laser.title}</p>
                    <Decoration props="my-4" />
                    <p className="subTitleServices my-2 md:text-center">{laser.subTitle}</p>
                    <p className="subTitleServices my-2 md:text-center">{laser.offer}</p>
                </div>
            </div>

            <div className="flex justify-center rounded-xl my-2 md:my-8">
                <img className="w-[80%] md:w-[90%] rounded-xl" src={laser.urlPicture} alt={Alt + laser.pictureAltDescription} />
            </div>

            <div className="container">
                <div className="flex flex-col md:flex-row flex-wrap">
                    {laser.listServices.map((item,index) => {
                        return (
                            <div key={index} className="my-4 flex gap-8 md:items-center md:justify-center md:my-6 md:w-[33%]">
                                <p className="itemServicesTitle w-[70%] md:w-[70%] flex items-center">{item.description}</p>
                                <p className="itemServicesPrice clamp-price w-[20%] md:w-[30%] flex justify-center items-center itemServicesPrice clamp-price md:block">{item.price}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>

        <div className="bg-pink-150 relative ">
             <img className="hidden md:block absolute hidden max-w-[100px] md:block bottom-0 right-0" src="../../assets/servizi/icone_background/flower_plant.png" alt={Alt + "Icona di una pianta grassa"} />
            <div className="container">
                <div className="flex flex-col items-center">
                    <p className="titleServices">{mani.title}</p>
                    <Decoration props="my-4 hidden md:block" />
                    {/* <p>{mani.subTitle}</p> */}
                </div>
                <div className="flex justify-center rounded-xl my-2 md:my-8">
                    <img className="rounded-xl" src={mani.urlPicture} alt={mani.pictureAltDescription} />
                </div>
                <div className="flex flex-col md:flex-row flex-wrap gap-[10px] justify-between">
                    {mani.listServices.map((item,index) => {
                        return (
                            <div key={index} className="flex flex-col md:my-6 md:w-[33%] md-justify-between">
                                <p className="itemServicesTitle md:w-full flex items-center md:flex-col md:grow md:items-start md:justify-center">{item.title}</p>
                                <p className="itemServicesDescription w-[70%] first-letter:uppercase md:w-full flex items-center md:flex-col md:grow md:items-start md:justify-center">{item.description}</p>
                                <p className="itemServicesPrice clamp-price w-[20%] md:w-full flex md:flex-col md:grow md:items-start md:justify-center">{item.price}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div> 

        <div className="relative">

        <img className="hidden md:block absolute hidden max-w-[100px] md:block bottom-0 right-0" src="../../assets/servizi/icone_background/plant_and_towel.png" alt={Alt + "Icona di una pianta grassa"} />
        
        <div className="container">

            <div className="flex flex-col items-center">
                <p className="titleServices py-0 text-center">{piedi.title}</p>
                <Decoration props="my-4 hidden md:block" />
            </div>
            <div className="flex justify-center rounded-xl my-2 md:my-8">
                <img className="rounded-xl" src={piedi.urlPicture} alt={Alt + piedi.pictureAltDescription} />
            </div>
            <div className="flex flex-col md:flex-row flex-wrap gap-[10px] justify-between">
                    {piedi.listServices.map((item,index) => {
                        return (
                            <div key={index} className="flex flex-col md:my-6 md:w-[33%] md-justify-between">
                                <p className="itemServicesTitle md:w-full flex items-center md:flex-col md:grow md:items-start md:justify-center">{item.title}</p>
                                <p className="itemServicesDescription w-[70%] first-letter:uppercase md:w-full flex items-center md:flex-col md:grow md:items-start md:justify-center">{item.description}</p>
                                <p className="itemServicesPrice clamp-price w-[20%] md:w-full flex md:flex-col md:grow md:items-start md:justify-center">{item.price}</p>
                            </div>
                        )
                    })}
            </div>
        </div>

        </div>


            <Footer />
       </>

    )
}

export default Services
