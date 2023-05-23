"use client";
import React from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Deeditem from "./deeditem";
export default function Deed() {
  const item = [
    [
      "",
      "",
      '/events/1.png',
    ],
    [
      "",
      "",
      '/events/2.png',
    ],
    [
      "",
      "",
      '/events/3.png',
    ],
    [
      "",
      "",
      '/events/4.png',
    ],
    [
      "",
      "",
      '/events/5.png',
    ],
    [
      "",
      "",
      '/events/6.png',
    ],
    [
      "",
      "",
      '/events/7.png',
    ],
    [
      "",
      "",
      '/events/8.png',
    ],
    [
      "",
      "",
      '/events/9.png',
    ],
    [
      "",
      "",
      '/events/10.png',
    ],
    [
      "",
      "",
      '/events/11.png',
    ],
    [
      "",
      "",
      '/events/12.png',
    ],
    [
      "",
      "",
      '/events/13.png',
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
