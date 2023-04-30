import ABOUT from "@/components/ABOUT";
import HOMESCREEN from "@/components/HOMESCREEN";
import Navbar from "@/components/Navbar";
import PROJECTS from "@/components/PROJECTS";
import livewireimg from "../../public/image1.png"
import gal361img from "../../public/image22.png"
import beetvimg from "../../public/image.png"



export default function Home() {
  return (
       <>
        <Navbar/>
        <HOMESCREEN />
        <>
        <PROJECTS
        number={"01"}
        title={"LiveWire"}
        smalldetail={"Inspired by OTAYO, BEATGIG, and SPOTIFY"}
        details={"A Web and Android app that enables users to book artists, buy tickets for live events, and design custom posters. Intuitive interface makes booking artists and purchasing tickets easy. It set itself apart with a custom poster feature."}
        imagelink={livewireimg}
        linktop={""}   
        t1={"React JS"}    
        t2={"Next JS"}
        t3={"React Native"}
        t4={"Expo"}
        t5={"Tailwind CSS"} 
        t6={"Hygraph CMS"}
        />
        <PROJECTS
        number={"02"}
        title={"GALAXY / 361"}
        smalldetail={"Inspired by GALAXY and 361"}
        details={"An E-commerce inspired by two major retail brands. The website includes most of the features of the original website such as product listing, CIM monthly payment for individual products, shopping cart functionally and comparison page."}
        imagelink={gal361img}
        linktop={""}  
        t1={"React JS"}    
        t2={"Next JS"}
        t3={"Tailwind CSS"} 
        t4={"Hygraph CMS"}  
        />


        <PROJECTS
        number={"03"}
        title={"HomeMatch"}
        smalldetail={"Inspired by GALAXY and 361"}
        details={"An E-commerce inspired by two major retail brands. The website includes most of the features of the original website such as product listing, CIM monthly payment for individual products, shopping cart functionally and comparison page."}
        imagelink={""}
        linktop={""}  
        t1={"React JS"}    
        t2={"Next JS"}
        t3={"Tailwind CSS"} 
        t4={"Hygraph CMS"}  
        
        />
        <PROJECTS
        number={"04"}
        title={"BeeTV IPTV"}
        smalldetail={"Inspired by GALAXY and 361"}
        details={"An E-commerce inspired by two major retail brands. The website includes most of the features of the original website such as product listing, CIM monthly payment for individual products, shopping cart functionally and comparison page."}
        imagelink={beetvimg}
        linktop={""} 
        t1={"React JS"}  
        t2={"Vite JS"}
        t3={"Tailwind CSS"} 
        t4={"API"} 
         />
        </>
        <ABOUT/>
       </>
  )
}
