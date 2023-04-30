import React from 'react'
import Link from "next/link"
import Image from "next/image"

const PROJECTS = ({number,title,smalldetail,details
,t1,t2,t3,t4,t5,t6,linktop,imagelink}) => {
  return (
    <div className="h-auto w-screen flex justify-evenly">
      <div className=" w-full h-[100vh] flex flex-col justify-between px-36 py-24 ">
       <div className="flex h-[100vh]">
        <h2 className="text-5xl font-semibold">{number}</h2>
        
   

        <div className="flex flex-col w-full h-full text-left text-xl justify-between py-24 px-20">
          <h1 className="text-5xl font-semibold">{title}</h1>
          <h2>{smalldetail}</h2>

          <p>{details}</p>

          <div className="flex list-none justify-between font-semibold">
            <li>{t1}</li>
            <li>{t2}</li>
            <li>{t3}</li>
            <li>{t4}</li>
            <li>{t5}</li>
            <li>{t6}</li>

          </div>


          <Link href={"{linktop"}
    className="bg-black text-white w-[200px] h-[50px] flex justify-center items-center hover:scale-110 transition-all ease-in-out"
    >
      LIVE DEMO
    </Link>
        </div>

       </div>
        
      </div>

      <div className="w-full h-[100vh] flex flex-col items-center justify-center bg-black ">

        <Image src={imagelink} alt="logo" />

      </div>
    </div>
  )
}

export default PROJECTS