"use client";
import React, { useState, useEffect } from "react";

export default function Counter() {
  var countDownDate = new Date("June 30, 2023 23:00:59").getTime();
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

  return (
    <div className="relative">
      {days > 0 || hours > 0 || minutes > 0 || seconds > 0 ? (
        <div className=" flex flex-row justify-between w-2/3 items-center  font-medium">
          <div className="flex flex-col items-center justify-center p-4" style={{color:'#00a3ee'}}>
            <div className=" text-2xl">{days > 0 ? days : "00"}</div>
            <div className="text-xs">DAYS</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4" style={{color:'#ffcf4a'}}>
            <div className=" text-2xl">{hours > 0 ? hours : "00"}{" "}</div>
            <div className="text-xs">HOURS</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4" style={{color:'#00c1c1'}}>
            <div className=" text-2xl">{minutes > 0 ? minutes : "00"}</div>
            <div className="text-xs">MINUTED</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4" style={{color:'#ff6386'}}>
            <div className=" text-2xl">{seconds > 0 ? seconds : "00"}</div>
            <div className="text-xs">SECONDS</div>
          </div>
        </div>
      ) : (
        <div style={{color:'#ff6386'}}>EXPIRED</div>
      )}
    </div>
  );
}
