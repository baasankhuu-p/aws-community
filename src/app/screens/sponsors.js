import React from "react";
import Marquee from "react-fast-marquee";
let a = "aws.png";
import Image from "next/image";
function Sponsors() {
  const sponsors = [
    ["amazon", require("../assets/img/sponsors/aws.png")],
    ["apple", require("../assets/img/sponsors/apple.png")],
    ["microsoft", require("../assets/img/sponsors/microsoft.png")],
  ];
  return (
    <section
      id="sponsors"
      className="min-h-screen relative flex flex-col justify-around items-center"
      style={{
        position: "relative",
        zIndex: 0,
        overflow: "hidden",
        backgroundImage: 'url("https://kazhackstan.kz/partners.svg")',
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="z-1 relative text-center text-5xl font-bold uppercase xl:text-7xl text-white">
        Sponsors
      </h1>
      <Marquee className="">
        <div className="w-screen flex flex-row">
          {sponsors.map(([sponsor, image], index) => (
            <div className="flex justify-around">
              <div className="flex justify-center items-center w-52 h-52 md:w-80 md:h-80">
                <Image src={image} alt={sponsor}/>
              </div>
              {/* <div className="text-white">{sponsor}</div> */}
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}

export default Sponsors;
