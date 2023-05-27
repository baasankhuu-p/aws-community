import Image from "next/image";
import React from "react";

function Organize() {
  let organizes = [
    ["Fibo", require("../assets/img/organize/logo_fibo.png")],
    ["cloud academy", require("../assets/img/organize/cloud_academy_logo.png")],
    ["cloud academy", require("../assets/img/organize/aws_user.png")],
  ];

  return (
    <div className="mt-10 md:mt-20 mx-2 lg:mx-30">
      <div className=" text-white text-center text-4xl xl:text-5xl font-bold">
        Organizer
      </div>
      <div className="flex md:flex-row flex-wrap items-center justify-center my-10 ">
        {organizes.map(([title, url], index) => (
          <Image
            src={url}
            alt={title}
            className="my-2 rounded-sm mx-4 "
            style={{width:'280px' ,height:'auto'}}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Organize;
