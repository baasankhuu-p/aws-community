"use client";
import { createContext, useState } from "react";

export const UserStore=(props) =>{
  const [ln, setLN] = useState("EN");
  const [nav, setNav] = useState([
    ["Home", "#home"],
    ["About", "#about"],
    ["Speakers", "#speakers"],
    ["Schedules", "#schedules"],
    ["Sponsors", "#sponsors"],
  ]);
  const [watch, setWatch] = useState(["#", "WATCH"]);
  const ChangeLn = ()=>{
    if(ln=='EN'){
        setLN('MN');
        setNav([
            ["Нүүр", "#home"],
            ["Тухай", "#about"],
            ["Илтгэгчид", "#speakers"],
            ["Хуваарь", "#schedules"],
            ["СПОНСОРУУД", "#sponsors"],
          ]);
          setWatch(["#", "ҮЗЭХ"])
    }
    else{
        setLN('EN');
        setNav([
            ["Home", "#home"],
            ["About", "#about"],
            ["Speakers", "#speakers"],
            ["Schedules", "#schedules"],
            ["Sponsors", "#sponsors"],
          ])
          setWatch(["#", "WATCH"])

    }
  }
  return (
    <UserContext.Provider value={{ ln, setLN, nav, setNav, watch, setWatch,ChangeLn }}>
      {props.children}
    </UserContext.Provider>
  );
  
}

const UserContext = createContext();
export default UserContext;
