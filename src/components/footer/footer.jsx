import Logo from "../navbar/logo"

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-pink-100 py-6">
            <div className="container flex justify-between items-center">
                <Logo />
                <div className="flex gap-2">
                    {/* DA METTERE GLI URL NELLE ICONE */}
                    <FaFacebook className="text-pink-300 hover:text-pink-400 duration-200 text-[24px] cursor-pointer" />
                    <FaInstagram className="text-pink-300 hover:text-pink-400 duration-200 text-[24px] cursor-pointer" />
                </div>
            </div>

        </footer>
    )
}

export default Footer
