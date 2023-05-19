import React from "react";
import Image from "next/image";
import AWSLogo from "../assets/img/all/aws.png";
function Logo() {
  return (
    <div className="lg:w-1/6 flex flex-row justify-between">
      <Image src={AWSLogo} alt="AWS COMMUNITY" className="w-20 my-4 " />
      <div className="flex items-center my-auto py-1 px-4 mx-4 text-center border-2 rounded-full hover:bg-primary border-primary text-white font-medium text-sm cursor-pointer">
        EN
      </div>
    </div>
  );
}

export default Logo;
