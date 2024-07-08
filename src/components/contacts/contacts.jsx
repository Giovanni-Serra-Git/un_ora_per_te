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
        iconDetails: "email@gmail.com",
        iconAltDescription: "icona dell'email"
    },
    {
        iconUrl: "../../assets/contatti/phone.png",
        iconTitle: "cellulare",
        iconDetails: "+39 333 333 333",
        iconAltDescription: "icona del cellulare"
    },
    {
        iconUrl: "../../assets/contatti/address.png",
        iconTitle: "indirizzo",
        iconDetails: "via Lamarmora 184",
        iconAltDescription: "icona dell' indirizzo"
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

        <div className="container my-[1rem] md:my-[4rem]">
            <div className="block w-[50%] gap-y-8 mx-auto md:flex md:flex-row md:w-[90%] md:justify-center md:items-center md:gap-[3.125rem]">
                {
                    iconsContact.map((item,index) => {
                        return (
                            <div key={index} className="my-8 flex items-center gap-x-4 md:my-0 gap-0">
                                <div className="max-w-[60px]">
                                    <img src={item.iconUrl} alt={Alt + item.iconAltDescription} />
                                </div>
                                <div>
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
            <div className="my-[2rem] w-[60vw] h-[40vh] bg-[#f1f1f1] mx-auto">foto qui</div>
        </div>


        <div className="bg-pink-100 mt-2 md:mt-6">
            <Footer />
        </div>
        </>
    )
}

export default Contacts
