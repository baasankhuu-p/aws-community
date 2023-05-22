import Header from "./component/Header";
import Home from "./screens/home";
import About from "./screens/about";
import Dinner from "./screens/dinner";
import Schedule from "./screens/schedule";
import Speakers from "./screens/speakers";
import Sponsors from "./screens/sponsors";
import Location from "./screens/location";
import Footer from "./screens/footer";
import Organize from "./screens/orgonizer";
export default function Page() {
  return (
    <div className="bg-black min-h-screen min-w-full">
      {/*  bg-defbggray */}
      <Header />
      <section
        style={{
          zIndex: 0,
          overflow: "hidden",
          backgroundImage: `url(/bg1.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center -200px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Home />
        <Dinner />
      </section>
      <About />
      <Schedule />
      <Speakers />

      <section
        style={{
          position: "relative",
          zIndex: 0,
          overflow: "hidden",
          backgroundImage: 'url("bg2.svg")',
          backgroundSize: "cover",
          backgroundPosition:'center center',
          backgroundRepeat: "no-repeat",
        }}
      >
        <Sponsors />
        <Organize />
      </section>
      <Location />
      <Footer />
    </div>
  );
}
