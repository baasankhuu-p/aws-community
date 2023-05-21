"use client"
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import dinner from "../assets/img/all/dinner.png";
import drinks from "../assets/img/all/drinks.png";
import UserContext from "../context/context";
function Dinner() {
  const [des,setDes] = useState("At this event, you can have dinner with influential Mongolian and foreign IT representatives. You'll also receive valuable guidance from respected experts, both local and international.")
  const [register,setRegister]=useState("REGISTER")
  const state = useContext(UserContext);
  useEffect(()=>{
    if(state.ln=='MN'){
      setDes("Энэхүү арга хэмжээнд та Монголын болон гадаадын мэдээллийн технологийн нөлөө бүхий төлөөлөгчидтэй оройн зоог барих боломжтой.")
      setRegister("БҮРТГҮҮЛЭХ")
    }
    else{
      setDes("At this event, you can have dinner with influential Mongolian and foreign IT representatives. You'll also receive valuable guidance from respected experts, both local and international")
      setRegister("REGISTER")
    }
  },[state.ln])
  return (
    <div
      id="dinner"
      className="relative h-full flex flex-col justify-between items-center  md:flex-row  z-0 lg:px-20 my-20"
    >
         {/* bg-defbggray */}
        <div className="text-center w-4/5 lg:w-1/2 md:w-3/5 md:mx-20 z-20 text-white font-medium text-sm lg:text-4xl font-Fugaz italic">
          {des}
        </div>
        <div className="w-3/5 lg:w-1/2 py-10 md:w-3/5 md:p-0 flex flex-col lg:flex-row justify-center z-20 items-center">
          <Image src={dinner} alt='dinner' className="w-2/3 h-1/2 lg:h-32 lg:w-1/2" />
          <div className="lg:w-1/3">
            <div className="text-white text-2xl font-medium ">7 June 2023, Elixer</div>
            <Image src={drinks} alt='drinks' className="w-full" />
            <div className="bg-orange text-gray-100 font-bold text-center rounded cursor-pointer py-1">{register}</div>
          </div>
      </div>
    </div>
  );
}

export default Dinner;
