import React from "react";
function Deeditem({ duedate, country, url }) {
  return (
    <div className="z-20 relative w-3/4 md:w-auto h-auto mr-5">
      <img src={url} className="rounded w-auto h-auto" alt="deeds" />
      <div className="absolute bottom-2 left-2">
        <div className="text-xl font-bold xl:text-7xl">{duedate}</div>
        <div className=" font-Fugaz text-sm text-orange xl:text-3xl font-bold uppercase">{country}</div>
      </div>
    </div>
  );
}

export default Deeditem;
