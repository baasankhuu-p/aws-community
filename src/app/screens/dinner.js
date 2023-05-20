import React from "react";
import Image from "next/image";
import dinner from "../assets/img/all/dinner.png";
import drinks from "../assets/img/all/drinks.png";
function Dinner() {
  return (
    <div
      id="dinner"
      className="relative h-full min-h-screen flex flex-col justify-center items-center  md:flex-row md:justify-around bg-defbggray z-0"
    >
         {/* bg-defbggray */}
      {/* <Image
        src='https://kazhackstan.kz/abstract.svg'
        alt="Background"
        layout="fill"
        objectFit='cover'
        style={{backgroundSize:'auto 1280px'}}
      /> */}
        <div className="w-1/2 z-20 text-white font-medium">
          At this event, you can have dinner with influential Mongolian and
          foreign IT representatives. You'll also receive valuable guidance from
          respected experts, both local and international.
        </div>
        <div className="w-1/2 flex flex-row justify-center z-20">
          <Image src={dinner} className=" h-28 w-auto" />
          <div>
            <div>7 June 2023, Elixer</div>
            <Image src={drinks} className=" h-52 w-auto" />
            <div>REGISTER</div>
          </div>
      </div>
    </div>
  );
}

export default Dinner;
