import Link from "next/link"
import React from 'react'

const HOMESCREEN = () => {
  return (
    <div className="h-screen w-screen flex justify-evenly">

     <div className="w-full h-full flex flex-col justify-between px-36 py-64 ">
      <h2 className="text-4xl">Hi there, I'm</h2>
      <h1 className="text-5xl">Abhishek Beegun</h1>

      <p className="text-xl">I am passionate about solving
business problems through
human-centered design.
Curious by nature and
business-minded.</p>

    <Link href={""}
    className="bg-black text-white w-[200px] h-[50px] flex justify-center items-center"
    >
      Contact Me
    </Link>

     </div>

     <div className="bg-black w-full h-full">

     </div>
    </div>
  )
}

export default HOMESCREEN