import { FaLocationDot, FaYoutube } from "react-icons/fa6";
import { FaPhoneAlt, FaLinkedin, FaInstagram  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function TopBar () {
    return (
        <div className="bg-gray900 w-full py-6 px-[8.5rem] flex items-center justify-between">
            <div className="flex items-center space-x-10">
                <span className="flex items-center space-x-2.5">
                    <FaLocationDot size={20} className="fill-brown400"/>
                    <p className="text-[1rem] font-medium text-gray500">Rua 987, St. Pedro, Goiânia-GO.</p>
                </span>
                <span className="flex items-center space-x-2.5">
                    <FaPhoneAlt size={20} className="fill-brown400"/>
                    <p className="text-[1rem] font-medium text-gray500">+55 62 98765-4321</p>
                </span>
                <span className="flex items-center space-x-2.5">
                    <MdEmail size={20} className="fill-brown400"/>
                    <p className="text-[1rem] font-medium text-gray500">contato@lexpro.adv.br</p>
                </span>
            </div>

            <nav className="flex items-center space-x-4">
                <a href="">
                  <FaInstagram size={20} className="fill-brown400"/>
                </a>
                <a href="">
                  <FaYoutube size={20} className="fill-brown400"/>
                </a>
                <a href="">
                  <FaLinkedin size={20} className="fill-brown400"/>
                </a>
            </nav>
        </div>
    )
}