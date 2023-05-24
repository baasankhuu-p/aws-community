"use client";
import React from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Deeditem from "./deeditem";
export default function Deed() {
  const item = [
    [
      "",
      "",
      '/events/1.webp',
    ],
    [
      "",
      "",
      '/events/2.webp',
    ],
    [
      "",
      "",
      '/events/3.webp',
    ],
    [
      "",
      "",
      '/events/4.webp',
    ],
    [
      "",
      "",
      '/events/5.webp',
    ],
    [
      "",
      "",
      '/events/6.webp',
    ],
    [
      "",
      "",
      '/events/7.webp',
    ],
    [
      "",
      "",
      '/events/8.webp',
    ],
    [
      "",
      "",
      '/events/9.webp',
    ],
    [
      "",
      "",
      '/events/10.webp',
    ],
    [
      "",
      "",
      '/events/11.webp',
    ],
    [
      "",
      "",
      '/events/12.webp',
    ],
    [
      "",
      "",
      '/events/13.webp',
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
