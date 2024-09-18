'use client'

import { usePathname } from "next/navigation";
import { MdHome } from "react-icons/md";

export function Hero () {
    const path = usePathname()
    return (
        <div className="w-full h-36 relative flex justify-between bg-gray800 px-8 tablet:px-[8.5rem] items-center">
            <img
                src="bg.png"
                className="absolute object-cover opacity-40 h-36  w-full inset-0"
            />

            <h1 className="text-5xl font-semibold text-brown400 ">{path == '/office' ? 'O Escritório' : path == '/acting' ? 'Atuação' : 'Contato'}</h1>

            <div className="flex items-center gap-5">
              <MdHome className="size-4 fill-brown400"/>
              <div className="h-5 border-gray500 border-[1px]"></div>
              <h2 className="text-lg text-white">{path == '/office' ? 'O Escritório' : path == '/acting' ? 'Atuação' : 'Contato'}</h2>
            </div>
        </div>
    )
}