import { FaLocationDot, FaYoutube } from "react-icons/fa6";
import { FaPhoneAlt, FaLinkedin, FaInstagram  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer () {
    return (
        <div className="bg-gray900 w-full py-6 px-8 tablet:px-[8.5rem] flex items-center justify-between">
            <span className="text-xs text-gray500 font-normal uppercase">2023 © Todos direitos reservados</span>
            <span className="text-xs text-gray500 font-normal">Mapa do Criador de Sites</span>
        </div>
    )
}
