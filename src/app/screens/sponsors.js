import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
function Sponsors() {
  const sponsors = [
    ["aws_logo", require("../assets/img/sponsors/aws_logo.png")],
    ["apnic-logo", require("../assets/img/sponsors/apnic-logo.png")],
  ];
  return (
    <div
      id="sponsors"
      className="relative flex flex-col justify-around items-center mx-2 lg:mx-52 mt-10 md:mt-20"
    >
      <h1 className="z-1 relative text-center text-4xl font-bold capitalize xl:text-5xl text-white">
        Sponsors
      </h1>
        <div className="flex flex-row justify-center flex-wrap">
          {sponsors.map(([sponsor, image], index) => (
              <div key={index} className="flex justify-center items-center m-5">
                <Image src={image} alt={sponsor} style={{width:'320px', height:'auto'}}/>
              </div>
          ))}
        </div>
    </div>
  );
}

export default Sponsors;
