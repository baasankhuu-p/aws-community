import Image from "next/image";
import Header from "./component/Header";
import About from "./screens/home";
import Dinner from "./screens/dinner";
export default function Home() {
  return (
      <div className=" bg-defbggray min-h-screen min-w-full">
        <Header />
        <About />
        <Dinner/>
      </div>
  );
}
