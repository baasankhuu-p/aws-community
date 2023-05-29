'use client'
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
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function Page() {
  return (
    <div className="bg-black min-h-screen min-w-full">
      {/*  bg-defbggray */}
      <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
      <Header />
      <>
        <section
          className='home-bg'
        >
          <Home />
          {/* <Dinner /> */}
        </section>
        <About />
        <Schedule />
        <Speakers />

        <section
        className='sponsor-bg'
        >
          <Sponsors />
          <Mediapartners/>
          <Organize />
        </section>
        <Location />
      </>
      <Footer />
    </div>
  );
}
