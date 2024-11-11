
import Doctor from "@/components/Doctors";
import HeroSec from "@/components/HeroSec";
import Image from "next/image";

import * as React from "react"



export default function Home() {
  return (
    <div className="">


      <HeroSec islogin={true}/>
      <Doctor  isHome={true} />  

      
    </div>
  );
}
