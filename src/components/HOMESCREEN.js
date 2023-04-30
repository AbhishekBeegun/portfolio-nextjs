import Link from "next/link"
import React from 'react'

const HOMESCREEN = () => {
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

     <div className="hidden lg:block bg-black w-full h-full">

     </div>
    </div>
  )
}

export default HOMESCREEN