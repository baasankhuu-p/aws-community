
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
import Techpartners from "./screens/techpartners";
export default function Page() {return (
    <div className="bg-black min-h-screen min-w-full">
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
          <Techpartners/>
          <Organize />
        </section>
        <Location />
      </>
      <Footer />
    </div>
  );
}
