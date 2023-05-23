import React from "react";
const mail = [
  ["info@fibo.edu.mn"],
  ["altanbagana@fibo.cloud"],
  ["ganjiguur@fibo.cloud"],
];
const phones = [["86689886"], ["89550221"], ["99266664"]];
const map_uri =
  "https://www.google.com/maps/place/Fibo+Education+Center,+4th+level,+Central+tower,+Sukhbaatar+square,+Khoroo+%238,+Ulaanbaatar+14200+Ulaanbaatar,+14200/@47.9180885,106.9203247,19z/data=!4m6!3m5!1s0x5d96939792aff15f:0x3997b715410fb4f6!8m2!3d47.9180885!4d106.9203247!16s%2Fg%2F11rc8c8w0w";
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
        <div className="flex flex-row justify-end"><div><a href="/code-of-conduct" className=" hover:underline">Code of conducts</a> 2023</div></div>
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
