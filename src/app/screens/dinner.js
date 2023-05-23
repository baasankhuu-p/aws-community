"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { dinnerRegister } from "@/constants";
import drinks from "../assets/img/all/drinks.png";
import UserContext from "../context/context";

const des_en_mn = [
  " Join us for a memorable event where you can have dinner with influential Mongolian and foreign IT representatives. Benefit from valuable guidance provided by respected local and international experts. Engage in networking activities to connect with interesting individuals. Don't miss out on this unique opportunity to expand your network and gain valuable insights!",
  "...",
];
const rgrEN_MN = ["To Register", "..."];
const dateEn_mn = [
  "7 June 2023 18:00 - ZOMA Kitchen & Bar (Meru tower 1st floor)",
  "2023 оны 6 сарын 7 18:00 - ZOMA Kitchen & Bar (Meru tower 1 давхарт)",
];
function Dinner() {
  const [des, setDes] = useState(des_en_mn[0]);
  const [dateTime, setDatetime] = useState(dateEn_mn[0]);
  const [register, setRegister] = useState(rgrEN_MN[0]);
  const state = useContext(UserContext);
  useEffect(() => {
    if (state.ln == "MN") {
      setDes(des_en_mn[1]);
      setDatetime(dateEn_mn[1]);
      setRegister(rgrEN_MN[1]);
    } else {
      setDes(des_en_mn[0]);
      setDatetime(dateEn_mn[0]);
      setRegister(rgrEN_MN[0]);
    }
  }, [state.ln]);
  return (
    <div
      id="dinner"
      className="flex flex-col md:flex-row pb-20 relative mx-2 items-center lg:justify-center "
    >
      <div className="flex flex-col md:flex-row justify-between items-center z-0 md:py-10 lg:py-16 lg:px-24 shadow-home lg:w-5/6 lg:justify-center">
        <Image
          alt="dinner"
          className="z-10 hidden md:flex din_eve"
          src={drinks}
        />
        <div className="md:w-3/4 z-30 text-right">
          <div className="font-bold text-white my-4" style={{fontSize:'16px'}}>
          Cloud Connect Ulaanbaatar: AWS Networking Dinner for Enterprise Companies
          </div>
          <div className="font-medium text-white my-3 italic md:pl-40" style={{fontSize:'12px'}}>
            {des}
          </div>
          <div className="md:sm md:text-xl font-medium text-white italic mt-10 mb-5" style={{fontSize:'8px'}}>
            {dateTime}
          </div>
          <span className='text-white font-medium text-xl'>
            <a
              target="_blank"
              href={dinnerRegister}
              className="inline font-semibold  bg-pink rounded-sm cursor-pointer px-4 py-2" style={{fontSize:'16px'}}
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
