"use client";
import React, { useState } from "react";
import { IoLogoLinkedin, IoMdCloseCircleOutline } from "react-icons/io";
function Speakers() {
  const speacker_info = [
    [
      "Victor Vedmich",
      "Senior Developer Advocate at AWS (Munich, Germany)",
      "./speakers/1.png",
      "Learn more",
      "Throughout his professional journey, Viktor has thrived in various roles, including those of a developer, systems engineer, and Systems Architect. He adeptly merged the responsibilities of a system architect and engineer for an extended period, focusing on Kubernetes-based projects. Whenever the opportunity arises, he generously imparts knowledge through speeches, audio recordings, and video podcasts, enriching the tech community with his expertise.",
      "https://www.linkedin.com/in/vedmich/",
    ],
    [
      "Almas Moldakanov",
      "Territory Manager at AWS",
      "./speakers/2.png",
      "Learn more",
      "Almas is an accomplished business development professional with a strong focus on achieving results. With over 10 years of experience in high-tech international companies and startups, he has honed his skills in driving business growth. Almas has had the privilege of being recognized as a Speaker at prestigious events such as the Harvard College Project for Asian and International Relations (HPAIR) 2019 and the AISEC Top Talents Almaty project, showcasing his expertise and thought leadership in the industry.",
      "https://www.linkedin.com/in/almas-moldakanov/",
    ],
    [
      "Egor Miasnikov",
      " Solutions Architect at AWS",
      "./speakers/3.png",
      "Learn more",
      "Egor embarked on his professional journey as a hardware engineer, specializing in the optimization and repair of mobile phones. Over the course of his career, he has occupied diverse positions, such as engineer, solutions architect, and product manager, contributing to intricate projects across the globe. Presently, Egor serves as a Solutions Architect at AWS, leveraging his expertise to assist businesses in CEA (Central and Eastern Europe) and Ukraine, facilitating the construction of streamlined cloud infrastructures.",
      "https://www.linkedin.com/in/miasnikov/",
    ],
    [
      "Darkhanbayar Erdenebat",
      "CTO FIBO CLOUD",
      "./speakers/4.png",
      "Learn more",
      "As the CTO of Fibo Cloud, a prominent cloud native services development company, I spearhead and oversee the execution of the most intricate and challenging technology projects. Our company specializes in leveraging cloud technologies to create innovative solutions for our clients. With a strong focus on delivering cutting-edge services, we tackle complex projects that require expertise in cloud-native architecture, scalable infrastructure, and advanced technologies. At Fibo Cloud, our mission is to lead the way in revolutionizing the technology landscape by providing exceptional services and driving the success of our clients' most demanding ventures.",
      "https://www.linkedin.com/in/darkhanbayar-erdenebat/",
    ],
    [
      "Tsengel Enkhbat",
      "Senior Developer at Unimedia Solutions LLC",
      "./speakers/5.png",
      "Learn more",
      "As an experienced Developer, I have built a solid track record in the information technology and services industry. My skill set includes expertise in Ruby on Rails, HTML, JavaScript, JSON, and Redux.js. I possess a strong foundation in computer software engineering, having obtained a Bachelor's degree with a focus on this field from Mongolia University of Science and Technology. With a combination of technical proficiency and practical experience, I am well-equipped to tackle complex software development projects and contribute to the success of any team or organization.",
      "https://www.linkedin.com/in/tsengel-enkhbat/",
    ],
    [
      "Gundsambuu Natsagdorj",
      "Co-founder and CTO at CODY, Co-founder of Intelmind.",
      "./speakers/6.png",
      "Learn more",
      "Since 2009, my professional journey has encompassed diverse roles within the technology industry. I have worked as a web and application developer, a database administrator, a dev/ops engineer, and a solution architect. Throughout my career, I have made significant contributions to various projects and successfully created platforms such as cody.mn, shoppy.mn, and coinhub.mn. These projects reflect my expertise in developing web applications, managing databases, and designing robust solutions.",
      "https://www.linkedin.com/in/gundsambuu/",
    ],
    [
      "Bayar",
      "Chief Information Officer at CallPro",
      "./speakers/7.png",
      "Learn more",
      `With over a decade of experience in web-based systems and cloud technology, I specialize in database structure and DevOps practices. I have a deep understanding of designing and optimizing database architectures, ensuring data integrity, and improving performance.

    In the DevOps realm, I excel in implementing CI/CD pipelines, automating infrastructure provisioning using AWS CloudFormation, and leveraging containerization technologies like Docker and Kubernetes.
    
    I am well-versed in AWS cloud-native database services such as Amazon RDS, Amazon DynamoDB, and Amazon Redshift. I can provide valuable insights on effective database design principles, performance optimization strategies, and best practices for implementing DevOps methodologies in web-based systems and cloud environments. Expect real-world examples and practical tips to enhance attendees' understanding and proficiency.`,
    'https://www.linkedin.com/in/bayar-udval-33719153/?originalSubdomain=mn'
    ],
  ];

  const [detailsmodal, setdetailsModal] = useState(false);
  const [speaker, setSpeaker] = useState(null);
  const onHandlerSpeaker = (el) => {
    console.log(el);
    setdetailsModal(true);
    setSpeaker(el);
  };
  const closeModal = () => {
    setdetailsModal(false);
  };
  return (
    <section
      id="speakers"
      className="w-full min-h-screen px-10 md:px-48 md:pb-20 flex flex-col justify-center"
    >
      <div className="flex flex-col justify-between">
        <h4 className="block font-futura font-bold uppercase -tracking-wider xl:text-7xl xl:tracking-normal text-3xl text-white">
          <span className="relative top-5 block text-xl text-primary xl:text-3xl my-2">
            line up
          </span>
          <div>Speakers</div>
        </h4>
      </div>
      <div className="mt-5 grid gap-[2px] md:grid-cols-2 xl:grid-cols-3">
        {speacker_info.map((el, index) => (
          <div
            key={index}
            className=" relative flex aspect-square flex-col items-start justify-between p-2 shadow-speaker"
          >
            {el[5] && (
              <a href={el[5]} className="z-20 absolute  right-1 top-1">
                {" "}
                <IoLogoLinkedin
                  style={{ color: "#0072b1" }}
                  className="w-8 h-8 bg-white rounded"
                />{" "}
              </a>
            )}
            <img
              src={el[2] ? el[2] : "./speakers/empty.png"}
              style={{
                position: "absolute",
                inset: "0px",
                boxSizing: "border-box",
                padding: "0px",
                border: "none",
                display: "block",
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: "cover",
                bottom: 0,
                right: 0,
              }}
              alt={`speakers ${el[0]}`}
            />
            <div className="text-white relative z-[1] flex h-full flex-col w-full items-start justify-end">
              <div
                className={`${
                  (el[0] || el[1]) && "bg-black w-full p-2  content-shadow"
                }`}
              >
                <div>
                  <h5 className=" text-sm font-bold lg:text-xl">{el[0]}</h5>
                  <p className="mt-1 lg:text-sm capitalize">{el[1]}</p>
                </div>
                {el[3] && (
                  <button
                    onClick={() => {
                      onHandlerSpeaker(el);
                    }}
                    className="relative mb-1 text-xs md:text-sm font-medium uppercase tracking-widest transition-colors after:absolute after:-bottom-[10px] after:left-0 after:h-[2px] text-prim after:w-32 after:bg-primary hover:text-white hover:after:bg-white focus:text-white focus:outline-0  text-primary"
                  >
                    {el[3]}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {detailsmodal && speaker && (
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-40"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className=" relative bg-black p-5 rounded z-50 md:w-3/4 md:h-3/4 border-2 border-primary flex flex-col justify-center items-start text-white">
              <IoMdCloseCircleOutline
                className="w-10 h-10 text-slate-400 hover:text-white cursor-pointer absolute right-5 top-5"
                onClick={closeModal}
              />
              <div className="text-xl md:text-3xl font-bold pt-2">
                {speaker[0]}
              </div>
              <span className="italic font-normal py-2 md:text-2xl">
                " {speaker[1]} "
              </span>
              <div className="w-auto h-1/2 md:h-3/4 md:mt-5 flex flex-col md:flex-row items-center ">
                <img
                  src={speaker[2]}
                  className="w-auto h-32 rounded-xl md:h-full"
                  alt={speaker[0]}
                />
                <div className="md:mx-1 lg:mx-5">
                  <div className=" text-xs md:text-lg lg:2xl">{speaker[4]}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Speakers;
