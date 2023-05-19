"use client";
import React, { useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { MdOutlineClear } from "react-icons/md";
const navs = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Speakers", "#speakers"],
  ["Schedules", "#schedules"],
  ["Sponsors", "#sponsors"],
];

export default function Nav() {
  const [toggleMore, setToggleMore] = useState(true);
  function toggle() {
    setToggleMore(!toggleMore);
  }
  return (
    <>
      <div className="lg:w-2/3 text-white flex flex-row justify-between lg:justify-center">
        <nav className="w-5/6 hidden lg:flex flex-row justify-between rounded-full border-2 border-primary py-0.5">
          {navs.map(([nav, url], index) => (
            <a
              key={index}
              href={url}
              className="w-full text-center hover:text-primary font-bold text-xs uppercase"
            >
              {nav}
            </a>
          ))}
        </nav>
        {toggleMore && (
          <div className="lg:hidden" onClick={toggle}>
            <div className="flex flex-col w-10 h-10 cursor-pointer border-2 rounded-full justify-center items-center border-primary" style={{borderWidth:1.5}}>
              <CgDetailsMore color="white" className="w-10 h-7 m-2 rotate-180" />
            </div>
          </div>
        )}
      </div>
      {!toggleMore && (
        <div className="text-white fixed lg:hidden w-screen h-screen bg-black top-0 left-0">
          <nav className="h-full flex flex-col justify-center w-full">
          {navs.map(([nav, url], index) => (
            <a
              onClick={toggle}
              key={index}
              href={url}
              className="text-center hover:text-primary font-bold py-2 my-2 uppercase"
            >
              {nav}
            </a>
          ))}
        </nav>
        </div>
      )}
    </>
  );
}
