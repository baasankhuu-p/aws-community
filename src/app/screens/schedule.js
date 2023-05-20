"use client";
import React, { useState } from "react";
import Dinner from "./dinner";

function Schedule() {
    const[visibleVal,setVisbleVal] = useState('CONFERENCE')
  const [visible, setVisible] = useState([
    ["09:00 - 10:00", "CONFERENCE Measures"],
    ["10:00 - 11:00", "CONFERENCE Measures"],
    ["11:00 - 12:00", "CONFERENCE Measures"],
    ["12:00 - 13:00", "CONFERENCE Measures"],
    ["13:00 - 14:00", "CONFERENCE Measures"],
    ["14:00 - 15:00", "CONFERENCE Measures"],
  ]);
  const handlerVisible = (newVisible) => {
    setVisbleVal(newVisible)
    if (newVisible == "DINNER") {
      setVisible([
        ["09:00 - 10:00", "DINNER Measures"],
        ["10:00 - 11:00", "DINNER Measures"],
        ["11:00 - 12:00", "DINNER Measures"],
        ["12:00 - 13:00", "DINNER Measures"],
        ["13:00 - 14:00", "DINNER Measures"],
        ["14:00 - 15:00", "DINNER Measures"],
      ]);
    } else if (newVisible == "CONFERENCE") {
      setVisible([
        ["09:00 - 10:00", "CONFERENCE Measures"],
        ["10:00 - 11:00", "CONFERENCE Measures"],
        ["11:00 - 12:00", "CONFERENCE Measures"],
        ["12:00 - 13:00", "CONFERENCE Measures"],
        ["13:00 - 14:00", "CONFERENCE Measures"],
        ["14:00 - 15:00", "CONFERENCE Measures"],
      ]);
    }
  };
  return (
    <section id="schedules" className="relative m-h-screen  text-white flex flex-col justify-center items-center">
      <div className= "mb-10 p-10 shadow-2xl shadow-primary w-full rounded-xl md:mx-48">
        <h4 className="block font-futura font-bold uppercase -tracking-wider xl:text-7xl xl:tracking-normal text-left text-3xl">
          <span className="relative top-5 block font-fugaz-one text-xl text-primary xl:left-8 xl:top-8 xl:text-3xl left-4 ">
            event
          </span>
          Schedule
        </h4>
        <div className="mt-10 flex flex-row  font-Fugaz uppercase focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-primary lg:text-3xl font-bold italic cursor-pointer">
          <div
          className={visibleVal=='CONFERENCE' && 'text-primary'}
            onClick={() => {
              handlerVisible("CONFERENCE");
            }}
            style={{marginRight:20}}
          >
            CONFERENCE
          </div>
          <div
            className={`${visibleVal == "DINNER" && "text-primary"}`}
            onClick={() => {
              handlerVisible("DINNER");
            }}
          >
            DINNER
          </div>
        </div>
        <div className="p-4">
          {visible.map(([date, measures], index) => (
            <div className={`my-2 flex flex-col gap-4 border-2 border-primary py-3 px-6 text-sm sm:flex-row sm:items-center xl:gap-44 xl:py-6 xl:px-11 bg-gradient-to-r ${index==0 && ' from-black to-[#EF0000]'}`} style={{borderWidth:1}}>
              <div className=" text-primary font-bold">{date}</div>
              <div className=" font-medium capitalize">{measures}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
