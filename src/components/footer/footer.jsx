import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-pink-100 py-6">
            <div className="container flex flex-col text-center items-center gap-4 md:text-left md:flex-row md:justify-between md:items-center md:gap-0">
                <div className="flex flex-col gap-1 md:gap-2">
                    {/* <LogoSmallScreen /> */}
                    <p className="poppins clamp-poppins-normal text-pink-300 font-bold">Estetica un'ora per te@ tutti i diritti riservati</p>
                    <p className="poppins clamp-poppins-normal text-pink-300 uppercase font-bold">p.iva 01681330088</p>
                    <NavLink to="/policy"><p className="poppins clamp-poppins-normal text-pink-300 uppercase font-bold">privacy policy</p></NavLink>

                </div>
                <div className="w-[50%] md:w-[60%] flex gap-2 justify-center gap-2 md:justify-end">
                    {/* DA METTERE GLI URL NELLE ICONE */}
                    <NavLink to="https://www.facebook.com/Unorapertesanremo?rdid=6K14CVcUHIwDIGUQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FZrbDpXS2NyRGLKTs%2F" target="_blank">
                        <FaFacebook className="text-pink-300 hover:text-pink-400 duration-200 text-[24px] cursor-pointer" />
                    </NavLink> 
                    {/* <FaInstagram className="text-pink-300 hover:text-pink-400 duration-200 text-[24px] cursor-pointer" /> */}
                </div>
            </div>

        </footer>
    )
}

export default Footer
