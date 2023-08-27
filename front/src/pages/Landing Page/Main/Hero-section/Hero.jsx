import BgAnimation from "./BgAnimation";
import BottomGrid from "./BottomGrid";
import Heroo from "./Heroo";
import Navbar from "./Navbar";

export const Hero = () => {
  return (
    <section className="bg-neutral dark:bg-gray-900 " id="home">
      <div className="h-screen overflow-hidden relative max-h-screen">
        <BgAnimation />
        <Navbar />
        <BottomGrid />
        <Heroo />
      </div>
    </section>
  );
};
