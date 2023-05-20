"use client";
import React from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Deeditem from "./deeditem";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
export default function Deed() {
  const item = [
    [
      "2017",
      "Ulaanbaatar",
      "https://kazhackstan.kz/_next/image?url=%2F2017.webp&w=1920&q=75",
    ],
    [
      "2018",
      "Ulaanbaatar",
      "https://kazhackstan.kz/_next/image?url=%2F2018.webp&w=1920&q=75",
    ],
    [
      "2019",
      "Ulaanbaatar",
      "https://kazhackstan.kz/_next/image?url=%2F2019.webp&w=1920&q=75",
    ],
    [
      "2020",
      "Ulaanbaatar",
      "https://kazhackstan.kz/_next/image?url=%2F2017.webp&w=1920&q=75",
    ],
  ];
  return (
    <ScrollingCarousel>
      {item.map(([duedate, country, url], index) => (
        <Deeditem key={index} duedate={duedate} country={country} url={url} />
      ))}
    </ScrollingCarousel>
  );
}
