'use client'

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from 'next/navigation'

export function NavLink () {
  const params = usePathname()
    return (
        <nav className="flex items-center justify-center gap-[30%]">
          <Link href="home" className={`className=text-4 font-bold uppercase hover:text-brown400 ${params == '/home' ? 'text-brown400' : 'text-gray500' } transition-all`}>
            Home
          </Link>
          <Link href="office" className={`className=text-4 text-nowrap font-bold uppercase hover:text-brown400 ${params == '/office' ? 'text-brown400' : 'text-gray500' } transition-all`}>
            O Escritório
          </Link>
          <Link href="acting" className={`className=text-4 font-bold uppercase hover:text-brown400 ${params == '/acting' ? 'text-brown400' : 'text-gray500' } transition-all`}>
            Atuação
          </Link>
          <Link href="contact" className={`className=text-4 font-bold uppercase hover:text-brown400 ${params === '/contact' ? 'text-brown400' : 'text-gray500'} transition-all`}>
            Contato
          </Link>
          <Link href="#" className="text-[0.875rem] bg-green gap-4 rounded-[3px] px-5 py-4 flex items-center font-bold text-nowrap uppercase text-white transition-all hover:opacity-80 hidden">
            <FaWhatsapp size={20}/> Falar com especialista
          </Link>
        </nav>
    )
}