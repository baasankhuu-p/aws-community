"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { dinnerRegister } from "@/constants";
import drinks from "../assets/img/all/drinks.png";
import UserContext from "../context/context";

const des_en_mn = [
  "At this event, you can have dinner with influential Mongolian and foreign IT representatives. You'll also receive valuable guidance from respected experts, both local and international.",
  "Энэхүү арга хэмжээнд та Монголын болон гадаадын мэдээллийн технологийн нөлөө бүхий төлөөлөгчидтэй оройн зоог барих боломжтой.",
];
const rgrEN_MN = ["To Register", "..."];

function Dinner() {
  const [des, setDes] = useState(des_en_mn[0]);
  const [register, setRegister] = useState(rgrEN_MN[0]);
  const state = useContext(UserContext);
  useEffect(() => {
    if (state.ln == "MN") {
      setDes(des_en_mn[1]);
      setRegister(rgrEN_MN[1]);
    } else {
      setDes(des_en_mn[0]);
      setRegister(rgrEN_MN[0]);
    }
  }, [state.ln]);
  return (
    <div
      id="dinner"
      className="flex flex-col md:flex-row pb-20 relative mx-2 lg:mx-24 items-center lg:justify-center "
    >
      <div className="flex flex-col md:flex-row justify-between items-center z-0 md:py-10 lg:py-32 lg:px-24 shadow-home lg:w-5/6 lg:justify-center">
        <Image
          alt="dinner"
          className="z-10 hidden md:flex din_eve"
          src={drinks}
        />
        <div className="md:w-3/4 z-30 text-right">
          <div className="text-2xl md:text-5xl font-bold text-white my-10">
            Cloud Connect Ulaanbaatar: AWS Networking Dinner for Enterprise Companies
          </div>
          <div className="text-xl md:text-3xl font-medium text-white my-3 italic md:pl-40">
            {des}
          </div>
          <span className='text-white font-medium text-xl'>
            <a
              target="_blank"
              href={dinnerRegister}
              className="inline font-semibold px-3 py-1 md:px-6 md:py-2 bg-pink rounded-sm cursor-pointer md:text-xl"
            >
              {register}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Dinner;
