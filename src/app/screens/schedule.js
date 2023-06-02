"use client";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/context"; 
const con_en = [
  ["12:00 - 12:30","Registration And Foods"],
  ["12:30 - 12:50","Sponsor's time"],
  ["12:50 - 13:00","Opening Welcome - Almas Moldakanov - Territory Manager @Amazon Web Service"],
  ["13:00 - 13:30","AWS Firecracker Technical Fundamentals - E.Darkhanbayar - CTO @Fibo Cloud"],
  ["13:30 - 14:00","GenAI on AWS, Options and Demo - Egor Miasnikov - Solutions Architect @Amazon Web Services"],
  ["14:00- 14:30","Chaos Engineering - Victor Vedmich - Senior Developer Advocate @Amazon Web Services"],
  ["14:30 - 14:50","Cody aka Shoppy.mn System Architecture - N.Gundsambuu - CTO @Intelmind Group"],
  ["14:50 - 15:10","AWS Eventbridge - E.Tsengel - Senior Developer @Unimedia Solutions"],
  ["15:10 - 15:30","AWS Empowered MessagePro's Development - U.Bayar - CTO @CallPro"],
  ["15:30 - 16:00","Kahoot Quiz Prizes / Closing Address / Photograph"],
];
function Schedule() {
  const [visibleVal, setvisibleVal] = useState("CONFERENCE");
  const [visibleCon, setVisibleCon] = useState(con_en);
  const [visibleDin, setVisibleDin] = useState(null);
  const state = useContext(UserContext);

  useEffect(() => {
  }, [visibleVal,state.ln]);
  return (
    <section
      id="schedules"
      className="relative m-h-screen text-white flex flex-col justify-center items-center mx-2"
    >
      <div className="mb-10 p-10 shadow-2xl shadow-primary w-full rounded-xl md:mx-48 lg:w-5/6">
        <h4 className="block font-futura font-bold uppercase -tracking-wider xl:text-7xl xl:tracking-normal text-left text-3xl">
          <span className="relative block font-fugaz-one text-xl text-primary xl:text-3xl ">
            event
          </span>
          Schedule
        </h4>
        <div className="mt-2 flex flex-row justify-end font-Fugaz uppercase focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-primary lg:text-2xl font-bold italic cursor-pointer">
          <div
            className={visibleVal == "CONFERENCE" && "text-primary underline"}
            style={{ marginRight: 20 }}
          >
            CONFERENCE
          </div>
        </div>
        <div className="py-2">
          {(visibleCon?visibleCon:visibleDin).map(([date, measures], index) => (
            <div key={index} className={`my-2 flex flex-col gap-4 border-2 border-primary py-3 px-6 text-sm sm:flex-row sm:items-center xl:gap-44 xl:py-6 xl:px-11 bg-gradient-to-r hover:from-black hover:to-primarydark ${index==0 && ' from-black to-primarydark'} cursor-pointer`} style={{borderWidth:1}}>
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
