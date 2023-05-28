import React from 'react'
import Image from 'next/image';
export default function Mediapartners() {
    let techpartner = [
        ["Tenger tv", require("../assets/img/organize/tenger.png")]
      ];
  return (
    <>
      <div className="mt-10 md:mt-20 mx-2 lg:mx-30">
        <div className=" text-white text-center text-4xl xl:text-5xl font-bold">
          Media partner
        </div>
        <div className="flex flex-row justify-center flex-wrap">
          {techpartner.map(([title, url], index) => (
            <div key={index} className="flex justify-center items-center m-4">
              <Image
                src={url}
                alt={title}
                style={{ width: "280px", height: "auto" }}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
