"use client";
import { createContext, useState } from "react";
import { yt } from "@/constants";
const hm='#home'
const ab='#about'
const sps='#speakers'
const scl='#schedules'
const pns='#sponsors'
export const UserStore = (props) => {
  const [ln, setLN] = useState("EN");
  const [nav, setNav] = useState([
    ["Home", hm],
    ["About", ab],
    ["Speakers", sps],
    ["Schedules", scl],
    ["Sponsors", pns],
  ]);
  const [watch, setWatch] = useState(["#", "WATCH"]);
  const ChangeLn = () => {
    if (ln == "EN") {
      setLN("MN");
      setNav([
        ["Нүүр", hm],
        ["Тухай", ab],
        ["Илтгэгчид", sps],
        ["Хуваарь", scl],
        ["СПОНСОРУУД", pns],
      ]);
      setWatch([yt, "ҮЗЭХ"]);
    } else {
      setLN("EN");
      setNav([
        ["Home", hm],
        ["About", ab],
        ["Speakers", sps],
        ["Schedules", scl],
        ["Sponsors", pns],
      ]);
      setWatch([yt, "WATCH"]);
    }
  };
  return (
    <UserContext.Provider
      value={{ ln, setLN, nav, setNav, watch, setWatch, ChangeLn }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

const UserContext = createContext();
export default UserContext;
