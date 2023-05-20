import React from "react";
import Counter from "../component/Counter";
import Image from "next/image";
import aws_ub from "../assets/img/all/community-aws.png";
function Home() {
  return (
    <div id="home" className="relative h-full min-h-screen flex flex-col justify-center md:flex-row md:justify-around items-center z-0 ">
      {/* bg-defbggray */}
      <div className="lg:mx-auto w-4/5 lg:w-2/5 z-30">
        <Counter />
        <div className=" text-5xl font-bold text-white my-4">AWS Community Day Ulaanbaatar</div>
        <div className=" text-3xl font-medium text-white my-3 italic">
          Community-led conference for AWS users. Learn from hands-on
          practitioners like yourself.
        </div>
        <div className=" text-xl font-medium text-white italic my-2">7 June 2023, 12:00, SHUTIS 8 library</div>
        <div className="inline font-semibold text-white px-6 py-2 bg-pink rounded-sm cursor-pointer">TICKET</div>
      </div>
      <Image alt="aws-ub" className="z-10 lg hidden md:flex mx-auto" src={aws_ub} />
    </div>
  );
}

export default Home;