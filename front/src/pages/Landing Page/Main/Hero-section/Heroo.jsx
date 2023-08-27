import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Img1 from "../../../../assets/img/one-piece-4k-.jpg";
import Img2 from "../../../../assets/img/SAO.jpg";
import Img3 from "../../../../assets/img/soloLeveling.jpg";

const containerVariants = {
  animate: {
    transition: {
      delayChildren: 2,
      staggerChildren: 0.6,
    },
  },
};

const imgVariants = {
  initial: {
    opacity: 0,
    x: -100,
    y: 100,
    rotateZ: 20,
  },
  animate: (custom) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotateZ: custom === 0 ? -20 : custom === 1 ? 0 : 20,
  }),
};

const Hero = () => {
  return (
    <div className="grid grid-cols-3 mx-auto max-w-screen-lg w-full">
      <div className="z-10 text-left col-span-2 flex gap-3 relative flex-col pt-[20vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="w-full"
        >
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-purple-100 text-5xl uppercase tracking-wide">
            Checkout our
          </h1>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-purple-100 text-7xl">
            New Collection
          </h1>
          <p className="uppercase py-2 text-gray-400 text-base tracking-wider">
            The fastest shop to get the new chapters
          </p>
          <Link to="/login">
            <button className="py-2 border border-white text-white w-[20vw] px-4 text-md tracking-widest uppercase mt-3">
              See More
            </button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative z-40"
      >
        <motion.img
          variants={imgVariants}
          custom={0}
          src={Img1}
          className="h-[70vh] w-full -left-[10vw] -rotate-12 absolute object-cover z-10"
        />
        <motion.img
          custom={1}
          variants={imgVariants}
          src={Img3}
          className="h-[70vh] w-full absolute object-cover z-10"
        />
        <motion.img
          custom={2}
          variants={imgVariants}
          src={Img2}
          className="h-[70vh] left-[10vw] rotate-12 w-full absolute object-cover z-10"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
