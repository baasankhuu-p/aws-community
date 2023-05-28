import Link from "next/link";
import React from "react";
const mail = [
  ["info@fibo.edu.mn"],
  ["altanbagana@fibo.cloud"],
  ["ganjiguur@fibo.cloud"],
];
const phones = [["86689886"], ["89550221"], ["99266664"]];
const social_links = [
  ["AWS Community", "https://awsmongolia.com/"],
  ["Linkedin", "https://www.linkedin.com/company/awsmongolia"],
  ["YouTube", "https://www.youtube.com/@cloud.community/videos"],
  ["Facebook ", "https://www.facebook.com/cloud.community.ulaanbaatar"],
  ["Instagram", "https://www.instagram.com/cloud.community.ub/"],
  ["Discord ", "https://discord.gg/F7tUDKQaQ8"],
];
function Footer() {
  return (
    <footer
      className="flex flex-col justify-between border-primary container px-5 md:px-5 lg:px-10 text-white w-full mx-auto"
      style={{
        position: "relative",
        zIndex: 0,
        overflow: "hidden",
        backgroundImage: 'url("bg3.svg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderTopWidth: 0.01,
      }}
    >
      <div className="mt-10 px-2 px:0 flex justify-between md:justify-around relative">
        <ul className="flex-col lg:flex">
          <li className="mb-4 py-1 font-bold text-sm md:text-lg lg:text-2xl text-primary underline underline-offset-4 focus:outline-0">
            <div className="text-lg md:text-2xl">Social links</div>
          </li>
          {social_links.map(([title, url], index) => (
            <li key={index}>
              <a
                target="_blank"
                className="py-1 hover:text-primary hover:underline hover:underline-offset-4 focus:outline-0 focus:ring-2 focus:ring-primary text-xs md:text-base"
                href={url}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 xl:text-left">
          <li className="mb-5 py-1 font-bold text-sm md:text-lg lg:text-2xl  text-primary underline underline-offset-4 focus:outline-0">
            <div className="text-lg md:text-2xl">Contacts</div>
          </li>
          {mail.map(([mailname], index) => (
            <li>
              <a
                key={index}
                className="px-2 hover:text-primary hover:underline hover:underline-offset-4 focus:outline-0 focus:ring-2 focus:ring-primary text-xs md:text-base"
                href={`mailto:${mailname}`}
              >
                {mailname}
              </a>
            </li>
          ))}
          {phones.map(([phone], index) => (
            <li>
              <>
                <a
                  key={index}
                  className="px-2 hover:text-primary hover:underline hover:underline-offset-4 focus:outline-0 focus:ring-2 focus:ring-primary text-xs md:text-base"
                  href={`tel:${phone}`}
                >
                  +976-{phone}
                </a>
              </>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-5 text-center">
        <p>
          © AWS<span className="text-primary "> User Group of Mongolia</span> /
          2023 / All Rights Reserved
        </p>
      </div>
      <div className="absolute top-1 right-5 ">
        <div>
          <Link href="/contruct" className=" hover:underline">
            Code of conducts
          </Link>{" "}
          2023
        </div>
      </div>
    </footer>
  );
}

export default Footer;
