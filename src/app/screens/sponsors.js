import React from "react";
import Image from "next/image";
function Sponsors() {
  const sponsors = [
    ["aws_logo", require("../assets/img/sponsors/aws_logo.png")],
    ["apnic-logo", require("../assets/img/sponsors/apnic-logo.png")],
    ["fibo", require("../assets/img/sponsors/logo_fibo.png")],
    ["tech-partner", require("../assets/img/organize/tech-partners.png")],
  ];
  return (
    <>
      <div id="sponsors" className="mt-10 md:mt-20 mx-2 lg:mx-30">
        <div className=" text-white text-center text-4xl xl:text-5xl font-bold">
          Sponsors
        </div>
        <div className="flex flex-row justify-center flex-wrap">
          {sponsors.map(([title, url], index) => (
            <div key={index} className="flex justify-center items-center m-4">
              <Image
                src={url}
                alt={title}
                style={{ width: "280px", height: "auto" }}
                className=" rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sponsors;
