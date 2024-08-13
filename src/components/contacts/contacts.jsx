/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';

import Decoration from "../../assets/decoration/decoration"
import Alt from "../alt/alt"
import Footer from "../footer/footer"

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


// import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Title from "../containerNavbar/containerNavbar";
import ContainerNavbar from "../containerNavbar/containerNavbar";

let iconsContact = [
    {
        iconUrl: "../../assets/contatti/email.png",
        iconTitle: "email",
        iconDetails: "Mary.tav@gmail.com",
        iconAltDescription: "icona dell'email"
    },
    {
        iconUrl: "../../assets/contatti/phone.png",
        iconTitle: "cellulare",
        iconDetails: "+39 333 468 9022",
        iconAltDescription: "icona del cellulare"
    },
    {
        iconUrl: "../../assets/contatti/address.png",
        iconTitle: "indirizzo",
        iconDetails: "via Lamarmora 184",
        iconAltDescription: "icona dell' indirizzo"
    }
]

let orari = [
    {
        giorno: "Lunedì",
        orario: "9-18"
    },
    {
        giorno: "Mercoledì",
        orario: "9-18"
    },
    {
        giorno: "Venerdì",
        orario: "9-18"
    },
    {
        giorno: "Sabato",
        orario: "9-13"
    },
    {
        giorno: "Domenica",
        orario: "chiuso"
    },
]

function ContactsInfo() {


    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [message,setMessage] = useState(""); 
    
    const SERVICE_ID = "service_os2nylo";
    const TEMPLATE_ID = "template_oynrfec";
    const PUBLIC_KEY = "RE1i7nC3AZsuck2eG";
  
    const form = useRef();
  
    function sendEmail(e) {
        e.preventDefault();
        setName("")
        setLastName("")
        setEmail("")
        setConfirmEmail("")
        setMessage("")

        if (email != confirmEmail) {
            let emailToastify = "Le email non combaciano";
            toast.error(emailToastify, {
              position: "top-right"
            })
            return
        } else {
                    
    emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
      publicKey: PUBLIC_KEY,
    })
    .then(
      () => {
        console.log('SUCCESS!');
        toast.success("Messaggio Inviato !", {
            position: "top-right",
        });
      },
      (error) => {
        console.log('FAILED...', error.text);
        toast.error("Messaggio non inviato !", {
            position: "top-right",
        });
      },
    );
        }

    } 
  
    return (
          
        <form className="flex flex-col gap-[20px] items-center md:items-start" ref={form} onSubmit={(e) => sendEmail(e)}> 
          <div className="flex flex-col w-[90%] md:flex md:w-[80%] gap-[10px]">
            <input placeholder="nome" className="border-gray rounded-md py-2 bg-[#F1F1F1] text-center" type="text" name="user_name" required value={name} onChange={(e) => setName(e.target.value)}/>
            <input placeholder="cognome" className="border-gray rounded-md py-2 bg-[#F1F1F1] text-center" type="text" name="user_last_name" required value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className="flex flex-col w-[90%] md:flex md:w-[80%] gap-[10px]">
            <input placeholder="email" className="border-gray rounded-md py-2 bg-[#F1F1F1] text-center" type="email" name="user_email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="conferma email" className="border-gray rounded-md py-2 bg-[#F1F1F1] text-center" type="email" name="user_email" required value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)}/>
          </div>
          <div className="w-[100%] md:w-[90%] h-full h-[150px]">
            <textarea placeholder="scrivi un messaggio per maggiori info....." className="border-gray rounded-md py-2 px-2 bg-[#F1F1F1] w-[100%] h-[150px]" name="message" required value={message} onChange={(e) => setMessage(e.target.value)}/>
          </div>
          <input  type="submit" value="Invia" className="inline-block bg-pink-300 text-white capitalize rounded-full min-w-[180px] fit-content mx-auto py-2.5 px-3 my-8 cursor-pointer
                hover:bg-pink-400 transition duration-200 linear text-center"  />
        </form>
  
    )
  }

function Contacts() {
    return (
        <>

        <ContainerNavbar title="Contatti" />

        {/* Icone Contatti */}

        <div className="container md:flex md:justify-center md:gap-x-[1rem]">
            <div className="flex flex-col gap-y-[3rem] md:flex md:flex-row md:gap-x-[3rem] md:my-[6rem]">
                {
                    iconsContact.map((item,index) => {
                        return (
                            <div key={index} className="flex items-center gap-x-6 w-[80%] mx-auto md:w-full md:mx-0">
                                <div className="w-[25%] md:w-[20%]">
                                    <img src={item.iconUrl} alt={Alt + item.iconAltDescription} />
                                </div>
                                <div className="w-[75%] md:w-[80%] flex flex-col items-center md:block lg:block">
                                    <p className="text-left md:text-center clamp-poppins-normal text-pink-300 font-bold first-letter:uppercase">{item.iconTitle}</p>
                                    <p className={`text-left md:text-center clamp-poppins-normal font-bold
                                                  ${item.iconTitle == "indirizzo" ? "first-letter:uppercase" : ""}`}>{item.iconDetails}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="container">
            <h1 className="text-center heading-playfair my-10 md:text-left md:my-5 md:leading-[55px] capitalize py-6">Orari</h1>
            <div className="flex-col md:flex md:flex-row md:justify-between">
                { 
                    orari.map((item,index) => {
                        return (
                            <div key={index} className="my-[1.5rem] flex flex-col items-center md:my-[1rem]">
                                <p className="text-left md:text-center clamp-poppins-normal text-pink-300 font-bold first-letter:uppercase">{item.giorno}</p>
                            <p className="font-bold">{item.orario}</p>
                        </div>
                        )
                    })
                }
            </div>
        </div>

        {/* Contatto Email  */} 

        <div className="container py-4 my-[2rem] md:my-[6rem] flex flex-col md:flex md:flex-row md:items-center box-shadow-pink px-8">
            <div className="md:w-[60%]">
                <div className="my-[2rem] md:my-[4rem] flex flex-col gap-4 ">
                    <h1 className="subheading text-brown-100 text-center md:text-left">prenota un appuntamento per rilassarti</h1>
                    <Decoration />
                    <p className="poppins clamp-poppins-normal text-brown-100 leading-6 md:w-[80%]">Desideri un trattamento di bellezza personalizzato o vuoi maggiori informazioni?<br></br> Compila il form qui sotto con i tuoi dettagli e prenota un appuntamento presso il nostro centro estetico</p>
                </div>
                <div>
                    <ContactsInfo />
                    <ToastContainer autoClose="1500" />
                </div>
            </div>
            <div className="my-[2rem] w-[80%] md:w-[60%] h-[40vh] flex justify-center mx-auto">
                <img className="object-cover" src="../../../assets/homepage/staff/mariagrazia.jpg" alt={`${Alt} Immagine del personale lavorativo`} />
            </div>
        </div>


        <div className="bg-pink-100 mt-2 md:mt-6">
            <Footer />
        </div>
        </>
    )
}

export default Contacts
