import Link from 'next/link'
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
  ["YouTube ", "https://www.youtube.com/@cloud.community/videos"],
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
      <div className="mt-10 flex justify-around">
        <ul className=" flex-col gap-3 lg:flex">
          <li className="mb-5 py-1 font-bold text-lg">
            <h5>Social links</h5>
          </li>
          {social_links.map(([title, url], index) => (
            <li key={index}>
              <a
                target="_blank"
                className="py-1 px-2 hover:text-primary hover:underline hover:underline-offset-4 focus:outline-0 focus:ring-2 focus:ring-primary"
                href={url}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 xl:text-left">
          <li className="mb-5 py-1 font-bold text-lg">
            <h5>Contacts</h5>
          </li>
          {mail.map(([mailname], index) => (
            <li>
              <a
                key={index}
                className="px-2 hover:text-primary hover:underline hover:underline-offset-4 focus:outline-0 focus:ring-2 focus:ring-primary"
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
                  className="px-2 hover:text-primary hover:underline hover:underline-offset-4 focus:outline-0 focus:ring-2 focus:ring-primary"
                  href={`tel:${phone}`}
                >
                  +976-{phone}
                </a>
              </>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 xl:text-left">
        <div className="flex flex-row justify-end"><div><Link href="/contruct" className=" hover:underline">Code of conducts</Link> 2023</div></div>
        </ul>
      </div>
      <div className="my-10 text-center">
      {/* <div className="flex flex-row justify-end"><div><a href="/code-of-conduct" className=" hover:underline">Code of conducts</a> 2023</div></div> */}
        <p>
          © AWS<span className="text-primary "> User Group of Mongolia</span> / 2023 / All
          Rights Reserved
        </p> 
        <ul className="flex gap-8"></ul>
      </div>
    </footer>
  );
}

export default Footer;
