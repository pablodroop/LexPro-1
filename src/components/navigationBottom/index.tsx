'use client'

import { NavLink } from "../header/navLink";
import { Nav } from "../topBar";

export function NavigationBottom () {
  const windowHeight = 1
  return (
    <div className={`w-full ${windowHeight >= 1000 ? 'flex' : 'hidden'} justify-between items-center bg-gray800 h-[11.33rem] px-8 tablet:px-[8.5rem]`}>
      <img
        src='/logoV.png'
        className="w-[8.5rem]"
        alt="Logo"
      />

      <NavLink align="end"/>
      
      <div className="tablet:flex hidden">
        <Nav/>
      </div>
    </div>
  )
}