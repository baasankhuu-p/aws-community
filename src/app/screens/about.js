import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="relative min-h-screen lg:mx-auto min-w-full flex flex-col justify-center items-center"
    >
      <div className="w-3/5">
        <div className="text-white text-center">
          Join us for an exciting gathering at AWS Community Day UB! We are
          delighted to announce the inaugural
          <br /> AWS Community Day UB in Mongolia, marking our official entry
          into the country. highly anticipated event will witness the
          participation of esteemed IT professionals from both local and
          international companies.
        </div>
        <div className="flex flex-row my-10 justify-between">
          <div className="flex flex-col w-1/4 border-2 bg-red-500">
            <div className=" text-white border-b-2 text-center p-1">
              ТОВЧ ТАНИЛЦУУЛГА
            </div>
            <div className=" text-white text-center  p-1">
              Since 2018, our community has expanded to over 4,000 members,
              hosting over 30 events for cloud technology enthusiasts. We are
              excited to announce our first AWS event in Mongolia, a significant
              milestone for us in the country.
            </div>
          </div>
          <div className="text-white flex flex-col w-3/4 bg-red-300">123</div>
        </div>
      </div>
    </div>
  );
}
