"use client";
import React, { useContext, useEffect, useState } from "react";
import Deed from "../component/deed";
import UserContext from "../context/context";

const shortintr_en_mn = [
  "Since 2018, our community has expanded to over 4,000 members, hosting over 30 events for cloud technology enthusiasts. We are excited to announce our first AWS event in Mongolia, a significant milestone for us in the country",
  "Since 2018, our community has expanded to over 4,000 members, hosting over 30 events for cloud technology enthusiasts. We are excited to announce our first AWS event in Mongolia, a significant milestone for us in the country",
];

export default function About() {
  const [shortIntro, setShIntro] = useState(shortintr_en_mn[0]);
  const state = useContext(UserContext);
  useEffect(() => {
    if (state.ln == "MN") {
      setShIntro(shortintr_en_mn[1]);
    } else {
      setShIntro(shortintr_en_mn[0]);
    }
  }, [state.ln]);
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center mt-10 about-bg"
    >
      <div className="flex flex-col md:flex-row justify-between lg:justify-center items-center my-5 lg:mx-52  lg:w-5/6">
        <div className="flex flex-col mr-2 lg:w-1/3 mx-2">
          <div className=" text-white text-center p-1 text-3xl md:4xl font-medium flex flex-col gap-4 py-3 px-6" style={{borderWidth:1}}>
            About us
          </div>
          <div className=" text-white text-center p-1 font-medium flex flex-col gap-4 border-2 py-3 px-6 text-sm sm:flex-row sm:items-center xl:gap-44 xl:py-6 xl:px-11 bg-gradient-to-r" style={{borderWidth:1}}>
            {shortIntro}
          </div>
        </div>
        <div className="text-white ml-2 lg:w-2/3 my-5 ">
          <Deed />
        </div>
      </div>
    </section>
  );
}
