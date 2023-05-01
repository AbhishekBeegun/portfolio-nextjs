import Link from "next/link"
import React, { useState } from 'react'
import { useEffect } from "react";

const HOMESCREEN = () => {
 const [awidth, setawidth] = useState(100);
 const [aheight, setaheight] = useState(100);
 const [atop, setatop] = useState(50);
 const [aright, setaright] = useState(50)

function randomshape(){
  setawidth(Math.floor(Math.random() * 800) )
  setaheight(Math.floor(Math.random() * 800) )
  setatop(Math.floor(Math.random() * 200) )
  setaright(Math.floor(Math.random() * 300) )
}

useEffect(() => {
  const interval = setInterval(() => {
    randomshape()
  }, 2000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="h-screen w-screen flex justify-evenly">

     <div className="w-full h-full flex flex-col justify-between px-10 lg:px-36 py-32 lg:py-64 ">
      <h2 className="text-4xl">Hi there, I&apos;m</h2>
      <h1 className="text-5xl py-2">Abhishek Beegun</h1>

      <p className="text-base lg:text-xl">I am passionate about solving business problems through
human-centered design.
Curious by nature and
business-minded.</p>

    <Link href={""}
    className="bg-black rounded-sm text-white w-[200px] h-[50px] flex justify-center items-center"
    >
      Contact Me
    </Link>

     </div>

     <div 
     onClick={() => randomshape()}
     className="hidden cursor-pointer lg:block bg-black w-full h-full relative items-center">
      
      <div 
      style={{
        width : `${awidth}px`,
        height: `${aheight}px`,
        top : `${atop}px`,
        right:`${aright}px`,
      }}
      className="absolute bg-gradient-to-r from-white hover:scale-150 transition-all ease-in-out duration-[1000ms]
       rounded-full top-5 -right-10">

      </div>

      <div 
      style={{
        width : `${awidth}px`,
        height: `${aheight}px`,
        top : `${atop}px`,
        left:`${aright}px`,
      }}
      className="absolute bg-gradient-to-r from-white rotate-90 hover:scale-150 transition-all ease-in-out duration-500
       rounded-full top-5 -right-10">

      </div>
     </div>
    </div>
  )
}

export default HOMESCREEN