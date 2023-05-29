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

export default function Page() {
  return (
    <div className="bg-black min-h-screen min-w-full">
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VZ10786RJP', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
      {/*  bg-defbggray */}
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
