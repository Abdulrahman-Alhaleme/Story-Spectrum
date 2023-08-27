import { NavbarLanding } from "../../components/NavbarLanding";
import { Footer } from "../../components/Footer";

export const About = () => {
  return (
    <>
      <NavbarLanding />
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              Welcome to our Manga and Manhwa Online Store, your ultimate
              destination for all things related to Japanese manga and Korean
              manhwa! Immerse yourself in a captivating world where storytelling
              knows no bounds. Here, we've curated a diverse and extensive
              collection that caters to every reader's taste, whether you're a
              seasoned enthusiast or just starting your journey into the world
              of illustrated narratives.
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src="https://otakuusamagazine.com/wp-content/uploads/2021/03/JJK-print-run.jpeg"
              alt="A group of Chapters"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
