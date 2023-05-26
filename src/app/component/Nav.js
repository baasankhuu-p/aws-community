"use client";
import React, { useState, useContext } from "react";
import { CgDetailsMore } from "react-icons/cg";
import UserContext from "../context/context";

export default function Nav() {
  const state = useContext(UserContext);

  const navs = state.nav;

  const WATCH = state.watch;

  const [toggleMore, setToggleMore] = useState(true);
  function toggle() {
    setToggleMore(!toggleMore);
  }
  return (
    <>
      <div className=" text-white flex flex-row justify-between lg:justify-center">
        <nav className="hidden md:flex flex-row bg-black justify-between rounded-full border-primary items-center px-8" style={{borderWidth:1}}>
          {navs.map(([nav, url], index) => (
            <a
              key={index}
              href={url}
              className=" text-center w-full hover:text-primary uppercase mx-1 headernav px-4"
            >
              {nav}
            </a>
          ))}
        </nav>
        {toggleMore && (
          <div className="md:hidden" onClick={toggle}>
            <div
              className="flex flex-col w-10 h-10 cursor-pointer border-2 rounded-full justify-center items-center border-primary"
              style={{ borderWidth: 1.5 }}
            >
              <CgDetailsMore
                color="white"
                className="w-10 h-7 m-2 rotate-180"
              />
            </div>
          </div>
        )}
      </div>
      {!toggleMore && (
        <div className="text-white fixed lg:hidden w-screen h-screen bg-black top-0 left-0 z-50">
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
            <a
              onClick={toggle}
              href={state.watch[0]}
              className="text-center hover:text-primary font-bold py-2 my-2 uppercase"
            >
              {state.watch[1]}
            </a>
          </nav>
        </div>
      )}
      <a
        href={WATCH[0]}
        target="_blank"
        className="hidden py-1 md:block text-center w-32  bg-primary hover:bg-primarydark rounded text-white headernav"
      >
        {WATCH[1]}
      </a>
    </>
  );
}
