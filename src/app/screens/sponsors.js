import React from "react";
import Marquee from "react-fast-marquee";
let a = "aws.png";
import Image from "next/image";
function Sponsors() {
  const sponsors = [
    ["amazon", require("../assets/img/sponsors/aws.png")],
    ["alibaba", require("../assets/img/sponsors/alibaba.png")],
    ["microsoft", require("../assets/img/sponsors/microsoft.png")],
  ];
  return (
    <section
      id="sponsors"
      className="relative flex flex-col justify-around items-center"
      style={{
        position: "relative",
        zIndex: 0,
        overflow: "hidden",
        // backgroundImage: 'url("https://kazhackstan.kz/partners.svg")',
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="z-1 relative text-center text-5xl font-bold uppercase xl:text-7xl text-white">
        Sponsors
      </h1>
      <Marquee className="">
        <div className="w-screen flex flex-row justify-around">
          {sponsors.map(([sponsor, image], index) => (
            <div className="flex justify-around" key={index}>
              <div className="flex justify-center items-center w-52 h-52 md:w-80 md:h-80">
                <Image src={image} alt={sponsor} height={150}/>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}

export default Sponsors;
