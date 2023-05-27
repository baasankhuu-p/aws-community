"use client";
import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/context";
const dateMN_EN = [
  [
    {
      DAYS: "DAY",
      HOURS: "HOUR",
      MINUTES: "MINUTE",
      SECONDS: "SECOND",
      EXPIRED: "EXPIRED",
    },
  ],
  [
    {
      DAYS: "ӨДӨР",
      HOURS: "ЦАГ",
      MINUTES: "МИНУТ",
      SECONDS: "СЕКУНД",
      EXPIRED: "ДУУССАН",
    },
  ],
];
export default function Counter() {
  var countDownDate = new Date("June 07,2023, 12:00:00").getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      var now = new Date();
      var distance = countDownDate - now;
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const [nomenclature, setNomenclature] = useState(dateMN_EN[0]);
  //change language
  const state = useContext(UserContext);

  useEffect(() => {
    if (state.ln == "MN") {
      setNomenclature(dateMN_EN[1]);
    } else {
      setNomenclature(dateMN_EN[0]);
    }
  }, [state.ln]);
  return (
    <div className="relative">
      {days > 0 || hours > 0 || minutes > 0 || seconds > 0 ? (
        <div className="flex flex-row justify-around mx-2 md:mx-0 md:justify-between w-full md:w-2/5 items-center font-medium">
          <div
            className="flex flex-col items-center justify-center p-2 md:p-4"
            style={{ color: "#00a3ee" }}
          >
            <div className="text-2xl lg:text-4xl">{days > 0 ? days : "00"}</div>
            <div className="text-base">DAY</div>
          </div>
          <div
            className="flex flex-col items-center justify-center p-2 md:p-4"
            style={{ color: "#ffcf4a" }}
          >
            <div className="text-2xl lg:text-4xl  ">
              {hours > 0 ? hours : "00"}{" "}
            </div>
            <div className="text-base">HOUR</div>
          </div>
          <div
            className="flex flex-col items-center justify-center p-2 md:p-4"
            style={{ color: "#00c1c1" }}
          >
            <div className="text-2xl lg:text-4xl  ">
              {minutes > 0 ? minutes : "00"}
            </div>
            <div className="text-base">MINUTE</div>
          </div>
          <div
            className="flex flex-col items-center justify-center p-2 md:p-4"
            style={{ color: "#ff6386" }}
          >
            <div className="text-2xl lg:text-4xl  ">
              {seconds > 0 ? seconds : "00"}
            </div>
            <div className="text-base">SECONDS</div>
          </div>
        </div>
      ) : (
        <div style={{ color: "#ff6386" }}>EXPIRED</div>
      )}
    </div>
  );
}
