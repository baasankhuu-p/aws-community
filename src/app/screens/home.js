"use client";
import React, { useContext, useEffect, useState } from "react";
import Counter from "../component/Counter";
import Image from "next/image";
import aws_ub from "../assets/img/all/community-aws.png";
import UserContext from "../context/context";
import { ticketURL } from "@/constants";
function Home() {
  const [description,setDescription] = useState("Community-led conference for AWS users. Learn from hands-on practitioners like yourself.");
  const [dateTime,setDatetime] = useState("7 June 2023, 12:00, SHUTIS 8 library")
  const [TICKET,setTICKET] = useState("TICKET");

  const state=useContext(UserContext);
  useEffect(()=>{
    if(state.ln=='MN'){
      setDescription('AWS хэрэглэгчдэд зориулсан олон нийтээр удирдуулсан бага хурал. Өөртэйгөө адил практик дадлагажигчдаас суралц.');
      setDatetime("2023.06.07, 12:00, ШУТИС 8 номын сан")
      setTICKET("ТАСАЛБАР")
    }
    else{
      setDescription('Community-led conference for AWS users. Learn from hands-on practitioners like yourself.')
      setDatetime("7 June 2023, 12:00, SHUTIS 8 library")
      setTICKET("TICKET")
    }
  },[state.ln])
  return (
    <div id="home" className="relative h-full min-h-screen flex flex-col justify-center md:flex-row md:justify-around items-center z-0  py-10 md:py-0">
      {/* bg-defbggray */}
      <div className="lg:mx-auto w-5/6 lg:w-2/5 z-30">
        <Counter />
        <div className=" text-5xl font-bold text-white my-10">AWS Community Day Ulaanbaatar</div>
        <div className=" text-3xl font-medium text-white my-3 italic">
          {description}
        </div>
        <div className=" text-xl font-medium text-white italic mt-10 mb-5">{dateTime}</div>
        <a href={ticketURL} className="inline font-semibold text-white px-6 py-2 bg-pink rounded-sm cursor-pointer">{TICKET}</a>
      </div>
      <Image alt="aws-ub" className="z-10 lg hidden md:flex mx-auto" src={aws_ub} />
    </div>
  );
}

export default Home;