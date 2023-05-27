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
  "Be part of the first-ever AWS Community Day in Ulaanbaatar! Listen to local and international cloud experts share their knowledge in easy-to-understand talks. Join us to learn more about advanced cloud topics and connect with like-minded individuals. Don't miss this special event to improve your cloud skills and network with others in the community!",
  "Be part of the first-ever AWS Community Day in Ulaanbaatar! Listen to local and international cloud experts share their knowledge in easy-to-understand talks. Join us to learn more about advanced cloud topics and connect with like-minded individuals. Don't miss this special event to improve your cloud skills and network with others in the community!",
];
const tcketEn_mn = [
  ["Buy Ticket", "Only 200 seats"],
  ["Тасалбар авах", "Ердөө 200 суудалтай"],
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
      className="flex flex-col min-h-screen md:flex-row py-24 relative mx-4 md:mx-0 items-center lg:justify-center"
    >
      <div className="flex flex-col md:flex-row justify-between items-center z-0 md:py-10 lg:py-10 lg:px-24 shadow-home lg:w-5/6 lg:justify-center my-auto">
        <div className="w-full md:w-3/4 z-30 ">
          <Counter />
          <div className=" font-bold text-white my-auto w-full text-lg lg:text-2xl">
            <div>
              AWS Community Day&nbsp;
              <span className="font-black" style={{ color: "#00b4fc" }}>
                Ulaanbaatar
              </span>
            </div>
          </div>
          <div className="font-medium text-white my-2 italic md:pr-40 text-sm md:text-xl">
            {description}
          </div>
          <div className="md:sm md:text-xl font-medium text-white italic mt-5 mb-5" style={{fontSize:'12px'}}>
            {dateTime}
          </div>
          <span className='text-white font-medium md:text-xl' style={{fontSize:'16px'}}>
            <a
              target="_blank"
              href={ticketURL}
              className="inline font-semibold px-4 py-2 bg-pink rounded-sm cursor-pointer"
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
