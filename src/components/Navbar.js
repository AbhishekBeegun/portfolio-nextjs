import Link from "next/link"
import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed z-50 top-0 flex flex-col h-screen w-[10vh] font-semibold text-xl justify-evenly items-center bg-black">

        <Link
        className="text-white -rotate-90"
        href={""}>
        Abhishek
        </Link>

        <Link 
         className="text-white -rotate-90"
        href={""}>
        Projects
        </Link>

        <Link 
         className="text-white -rotate-90"
        href={""}> 
        About
        </Link>

        <Link 
         className="text-white -rotate-90"
        href={""}>
        Contact
        </Link>
    </div>
  )
}

export default Navbar