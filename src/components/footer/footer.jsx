import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import LogoSmallScreen from "../navbar/logoSmallScreen";

function Footer() {
    return (
        <footer className="bg-pink-100 py-6">
            <div className="container flex justify-between items-center">
                <div className="w-[50%] md:w-[30%]">
                    <LogoSmallScreen />
                </div>
                <div className="w-[50%] md:w-[70%] flex gap-2 justify-end">
                    {/* DA METTERE GLI URL NELLE ICONE */}
                    <FaFacebook className="text-pink-300 hover:text-pink-400 duration-200 text-[24px] cursor-pointer" />
                    <FaInstagram className="text-pink-300 hover:text-pink-400 duration-200 text-[24px] cursor-pointer" />
                </div>
            </div>

        </footer>
    )
}

export default Footer
