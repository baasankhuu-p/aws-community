"use client"
import React, { useContext, useEffect, useState } from "react";
import Deed from "../component/deed";
import UserContext from "../context/context";

export default function About() {
  const [intro, setIntro] = useState("Join us for an exciting gathering at AWS Community Day UB! We are delighted to announce the inaugural AWS Community Day UB in Mongolia, marking our official entry into the country. highly anticipated event will witness the participation of esteemed IT professionals from both local and international companies.")
  const [shortIntro,setShIntro]=useState("Since 2018, our community has expanded to over 4,000 members, hosting over 30 events for cloud technology enthusiasts. We are excited to announce our first AWS event in Mongolia, a significant milestone for us in the country")
  const state = useContext(UserContext);
  useEffect(() => {
    if(state.ln=='MN'){
      setIntro("AWS Community Day UB-д болох сонирхолтой цуглаанд бидэнтэй нэгдээрэй! Бид тус улсад албан ёсоор нэвтэрч буй AWS Community Day UB-ийг Монголд анх удаа зарлаж байгаадаа баяртай байна.")
      setShIntro("2018 оноос хойш манай нийгэмлэг 4000 гаруй гишүүнтэй болж өргөжин тэлж, үүлэн технологи сонирхогчдод зориулсан 30 гаруй арга хэмжээг зохион байгууллаа. Бид Монгол дахь анхны AWS арга хэмжээгээ зарлаж байгаадаа баяртай байна.")
    }else{
      setIntro("Join us for an exciting gathering at AWS Community Day UB! We are delighted to announce the inaugural AWS Community Day UB in Mongolia, marking our official entry into the country. highly anticipated event will witness the participation of esteemed IT professionals from both local and international companies.")
      setShIntro("Since 2018, our community has expanded to over 4,000 members, hosting over 30 events for cloud technology enthusiasts. We are excited to announce our first AWS event in Mongolia, a significant milestone for us in the country")
    }
  }, [state.ln]);
  return (
    <section
      id="about"
      className="relative min-h-screen lg:mx-auto min-w-full flex flex-col justify-center items-center mt-10 md:mt-0"
      style={{
          backgroundImage: "url(https://kazhackstan.kz/polygon.webp)",
          zIndex: 0,
          overflow: "hidden",
          backgroundSize: "100% auto",
          backgroundPosition: "center -200px",
          backgroundRepeat: "no-repeat",}}
    >
      <div
        className="w-4/5"
      >
        <div className="text-white text-center text-2xl font-medium">
          {intro}
        </div>
        <div className="flex flex-col md:flex-row my-10 justify-between">
          <div className="flex flex-col my-10 md:w-1/4 md:my-0 border-2">
            <div className=" text-white border-b-2 text-center p-1 text-2xl font-bold">
            A SHORT INTRODUCTION
            </div>
            <div className=" text-white text-center  p-1 text-xl font-medium my-auto">
              {shortIntro}
            </div>
          </div>
          <div className="text-white flex flex-col md:w-2/3">
            <Deed />
          </div>
        </div>
      </div>
    </section>
  );
}
