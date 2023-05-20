import Image from "next/image";
import Header from "./component/Header";
import Home from "./screens/home"
import About from "./screens/about";
import Dinner from "./screens/dinner";
export default function Page() {
  return (
    <div className="bg-black min-h-screen min-w-full">
      {/*  bg-defbggray */}
        <Header />
        <div
          style={{
            zIndex: 0,
            overflow: "hidden",
            backgroundImage: 'url("https://kazhackstan.kz/abstract.svg")',
            backgroundSize: "100% 100%",
            backgroundPosition: "center -200px",
            backgroundRepeat: "no-repeat",
            
          }}
        >
          <Home />
          <Dinner />
      </div>
      <About/>
    </div>
  );
}
