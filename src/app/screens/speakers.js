'use client'
import React from "react";
function Speakers() {
  const speacker_info = [
    [
      "Jayson E. Street",
      "CyberSecurity Expert",
      "	https://kazhackstan.kz/_next/image?url=%2FSpeaker-01.webp&w=2048&q=100",
    ],
    [
      "Jayson E. Street",
      "CyberSecurity Expert",
      "	https://kazhackstan.kz/_next/image?url=%2FSpeaker-01.webp&w=2048&q=100",
    ],
    [
      "Jayson E. Street",
      "CyberSecurity Expert",
      "	https://kazhackstan.kz/_next/image?url=%2FSpeaker-01.webp&w=2048&q=100",
    ],
    [
      "Jayson E. Street",
      "CyberSecurity Expert",
      "	https://kazhackstan.kz/_next/image?url=%2FSpeaker-01.webp&w=2048&q=100",
    ],
    [
      "Jayson E. Street",
      "CyberSecurity Expert",
      "	https://kazhackstan.kz/_next/image?url=%2FSpeaker-01.webp&w=2048&q=100",
    ]
  ];
  return (
    <section id="speakers" className="w-full min-h-screen px-10 md:px-48 md:pb-20 flex flex-col justify-center">
      <div className="flex flex-col justify-between gap-5 md:gap-0">
        <h4 className="block font-futura font-bold uppercase -tracking-wider xl:text-7xl xl:tracking-normal text-3xl text-white">
          <span className="khs relative top-5 block font-fugaz-one text-xl text-primary xl:left-8 xl:top-8 xl:text-3xl left-4 ">
            line up
          </span>
          Speakers
        </h4>
      </div>
      <div className="mt-20 grid gap-[2px] md:grid-cols-2 xl:grid-cols-3">
        {speacker_info.map(([name,rank,pro_url])=>
        <div className=" relative flex aspect-square flex-col items-start justify-between p-6 shadow-speaker" style={{backgroundImage:'url("https://kazhackstan.kz/abstract.svg")',backgroundSize:'auto 150%'}}>
        <span
          style={{
            boxSizing: "border-box",
            display: "block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: "0px",
            margin: "0px",
            padding: "0px",
            position: "absolute",
            inset: "0px",
          }}
        >
          <img
            src={pro_url}
            style={{
              position: "absolute",
              inset: "0px",
              boxSizing: "border-box",
              padding: "0px",
              border: "none",
              margin: "auto",
              display: "block",
              width: "0px",
              height: "0px",
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              objectFit: "cover",
            }}
          />
        </span>
        <div className="text-white relative z-[1] flex h-full flex-col items-start justify-between">
          <div>
            <h5 className="text-2xl font-bold uppercase xl:text-3xl">
              {name}
            </h5>
            <p className="mt-2 text-sm uppercase xl:text-lg">
              {rank}
            </p>
          </div>
          <button className="relative mb-4 text-sm font-medium uppercase tracking-widest transition-colors after:absolute after:-bottom-[10px] after:left-0 after:h-[2px] after:w-32 after:bg-primary hover:text-white hover:after:bg-white focus:text-white focus:outline-0 focus:after:bg-white focus-visible:ring-2 focus-visible:ring-white focus-visible:after:bg-transparent group-hover:after:bg-white">
            Learn more
          </button>
        </div>
      </div>
        )}
      </div>
    </section>
  );
}

export default Speakers;
