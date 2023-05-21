import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
function Footer() {
  const abouts = [["Nabout","#"],["Nabout","#"],["Nabout","#"],["Nabout","#"]]
  return (
    <footer className="container mx-auto py-10 md:px-10 lg:px-20 text-white">
      <div className="mt-10 flex justify-around lg:justify-between">
        <ul className=" flex-col gap-5 lg:flex">
          <li className="mb-5 py-1 px-2 font-medium">
            <h5>About us</h5>
          </li>
          {abouts.map(([title,url],index)=>
            <li key={index}>
            <a
              target="_blank"
              className="py-1 px-2 hover:text-primary hover:underline hover:underline-offset-4 focus:outline-0 focus:ring-2 focus:ring-primary"
              href={url}
            >
              {title}
            </a>
          </li>
          )}
        </ul>
        <ul className="flex flex-col gap-10 text-center xl:text-left">
          <li className="py-1 px-2 font-medium">
            <h5 id="contacts">Contacts</h5>
          </li>
          <li>
            <a
              className="py-1 px-2 hover:text-primary hover:underline hover:underline-offset-4 focus:outline-0 focus:ring-2 focus:ring-primary"
              href="mailto:hello@fibo.cloud"
            >
              hello@fibo.cloud
            </a>
          </li>
        </ul>
        <ul className="hidden flex-col gap-10 text-center lg:flex xl:text-left">
          <li>
            <h5 className="font-medium">Direction</h5>
          </li>
          <li>
            <div className="flex gap-4 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <g transform="translate(3.5 2)">
                  <path
                    d="M8.5,20a1.358,1.358,0,0,1-.734-.247,21.513,21.513,0,0,1-5.54-5.141A10.384,10.384,0,0,1,0,8.318,8.168,8.168,0,0,1,2.5,2.434,8.53,8.53,0,0,1,8.493,0,8.423,8.423,0,0,1,17,8.318a10.39,10.39,0,0,1-2.23,6.294,21.92,21.92,0,0,1-5.541,5.141A1.319,1.319,0,0,1,8.5,20ZM8.493,5.777a2.8,2.8,0,0,0-2.8,2.8,2.712,2.712,0,0,0,.821,1.954,2.823,2.823,0,0,0,4.79-1.954,2.824,2.824,0,0,0-2.813-2.8Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              <div>
                <p className="text-sm capitalize">Ulaanbaatar / Mongolia</p>
                <p className="text-white">SHUTIS 8 library.</p>
              </div>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 py-3 px-12 font-bold uppercase transition-all focus:outline-0 mt-8 block w-full text-center border-primary hover:bg-primary focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-white"
              href="https://www.google.com/maps/place/Fibo+Education+Center,+4th+level,+Central+tower,+Sukhbaatar+square,+Khoroo+%238,+Ulaanbaatar+14200+Ulaanbaatar,+14200/@47.9180885,106.9203247,19z/data=!4m6!3m5!1s0x5d96939792aff15f:0x3997b715410fb4f6!8m2!3d47.9180885!4d106.9203247!16s%2Fg%2F11rc8c8w0w"
            >
              On Map
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <div className=" w-1/2 flex flex-row justify-around md:w-1/5">
          <a
            href="#"
            className="hover:bg-primary w-25 h-25 items-center p-2 rounded-full hover:border-primary cursor-pointer"
            style={{ borderWidth: 1 }}
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="hover:bg-primary w-25 h-25 items-center p-2 rounded-full hover:border-primary cursor-pointer"
            style={{ borderWidth: 1 }}
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:bg-primary w-25 h-25 items-center p-2 rounded-full hover:border-primary cursor-pointer"
            style={{ borderWidth: 1 }}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p>
          © AWS<span className="text-primary ">Community</span> / 2023, All Rights
          Reserved
        </p>
        <ul className="flex gap-8"></ul>
      </div>
    </footer>
  );
}

export default Footer;
