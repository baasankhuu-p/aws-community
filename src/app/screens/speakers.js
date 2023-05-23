"use client";
import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
function Speakers() {
  const speacker_info = [
    [
      "Victor Vedmich",
      "Senior Developer Advocate at AWS",
      "./speakers/1.png",
      "Learn more",
      "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    ],
    [
      "Almas Moldakanov",
      "Territory Manager at Amazon Web Services",
      "./speakers/2.png",
      "Learn more",
      "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    ],
    [
      "Egor Miasnikov",
      "Solutions Architect at AWS | 5x AWS Certified | ex-EPAM | ex-Google",
      "./speakers/3.png",
      "Learn more",
      "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    ],
    [
      "Ganjiguur Natsagdorj",
      "Co-Founder at FIBO CLOUD",
      "./speakers/4.png",
      "Learn more",
      "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    ],
    ["", "", ""],
    ["", "", ""],
  ];

  const [detailsmodal, setdetailsModal] = useState(false);
  const [speaker, setSpeaker] = useState(null);
  const onHandlerSpeaker = (el) => {
    console.log(el);
    setdetailsModal(true);
    setSpeaker(el);
  };
  const closeModal = () => {
    setdetailsModal(false);
  };
  return (
    <section
      id="speakers"
      className="w-full min-h-screen px-10 md:px-48 md:pb-20 flex flex-col justify-center"
    >
      <div className="flex flex-col justify-between">
        <h4 className="block font-futura font-bold uppercase -tracking-wider xl:text-7xl xl:tracking-normal text-3xl text-white">
          <span className="relative top-5 block text-xl text-primary xl:text-3xl my-2">
            line up
          </span>
          <div>Speakers</div>
        </h4>
      </div>
      <div className="mt-5 grid gap-[2px] md:grid-cols-2 xl:grid-cols-3">
        {speacker_info.map((el, index) => (
          <div
            key={index}
            className=" relative flex aspect-square flex-col items-start justify-between p-2 shadow-speaker"
            style={{
              backgroundImage: "url(/bg1.svg)",
              backgroundSize: "auto 150%",
            }}
          >
            <img
              src={el[2]}
              style={{
                position: "absolute",
                inset: "0px",
                boxSizing: "border-box",
                padding: "0px",
                border: "none",
                display: "block",
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: "cover",
                bottom: 0,
                right: 0,
              }}
            />
            <div className="text-white relative z-[1] flex h-full flex-col items-start justify-end ">
              <div>
                <h5 className=" text-sm font-bold lg:text-xl">{el[0]}</h5>
                <p className="mt-1 text-xs lg:text-sm capitalize">{el[1]}</p>
              </div>
              {el[3] && (
                <button
                  onClick={() => {
                    onHandlerSpeaker(el);
                  }}
                  className="relative mb-1 text-xs md:text-sm font-medium uppercase tracking-widest transition-colors after:absolute after:-bottom-[10px] after:left-0 after:h-[2px] text-prim after:w-32 after:bg-primary hover:text-white hover:after:bg-white focus:text-white focus:outline-0  text-primary"
                >
                  {el[3]}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {detailsmodal && speaker && (
        <>
          <div
            className=" fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-40"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className=" relative bg-black p-5 rounded z-50 mx-1 md:w-2/3 h-1/2 border-2 border-primary flex flex-col justify-center items-start text-white">
              <IoMdCloseCircleOutline
                className="w-10 h-10 text-slate-400 hover:text-white cursor-pointer absolute right-5 top-5"
                onClick={closeModal}
              />
              <div className="text-2xl md:text-3xl lg:6xl font-bold py-2">
                {speaker[0]}
              </div>
              <div className="w-auto h-1/2 md:h-3/4 md:mt-5 flex flex-row items-center ">
                <img src={speaker[2]} className="w-auto h-full" />
                <div className="md:mx-2 lg:mx-5 ">
                  <div className="text-sm md:text-xl lg:4xl py-2">{speaker[1]}</div>
                  <div className="text-sm md:text-xl lg:4xl">{speaker[4]}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Speakers;
