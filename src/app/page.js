"use client";
import Header from "./component/Header";
import Home from "./screens/home";
import About from "./screens/about";
import Schedule from "./screens/schedule";
import Speakers from "./screens/speakers";
import Sponsors from "./screens/sponsors";
import Location from "./screens/location";
import Footer from "./screens/footer";
import Organize from "./screens/orgonizer";
import Mediapartners from "./screens/mediaPartners";
import ReactGA from 'react-ga';
import { useEffect } from "react";
export default function Page() {
  ReactGA.initialize('UA-214515501-1');
  useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[])
  return (
    <div className="bg-black min-h-screen min-w-full">
      {/*  bg-defbggray */}
      <Header />
      <>
        <section className="home-bg">
          <Home />
        </section>
        <About />
        <Schedule />
        <Speakers />

        <section className="sponsor-bg">
          <Sponsors />
          <Mediapartners />
          <Organize />
        </section>
        <Location />
      </>
      <Footer />
    </div>
  );
}
