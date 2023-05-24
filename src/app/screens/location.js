"use client";
import React, { useState } from "react";
const map_embed_uri="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167.13585385455482!2d106.92179010939067!3d47.913677153466935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96932a6aaaaa95%3A0xd97e77fafd4f35a2!2sUrgoo%203%20IMAX!5e0!3m2!1sen!2smn!4v1684769188121!5m2!1sen!2smn"
export default function Location() {
  return (
    <section
      id="location"
      className="px-2 py-10 flex flex-row justify-center items-center"
    >
      <div className="h-2/5 mt-4 flex flex-col xl:mt-7 xl:flex-row md:w-3/4">
        <div className="flex flex-col items-center justify-center bg-[#1C1C1C] lg:px-10">
          <div className="p-4 text-center text-primary xl:p-0" style={{fontSize:'12px'}}> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48px"
              height="48px"
              viewBox="0 0 24 24"
              role="presentation"
              style={{ display: "initial" }}
            >
              <g transform="translate(3.5 2)">
                <path
                  d="M8.5,20a1.358,1.358,0,0,1-.734-.247,21.513,21.513,0,0,1-5.54-5.141A10.384,10.384,0,0,1,0,8.318,8.168,8.168,0,0,1,2.5,2.434,8.53,8.53,0,0,1,8.493,0,8.423,8.423,0,0,1,17,8.318a10.39,10.39,0,0,1-2.23,6.294,21.92,21.92,0,0,1-5.541,5.141A1.319,1.319,0,0,1,8.5,20ZM8.493,5.777a2.8,2.8,0,0,0-2.8,2.8,2.712,2.712,0,0,0,.821,1.954,2.823,2.823,0,0,0,4.79-1.954,2.824,2.824,0,0,0-2.813-2.8Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            <p>ULAANBAATAR / MONGOLIA</p>
            <p className="text-white">
            "Urgoo 3, IMAX Shangri-La"
            </p>
          </div>
        </div>
          <div className="relative h-[200px] xl:h-[400px] xl:flex-[3]">
            <iframe
              title="Maps to 'shangri la urgoo'"
              src={map_embed_uri}
              className=" border-0 w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
      </div>
    </section>
  );
}
