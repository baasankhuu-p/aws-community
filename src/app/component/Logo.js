import React from "react";
import Image from "next/image";
import AWSLogo from "../assets/img/all/aws.png";
function Logo() {
  return (
    <div className="flex flex-row justify-between z-10">
      <Image src={AWSLogo} alt="AWS COMMUNITY" className="w-20 my-4 "/>
    </div>
  );
}
export default Logo;
