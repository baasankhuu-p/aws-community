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
      <div className="lg:w-2/3 text-white flex flex-row justify-between lg:justify-center">
        <div onClick={state.ChangeLn} className="flex items-center my-auto py-1 px-4 mx-4 text-center border-2 rounded-full hover:bg-orange border-orange bg-defbggray text-white font-medium text-sm cursor-pointer">
          {state.ln}
        </div>
        <nav className="w-5/6 hidden md:flex flex-row justify-between rounded-full border-2 border-orange py-0.5 items-center bg-defbggray">
          {navs.map(([nav, url], index) => (
            <a
              key={index}
              href={url}
              className="w-full text-center hover:text-orange font-bold text-xs uppercase mx-2"
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
        className="hidden md:block lg:px-6 md:py-2 px-2 bg-primary text-sm hover:bg-primarydark rounded-md text-white font-bold"
      >
        {WATCH[1]}
      </a>
    </>
  );
}
