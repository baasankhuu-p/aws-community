"use client";
import React, { useContext, useEffect, useState } from "react";
import Counter from "../component/Counter";
import Image from "next/image";
import aws_ub from "../assets/img/all/community-aws.png";
import UserContext from "../context/context";
import { ticketURL } from "@/constants";
const dateEn_mn = [
  "7 June 2023 12:00 - Urgoo 3 IMAX Shangri-La",
  "2023 оны 6 сарын 7 12:00 - Өргөө 3 IMAX Шангри-Ла",
];
const desEn_mn = [
  "Community-led conference for AWS users. Learn from hands-on practitioners like yourself.",
  "AWS хэрэглэгчдэд зориулсан олон нийтээр удирдуулсан бага хурал",
];
const tcketEn_mn = [
  ["Buy Ticket", "Only 200 seats"],
  ["Тасалбар худалдаж авах", "Ердөө 200 суудалтай"],
];
function Home() {
  const [description, setDescription] = useState(desEn_mn[0]);
  const [dateTime, setDatetime] = useState(dateEn_mn[0]);
  const [TICKET, setTICKET] = useState(tcketEn_mn[0]);

  const state = useContext(UserContext);
  useEffect(() => {
    if (state.ln == "MN") {
      setDescription(desEn_mn[1]);
      setDatetime(dateEn_mn[1]);
      setTICKET(tcketEn_mn[1]);
    } else {
      setDescription(desEn_mn[0]);
      setDatetime(dateEn_mn[0]);
      setTICKET(tcketEn_mn[0]);
    }
  }, [state.ln]);
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row py-20 relative mx-2 lg:mx-24 items-center lg:justify-center"
    >
      <div className="flex flex-col md:flex-row justify-between items-center z-0 md:py-10 lg:py-32 lg:px-24 shadow-home lg:w-5/6  lg:justify-center">
        <div className="w-full md:w-3/4 z-30 ">
          <Counter />
          <div className="text-2xl md:text-5xl font-bold text-white my-10 w-full">
            <div>
              AWS Community Day &nbsp;
              <span className="font-black" style={{ color: "#00b4fc" }}>
                Ulaanbaatar
              </span>
            </div>
          </div>
          <div className="text-xl md:text-3xl font-medium text-white my-3 italic md:pr-40">
            {description}
          </div>
          <div className="md:sm md:text-xl font-medium text-white italic mt-10 mb-5">
            {dateTime}
          </div>
          <span className='text-white font-medium md:text-xl'>
            <a
              target="_blank"
              href={ticketURL}
              className="inline font-semibold px-3 py-1 md:px-6 md:py-2 bg-pink rounded-sm cursor-pointer"
            >
              {TICKET[0]}
            </a>
            &nbsp;&nbsp;{TICKET[1]}
          </span>
        </div>
        <Image
          alt="aws-ub"
          className="z-10 din_eve hidden md:flex"
          src={aws_ub}
        />
      </div>
    </div>
  );
}

export default Home;
