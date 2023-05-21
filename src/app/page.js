import Header from "./component/Header";
import Home from "./screens/home"
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
            backgroundImage: 'url("https://kazhackstan.kz/abstract.svg")',
            backgroundSize: "100% 100%",
            backgroundPosition: "center -200px",
            backgroundRepeat: "no-repeat"
          }}
        >
          <Home />
          <Dinner />
      </section>
      <About/>
      <Schedule/>
      <Speakers/>
      <Sponsors/>
      <Organize/>
      <Location/>
      <Footer/>
    </div>
  );
}
